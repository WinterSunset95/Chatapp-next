import { createUserWithEmailAndPassword } from 'firebase/auth';
import {HttpStatusCodes} from '../components/util/HttpStatusCodes';
import { auth } from '../firebaseConfig';

export default function handler(req, res) {

    const body = req.body;

    const email = body.email;
    const password = body.password;
    const repeatPassword = body.repeatPassword;

    // Some dumb validation.
    if (!email || !password || !repeatPassword)
    {
        res.status(HttpStatusCodes.BadRequest).json("Missing values.");
    }

    if (password !== repeatPassword)
    {
        res.status(HttpStatusCodes.BadRequest).json("Passwords must be equal.");
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => 
        {
            const user = userCredential.user;
            return res.status(HttpStatusCodes.Ok).json(user);
        })
        .catch((error) => 
        {
            const errorCode = error.code;
            const errorMessage = error.message;

            res.status(HttpStatusCodes.InternalServerError).json(
                {
                    code: errorCode,
                    message: errorMessage
                });
        })
  }
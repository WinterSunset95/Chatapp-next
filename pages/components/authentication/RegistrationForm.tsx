import { User } from "firebase/auth";
import { FormEvent, useState } from "react";
import formStyles from '../../../styles/Form.module.css';

export type RegistrationProps = {
    onError: (error: string) => void;
    onSuccess: (user: User) => void;
    onSubmit: () => void;
};

export const RegistrationForm = (props: RegistrationProps) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repeatPassword, setRepeatPassword] = useState<string>();

    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();

    const submitRegistration = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        props.onSubmit();

        if (!validateForm()) {
            console.log('Failed form field validation while registering.');
            return;
        }

        // Request format which must match the registration api.
        var data = {
            email: email,
            password: password,
            repeatPassword: repeatPassword
        };

        const JSONdata = JSON.stringify(data)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        setIsLoading(true);

        fetch('/api/registration', options)
            .then((response) => {
                if (response.ok) {
                    response.json()
                        .then(data => props.onSuccess(data));
                }
            })
            .catch((err) => {
                setError(err);
                props.onError(err);
            })
            .finally(() => setIsLoading(false));
    }

    const validateForm = (): boolean => {
        if (!email) {
            setError("E-mail is required.");
            return false;
        }

        if (!password || !repeatPassword) {
            setError("Passwords are required.");
            return false;
        }

        if (password !== repeatPassword) {
            setError("Passwords do not match!");
            return false;
        }

        return true;
    }

    return <div>
        <h1>Registration</h1>
        <form onSubmit={submitRegistration} className={formStyles.form}>
            <label htmlFor="registration-email">E-mail:</label>
            <input
                className={formStyles.formField}
                id="registration-email"
                type="email"
                name="registration-email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required />
            <br />

            <label htmlFor="registration-password">Password:</label>
            <input
                className={formStyles.formField}
                id="registration-password"
                type="password"
                name="registration-password"
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required />

            <br />
            <label htmlFor="registration-password">Password:</label>
            <input
                className={formStyles.formField}
                id="registration-password-repeat"
                type="password"
                name="registration-password-repeat"
                onChange={(e) => setRepeatPassword(e.target.value)}
                minLength={6}
                required />

            <br/>
            {isLoading ? "Submitting..." : ""}
            {error &&
                <div>
                    <b>{error}</b>
                </div>
            }

            <br/>

            <button type="submit">Submit</button>
        </form>

    </div>
}


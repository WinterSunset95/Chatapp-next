import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import styles from '../styles/Home.module.css'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

const email = process.env.NEXT_PUBLIC_EMAIL
const password = process.env.NEXT_PUBLIC_PASSWORD
console.log(email, password)

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
export default function Home() {
  
  return (
    <div>
      <nav className={styles.header}>
        <h1>Programmers' guild</h1>
        <div>
          <a href='https://github.com/WinterSunset95'>
            <img src='https://avatars.githubusercontent.com/u/90015510?v=4' className={styles.homeGithubImg}/>
          </a>
        </div>
      </nav>
      <section className={styles.homeLogin}>
        <div className={styles.homeLoginBox}>
          <div>
            <h3>Input a username</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

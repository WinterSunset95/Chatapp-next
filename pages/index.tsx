import { User } from 'firebase/auth';
import { setuid } from 'process';
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { RegistrationForm } from './components/authentication/RegistrationForm';

export default function Home() {

  // TODO: Migrate this part away to some different location.

  const [user, setUser] = useState<User>();
  
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
      <section>
        <RegistrationForm onSubmit={() => setUser(undefined)} onSuccess={(user) => setUser(user)} onError={(error) => console.error(`I fucked up: ${error}}`)} />
        <div>
          {user &&
            <div>
              <h2>User {user.uid} created.</h2>
              <p>
                Is email verified: {user.emailVerified ? "Yes": "No"}
              </p>
            </div> 
          }
        </div>
      </section>
    </div>
  )
}

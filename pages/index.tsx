import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import styles from '../styles/Home.module.css'

const firebaseConfig = {
  apiKey: "AIzaSyAkQ3m218l2V04nNST11rZ537qfdTxUn_g",
  authDomain: "chatapp-next-43499.firebaseapp.com",
  projectId: "chatapp-next-43499",
  storageBucket: "chatapp-next-43499.appspot.com",
  messagingSenderId: "1068927886270",
  appId: "1:1068927886270:web:9cae76dd0ec526310b0fef",
  measurementId: "G-67LH41QL3V"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default function Home() {
  
  return (
    <div>
      <h1>This is a header</h1>
      <h2>This is a h2 tag</h2>
    </div>
  )
}

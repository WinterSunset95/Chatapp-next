import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

function initializeAppIfNecessary() {
    try {
      return getApp();
    } catch (any) {
      return initializeApp(firebaseConfig);
    }
  }
  
export const app = initializeAppIfNecessary();
export const auth = getAuth(app);
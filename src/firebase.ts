import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1bYUMUkde6rVdxlKufPo5e_cOD_Ka8Mo",
  authDomain: "db-proj-25054.firebaseapp.com",
  databaseURL: "https://db-proj-25054-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "db-proj-25054",
  storageBucket: "db-proj-25054.appspot.com",
  messagingSenderId: "1091081795605",
  appId: "1:1091081795605:web:bfeb645261ca9ae62d361c",
  measurementId: "G-EE44BQ3NLW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
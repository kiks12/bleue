"use client";

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../src/firebase'; 

// const getData = async () => {
//   try {
//     const res = await fetch('https://randomuser.me/api/');
//     const json = await res.json();
//     return json;
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// }

export default function Home() {
  // const data = await getData();
  
  const signIn = async () => {
    try {
      const sign = await signInWithPopup(auth, provider);
      const user = sign.user;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="">
      <button onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  )
}

"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../src/firebase";
import { userState } from '../../src/atoms'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Login() {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["userEmail"]);

  const signIn = async () => {
    try {
      const sign = await signInWithPopup(auth, provider);
      const user = sign.user;
      setCookie("userEmail", user.email);
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
        <main 
            className="w-screen h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col">
            <button
                className="px-10 py-2 rounded-md bg-gray-100 border border-gray-300" 
                onClick={signIn}
            >
                Sign in with Google
            </button>
            <button
                className="mt-2 px-10 py-2 rounded-md bg-gray-100 border border-gray-300" 
            >
                Sign in with Facebook
            </button>
          </div>
        </main>
    </>
  );
}

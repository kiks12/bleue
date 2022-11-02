"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../src/firebase";
import { useRecoilState } from "recoil";
import { userState } from '../../src/atoms'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    if (user.email !== "" && user.username !== "") router.push("/")
  }, [user, router]);

  const signIn = async () => {
    try {
      const sign = await signInWithPopup(auth, provider);
      const user = sign.user;
      setUser({
        email: user.email ?? "",
        username: user.displayName ?? "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <button onClick={signIn}>Sign in with Google</button>
        <button>Sign in with Facebook</button>
      </div>
    </main>
  );
}

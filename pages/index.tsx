"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../src/atoms";
import { useRouter } from "next/router";

export default function Home() {
  const [user] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    if (user.email === "" && user.username === "") router.push("/login");
  }, [user, router]);

  return (
    <div className="">
      Home
    </div>
  )
}

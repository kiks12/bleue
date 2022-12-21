"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  /*
  useEffect(() => {
    if (user.email === "" && user.username === "") router.push("/login");
  }, [user, router]);
  */

  return (
    <div className="">
      Home
    </div>
  )
}

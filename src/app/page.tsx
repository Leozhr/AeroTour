"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>
      <h1>Hello {data?.user?.name}</h1>
      <img src={data?.user?.image ?? ""} alt="" />
    </div>
  )
}
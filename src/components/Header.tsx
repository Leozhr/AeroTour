"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { status, data } = useSession();

  const handleSignIn = () => { signIn() }

  return (
    <header className="container mx-auto p-5 h-[80px] flex justify-between shadow-md">
      <Link href={"/"}>
        <Image width={183} height={32} src="/aerotour.svg" alt="AeroTour" 
        className="scale-90" />
      </Link>
      
      { status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 p-2 px-3 border-2 border-aero_c3
         rounded-full cursor-pointer">
          <AiOutlineMenu size={24}/>
          <Image width={32} height={32} src={data.user.image ?? ""} alt="User" 
          className="rounded-full" />
        </div>
      )}

      { status === "unauthenticated" && (
      <button className="text-aero_c1 text-md font-semibold" onClick={handleSignIn}>
        Login
      </button>
      )}
    </header>
  )
}

export default Header
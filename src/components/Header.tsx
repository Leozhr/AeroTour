"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { status, data } = useSession();

  const handleSignIn = () => { signIn() }

  return (
    <div className="container mx-auto p-5 h-[90px] flex justify-between shadow-md">
      <Image width={183} height={32} src="/aerotour.svg" alt="AeroTour" 
      className="scale-90" />
      
      { status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 p-2 px-3 border-2 border-aero_c3
         rounded-full cursor-pointer">
          <AiOutlineMenu size={24}/>
          <Image width={32} height={32} src={data.user.image ?? ""} alt="User" 
          className="rounded-full" />
        </div>
      )}

      { status === "unauthenticated" && (
      <button className="text-aero_c1 text-sm font-semibold" onClick={handleSignIn}>
        Login
      </button>
      )}
    </div>
  )
}

export default Header
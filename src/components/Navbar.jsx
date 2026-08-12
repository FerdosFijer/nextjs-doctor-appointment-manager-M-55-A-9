 'use client' 

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar =  () => {
const {data: session, isPending}= authClient.useSession()
const user= session?.user
console.log(user);

const handleSignOut = async () =>{
  await authClient.signOut();
};

  return (
    <div className=" py-3 shadow-xl sticky top-0 z-50 border-cyan-100 bg-cyan-50/95  backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-7xl mx-auto text-slate-600 ">
        <div className="flex items-center gap-2">
          <Image className="w-12 h-10 " 
            src={"/assets/NavLogo.png"}
            height={1000}
            width={1000}
            alt="logo"
          />
          <h1 className="font-bold text-xl text-cyan-500"> Doc<span className="text-cyan-600">Appoint</span></h1>
        </div>

        <ul className="flex gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-appointments"}>All Appointments</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          
        </ul>

        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          {
            user ? <><li><Avatar>
                        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar> 
                    </li>
            <li><Button variant="danger" className=" rounded-none" onClick={handleSignOut}>Logout</Button></li>
            </>:<>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"} >Sign Up</Link>
            </li>
          </>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

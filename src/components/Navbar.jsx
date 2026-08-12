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
    <div className="bg-white py-3 border-2 shadow-xl">
      <nav className="flex items-center justify-between max-w-7xl mx-auto text-slate-600">
        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={100}
            width={100}
            alt="logo"
          />
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

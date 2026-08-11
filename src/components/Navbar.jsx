import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>

        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

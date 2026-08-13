"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSwitch = () => {
  const pathname = usePathname();

  const isBooking = pathname === "/dashboard/booking";
  const isProfile = pathname === "/dashboard/profile";

  return (
    <div className="mt-5 flex overflow-hidden border border-slate-200 bg-slate-50 w-fit">

      {/* Booking */}
      <Link
        href="/dashboard/booking"
        className={`px-7 py-3 text-sm font-semibold transition ${
          isBooking
            ? "bg-cyan-500 text-white"
            : "text-slate-600 hover:bg-white hover:text-cyan-600"
        }`}
      >
        My Bookings
      </Link>

      {/* Profile */}
      <Link
        href="/dashboard/profile"
        className={`px-7 py-3 text-sm font-semibold transition ${
          isProfile
            ? "bg-cyan-500 text-white"
            : "text-slate-600 hover:bg-white hover:text-cyan-600"
        }`}
      >
        My Profile
      </Link>

    </div>
  );
};

export default DashboardSwitch;
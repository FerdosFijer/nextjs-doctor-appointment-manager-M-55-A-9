import DashboardSwitch from "@/components/DashboardSwitch";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const {token} = await auth.api.getToken({
        headers: await headers()
      })
  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
      headers:{
        authorization:`Bearer ${token}`
      }
    });
    const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <DashboardSwitch />
      </div>

      <div className="mt-8 mb-10 overflow-hidden border border-slate-200 bg-white shadow-sm">
        {/* Profile Header */}
        <div className="relative overflow-hidden bg-linear-to-r from-cyan-600 to-cyan-500 px-6 py-8">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-40 h-60 w-60 rounded-full bg-white/10" />

          <div className="relative flex flex-col items-center gap-5 sm:flex-row">
            {/* Profile Image */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white text-4xl font-bold text-cyan-600">
                  {user?.name?.charAt(0)?.toUpperCase()}
                </div>
              )}
            </div>

            {/* User Information */}
            <div className="text-center text-white sm:text-left">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-100">
                Patient Profile
              </p>

              <h2 className="mt-1 text-3xl font-bold">{user?.name}</h2>

              <p className="mt-1 text-cyan-100">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Full Name */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Full Name
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-700">
              {user?.name}
            </h3>
          </div>

          {/* Email */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Email Address
            </p>

            <h3 className="mt-2 truncate text-lg font-bold text-slate-700">
              {user?.email}
            </h3>
          </div>

          {/* Email Verification */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Email Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  user?.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              />

              <h3
                className={`font-bold ${
                  user?.emailVerified ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {user?.emailVerified ? "Verified" : "Not Verified"}
              </h3>
            </div>
          </div>

          {/* Account Type */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Account Type
            </p>

            <h3 className="mt-2 text-lg font-bold text-cyan-600">Patient</h3>
          </div>

          {/* Joined Date */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Member Since
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-700">
              {new Date(user?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>

          {/* Account Status */}
          <div className="border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Account Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <h3 className="font-bold text-emerald-600">Active</h3>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
          <p className="text-sm text-slate-500">
            Welcome back,{" "}
            <span className="font-semibold text-slate-700">{user?.name}</span>.
            Manage your profile and healthcare appointments from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

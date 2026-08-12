import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20">
                <MdHealthAndSafety className="text-3xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  DocAppoint
                </h2>

                <p className="text-xs text-slate-400">
                  Doctor Appointment Manager
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Making healthcare simpler and more accessible. Find trusted
              doctors, book appointments, and manage your healthcare journey
              from one convenient platform.
            </p>

            {/* Social Icons */}
            <div className="mt-7">
              <p className="mb-4 text-sm font-semibold text-white">
                Follow us
              </p>

              <div className="flex gap-3">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  <FaInstagram size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  <FaTwitter size={16} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  <FaLinkedinIn size={16} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  <FaYoutube size={17} />
                </a>

              </div>
            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/doctors"
                  className="transition hover:text-cyan-400"
                >
                  Find Doctors
                </Link>
              </li>

              <li>
                <Link
                  href="/appointments"
                  className="transition hover:text-cyan-400"
                >
                  Appointments
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="transition hover:text-cyan-400"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>


          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-2">
                <FaStethoscope className="text-cyan-400" />
                Doctor Consultation
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Online Appointment
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Specialist Doctors
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Appointment Management
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Healthcare Support
              </li>

            </ul>
          </div>


          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-sm">

              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-lg text-cyan-400" />

                <span>
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-lg text-cyan-400" />

                <span>
                  +880 1234-567890
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-lg text-cyan-400" />

                <span>
                  support@medicare.com
                </span>
              </li>

            </ul>

            {/* CTA */}
            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <p className="text-sm font-semibold text-white">
                Need medical assistance?
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Find a doctor and book your appointment today.
              </p>

              <Link
                href="/doctors"
                className="mt-4 inline-block rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Find a Doctor
              </Link>

            </div>
          </div>

        </div>
      </div>


      {/* ================= BOTTOM ================= */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm sm:px-10 md:flex-row md:text-left lg:px-8">

          <p className="text-slate-500">
            © 2026{" "}
            <span className="font-semibold text-slate-300">
              MediCare
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms of Service
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
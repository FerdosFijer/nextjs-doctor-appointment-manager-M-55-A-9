import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegCalendar, FaStar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const AppointmentCard = ({ appointment }) => {
  const {
    _id,
    name,
    specialty,
    image,
    experience,
    description,
    hospital,
    location,
    fee,
  } = appointment;

  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available
        </div>
      </div>

      <div className="p-4">
        {/* Specialty + Rating */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-cyan-500">
            <span>{specialty}</span>
          </div>

          <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-500">
            <FaStar />
            <span>4.9</span>
          </div>
        </div>

        {/* Doctor Name */}
        <div className="mt-3">
          <h2 className="text-lg font-bold text-slate-800 transition group-hover:text-cyan-500">
            {name}
          </h2>

          <p className="text-xs text-slate-400">{hospital}</p>
        </div>

        {/* Location + Experience */}
        <div className="mt-3 flex justify-between gap-x-4 gap-y-2 text-xs text-slate-500">
          <div>
            <div className="flex items-center gap-1.5">
              <LuMapPin className="text-cyan-500" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaRegCalendar className="text-cyan-500" />
              <span>{experience} experience</span>
            </div>
          </div>
          <div>
            <Link
              href={`/all-appointments/${_id}`}
              className="flex h-10 w-full items-center justify-between rounded-lg bg-cyan-500 px-4  font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
            >
              <span>Book Appointment</span>

              
            </Link>
          </div>
        </div>

        <div />
      </div>
    </div>
  );
};

export default AppointmentCard;

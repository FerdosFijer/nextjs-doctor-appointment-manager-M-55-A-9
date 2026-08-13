import Marquee from "react-fast-marquee";
import AppointmentCard from "./AppointmentCard";

const MainDoctorPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`);

  const appointments = await res.json();

  return (
    <section className=" bg-linear-to-b from-cyan-50 via-white to-white py-6">

     
      <div className="mx-auto  max-w-3xl px-6 text-center">

        
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600">
          <span>🩺</span>
          Trusted Healthcare Professional
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Featured<span className="text-cyan-500"> Doctors</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Connecting you with trusted doctors for better healthcare.
        </p>

      </div>


      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-cyan-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white to-transparent sm:w-32" />

        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          <div className="flex gap-6 px-3 py-5">

            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="w-[320px] shrink-0 sm:w-100 lg:w-100"
              >
                <AppointmentCard
                  appointment={appointment}
                />
              </div>
            ))}

          </div>
        </Marquee>

      </div>


      {/* ================= BOTTOM CTA ================= */}
      <div className="mt-12 text-center">

        <p className="mb-4 text-sm text-slate-500">
          Can not find the doctor you are looking for?
        </p>

        <a
          href="/doctors"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-600"
        >
          View All Doctors
          <span>→</span>
        </a>

      </div>

    </section>
  );
};

export default MainDoctorPage;
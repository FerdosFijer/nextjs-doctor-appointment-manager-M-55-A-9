import Marquee from "react-fast-marquee";
import AppointmentCard from "./AppointmentCard";

const MainDoctorPage = async () => {
  const res = await fetch("http://localhost:5000/appointments");
  const appointments = await res.json();
  return (
  <div>
    <div className=" w-full bg-slate-700  py-4 text-center text-white">
  <div className="mx-auto max-w-3xl">

    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      Featured{" "}
      <span className="text-cyan-400">
        Doctors
      </span>
    </h2>
    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
      Connecting you with trusted doctors for better healthcare.
    </p>

  </div>
</div>
    <Marquee>
      <div className="grid grid-cols-12 gap-5 ">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
          ></AppointmentCard>
        ))}
      </div>
    </Marquee>
  </div>
  );
};

export default MainDoctorPage;

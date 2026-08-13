import {
  FaUserDoctor,
  FaCalendarCheck,
  FaShieldHeart,
  FaHeadset,
} from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <section className="my-16 bg-gradient-to-b from-cyan-50 to-white px-6 py-16">

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Healthcare Made{" "}
          <span className="text-cyan-500">
            Simple
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Your trusted partner for convenient, reliable, and
          personalized healthcare experiences.
        </p>

      </div>


      {/* Cards */}
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* Card 1 */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white">
            <FaUserDoctor className="text-2xl" />
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            Trusted Doctors
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Connect with experienced and qualified doctors who
            are committed to providing quality healthcare.
          </p>

          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-50 opacity-0 transition group-hover:opacity-100" />
        </div>


        {/* Card 2 */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <FaCalendarCheck className="text-2xl" />
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            Easy Appointments
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Find your preferred doctor, choose a convenient time,
            and book your appointment in just a few clicks.
          </p>

          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-50 opacity-0 transition group-hover:opacity-100" />
        </div>


        {/* Card 3 */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 transition duration-300 group-hover:bg-emerald-500 group-hover:text-white">
            <FaShieldHeart className="text-2xl" />
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            Safe & Private
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your personal information matters. We focus on keeping
            your healthcare experience secure and private.
          </p>

          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-50 opacity-0 transition group-hover:opacity-100" />
        </div>


        {/* Card 4 */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-500 transition duration-300 group-hover:bg-violet-500 group-hover:text-white">
            <FaHeadset className="text-2xl" />
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            24/7 Support
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Get reliable support whenever you need help managing
            your appointments and healthcare journey.
          </p>

          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-50 opacity-0 transition group-hover:opacity-100" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
import Image from "next/image";
import {
  FaStar,
  FaQuoteRight,
  FaHeart,
  FaUserDoctor,
} from "react-icons/fa6";

const PatientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahim Uddin",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=12",
      review:
        "Booking an appointment was incredibly easy. The doctor was attentive, professional, and made me feel comfortable throughout the consultation.",
    },
    {
      id: 2,
      name: "Maria Akter",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=47",
      review:
        "I found the perfect specialist within minutes. The whole booking process was smooth and saved me so much time.",
    },
    {
      id: 3,
      name: "Sajid Hasan",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=11",
      review:
        "Great experience overall. I loved how simple the interface was and how quickly I could confirm my appointment.",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=44",
      review:
        "My pediatrician was wonderful with my son. The appointment was easy to manage and I will definitely book again.",
    },
    {
      id: 5,
      name: "Tanvir Ahmed",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=68",
      review:
        "Trusted doctors, transparent information, and zero hassle. Everything I needed was available in one place.",
    },
    {
      id: 6,
      name: "Lamia Chowdhury",
      role: "Patient",
      image:
        "https://i.pravatar.cc/150?img=32",
      review:
        "The platform is very easy to use and reliable. Managing my appointments has never been this convenient.",
    },
  ];

  return (
    <section className="relative my-16 overflow-hidden bg-slate-950 px-6 py-20">

      {/* Background Decorations */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
          <FaHeart />
          Loved by our patients
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          What Our{" "}
          <span className="text-cyan-400">
            Patients Say
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Real experiences from patients who trust us to make
          their healthcare journey easier.
        </p>

      </div>


      {/* Reviews */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.09] hover:shadow-2xl hover:shadow-cyan-500/10"
          >

            {/* Quote Icon */}
            <div className="absolute right-6 top-5 text-4xl text-cyan-400/10 transition group-hover:text-cyan-400/20">
              <FaQuoteRight />
            </div>


            {/* Stars */}
            <div className="flex gap-1 text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>


            {/* Review */}
            <p className="relative mt-6 min-h-[120px] text-sm leading-7 text-slate-300">
              "{review.review}"
            </p>


            {/* Patient */}
            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">

              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-cyan-400/30">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {review.name}
                </h3>

                <p className="text-xs text-slate-500">
                  {review.role}
                </p>
              </div>

              {/* Verified */}
              <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

            </div>

          </div>
        ))}

      </div>


      {/* Bottom Stats */}
      <div className="relative z-10 mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-10 text-center sm:gap-16">

        <div>
          <div className="text-3xl font-bold text-white">
            4.9
            <span className="ml-1 text-amber-400">★</span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Average Rating
          </p>
        </div>


        <div className="hidden h-12 w-px bg-white/10 sm:block" />


        <div>
          <div className="text-3xl font-bold text-white">
            10K+
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Happy Patients
          </p>
        </div>


        <div className="hidden h-12 w-px bg-white/10 sm:block" />


        <div>
          <div className="flex items-center justify-center gap-2 text-3xl font-bold text-white">
            <FaUserDoctor className="text-cyan-400" />
            500+
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Trusted Doctors
          </p>
        </div>

      </div>

    </section>
  );
};

export default PatientReviews;
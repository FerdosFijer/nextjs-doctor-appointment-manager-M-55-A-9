"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-[550px] w-full md:h-[650px]"
      >

        
        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden">

            <Image
              src="https://img.magnific.com/free-photo/labor-union-members-working-together_23-2150995038.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Doctor consultation"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/45 to-black/10" />
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-3xl">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <span>🩺</span>
                    Trusted Healthcare
                  </div>

                  <h1 className="text-4xl font-bold  text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Your Health Deserves
                    <br />
                    <span className="text-cyan-400">
                      The Best Care
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
                    Connect with trusted doctors, discuss your health
                    concerns, and get the professional care you deserve.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/doctors"
                      className="rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-600"
                    >
                      Find a Doctor
                    </Link>

                    <Link
                      href="/doctors"
                      className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      View Doctors
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/20 bg-black/30 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 text-white sm:justify-start sm:gap-10">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    👨‍⚕️
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      500+ Doctors
                    </p>

                    <p className="text-xs text-slate-300">
                      Qualified specialists
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    📅
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Easy Booking
                    </p>

                    <p className="text-xs text-slate-300">
                      Book anytime
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    🛡️
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Trusted Care
                    </p>

                    <p className="text-xs text-slate-300">
                      Your health matters
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden">

            <Image
              src="https://samedaydoctor.org/storage/media/01hwqhewj5nmh2t7jghy2km857/check-up-header.jpg"
              alt="Doctor talking with patient"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/45 to-black/10" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-3xl">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <span>👨‍⚕️</span>
                    Expert Medical Team
                  </div>

                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Meet Doctors Who
                    <br />
                    <span className="text-cyan-400">
                      Care About You
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
                    Find experienced healthcare professionals ready to
                    listen, understand, and guide you toward better health.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/doctors"
                      className="inline-block rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-600"
                    >
                      Explore Doctors
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=2200&q=90"
              alt="Medical stethoscope"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/45 to-black/10" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-3xl">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <span>📅</span>
                    Easy Appointment
                  </div>

                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Book Your Appointment
                    <br />
                    <span className="text-cyan-400">
                      Without The Wait
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
                    Choose your preferred doctor, find a convenient time,
                    and schedule your appointment in just a few clicks.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/appointments"
                      className="inline-block rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-600"
                    >
                      Book Appointment
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden">

            <Image
              src="https://cdn.prod.website-files.com/66bd394eedeb9d6ee29898c6/682f5450a046c241920c1e6f_Three%20doctors%20standing%20side%20by%20side%2C%20crossing%20their%20arms.jpg"
              alt="Healthcare professional"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/45 to-black/10" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="max-w-3xl">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <span>🛡️</span>
                    Complete Healthcare
                  </div>

                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Better Care Starts
                    <br />
                    <span className="text-cyan-400">
                      With One Appointment
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
                    Take control of your health with convenient access to
                    doctors and a simple appointment management experience.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/signup"
                      className="inline-block rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-600"
                    >
                      Get Started
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Banner;
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../assets/apple-watch-nike-banner.jpg";
import Logo from "../../assets/apple-watch-nike-logo.png";
import watch from "../../assets/Apple-3-watch-support-page.jpg";
import WatchSE from "../../assets/apple-watch-se-nike.jpg";
import WatchSeries from "../../assets/apple-watch-series-nike.jpg";
import Watch_SET from "../../assets/watch-set.jpg";

export default function Support() {
  return (
    <>
      <Navbar />

      <div className="mx-auto mt-6 w-full max-w-[980px] px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-0">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-base font-bold sm:text-lg">Apple Watch Nike</h1>

          <button className="shrink-0 rounded-full bg-[#0071E3] px-4 py-2 text-sm text-white transition hover:bg-[#0077ED] sm:px-5 sm:text-base">
            Shop bands
          </button>
        </div>

        <hr className="mt-4 border-gray-300" />

        <div className="mt-4 overflow-hidden bg-black p-3 sm:mt-6 sm:p-5 md:p-8">
          <img
            src={Banner}
            alt="Apple Watch Nike banner"
            className="h-auto w-full object-contain"
          />
        </div>

        <section className="mt-10 px-2 sm:mt-14 sm:px-4 md:mt-20">
          <a href="#" className="inline-block">
            <img
              src={Logo}
              alt="Apple Watch Nike logo"
              className="mb-5 h-auto w-40 object-contain sm:mb-7 sm:w-52 md:w-60"
            />
          </a>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Run with it.
          </h2>

          <p className="mt-3 text-sm font-semibold leading-6 text-gray-500 sm:text-base sm:leading-6 lg:text-6">
            Take your running even further. Add a Nike face or band to your
            Apple Watch and use the Nike Run Club app as your favorite running
            partner.
          </p>
        </section>

        <section className="mt-10 sm:mt-14 md:mt-20">
          <p className="mt-10 text-xl font-semibold leading-relaxed text-gray-500 sm:text-2xl md:mt-16 md:text-3xl">
            <span className="text-black">Nike Run Club on Apple Watch.</span>{" "}
            Nike Run Club is your coach, community, and journal. Just like you,
            the app is always getting better. With updates that bring advanced
            features straight to Apple Watch, it will have you running like
            clockwork.
          </p>

          <img
            src={watch}
            alt="Apple Watch Nike running features"
            className="mt-10 h-auto w-full object-contain sm:mt-16 md:mt-22"
          />

          <div className="mt-10 grid grid-cols-1 gap-8 text-xl font-semibold  text-gray-500 sm:mt-14 sm:gap-10 sm:text-2xl md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <p>
              <span className="text-black">
                Plans that work as hard as you do.
              </span>
              Whether you’re a beginner, signing up for your first 5K, or
              training for a marathon, hitting a goal starts with a solid plan.
              Training Plans on Nike Run Club have been created by experts to
              help you get started and track your progress along the way.
            </p>

            <p>
              <span className="text-black">Your guide to a better run.</span>
              Everyone needs a little voice that says “keep going.” In Guided
              Runs on Nike Run Club, expert coaches will cheer you on, stride
              after stride.
            </p>

            <p>
              <span className="text-black">
                More accessible for more runners.
              </span>
              The Nike Run Club app was made for everyone. With VoiceOver, Apple
              Watch can read what’s onscreen to you. Bigger text options make
              everything easier to see.
            </p>
          </div>
        </section>
        <section className=" my-8 text-[20px] ">
          <div className="mx-auto mb-10 max-w-[630px] sm:mx-0">
            <p className="font-semibold text-gray-500  ">
              <span className="text-gray-800">Set a new pace.</span> Apple Watch
              SE has a dual-core processor for a faster performance. And Apple
              Watch Series 8 has been designed with advanced sensors and
              technology to provide insights and help you better understand your
              health. These powerful options were born to run.
            </p>

            <a
              href="#"
              className="mt-2 inline-block  font-semibold text-[#0071e3] hover:underline sm:text-base"
            >
              Shop Apple Watch
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            <div>
              <div className="flex aspect-[1/1] items-center justify-center bg-[#f5f5f7] p-5 sm:p-8">
                <img
                  src={WatchSE}
                  alt="Apple Watch SE Starlight Aluminium Case"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-6 text-center font-semibold  text-gray-500 ">
                <span className="text-gray-800">Apple Watch SE</span>
                Starlight Aluminum Case
                <br />
                with Olive Grey / Black Nike Sport Band
              </p>
            </div>

            <div>
              <div className="flex aspect-[1/1] items-center justify-center bg-[#f5f5f7] p-5 sm:p-8">
                <img
                  src={WatchSeries}
                  alt="Apple Watch Series 8 Midnight Aluminium Case"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-6 text-center font-semibold text-gray-500 ">
                <span className="text-gray-800">Apple Watch Series 8</span>
                Midnight Aluminum Case
                <br />
                with Game Royal / Midnight Navy Nike Sport Loop
              </p>
            </div>
          </div>
        </section>

        <section className="my-22 text-[20px]">
          <div className="mx-auto mb-10 max-w-[630px] sm:mx-0">
            <p className="font-semibold text-gray-500">
              <span className="text-gray-800">Your favorite bands</span>.
              Nothing says you’re a runner like the Nike Sport Loop. Or add
              color to your workouts with options for the Nike Sport Band. You
              can customize or match your favorite band to your Nike watch face.
            </p>

            <a
              href="#"
              className="mt-2 inline-block font-semibold text-[#0071e3] hover:underline sm:text-base"
            >
              Shop the latest bands
            </a>
          </div>

          <img
            src={Watch_SET}
            alt=""
            className="mx-auto mt-10 block h-auto w-full max-w-[600px] object-contain"
          />
        </section>
      </div>

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Airbods from "../../assets/airbods-2nd-gen.jpg";
import WirelessImg from "../../assets/airpods2-wireless1.jpg";
import PerformanceImg from "../../assets/airpods2-performance.png";
import Airpods2Charging from "../../components/Airpods2Charging/Airpods2Charging";
import Airpods2Setup from "../../components/Airpods2Setup/Airpods2Setup";
import Airpods2Cards from "../../components/Airpods2Cards/Airpods2Cards";
import WhichAirpods from "../../components/WhichAirpods/WhichAirpods";
import AirpodsBenefits from "../../components/AirpodsBenefits/AirpodsBenefits";

export default function Accessories() {
  return (
    <>
      <Navbar />

      <div className="mx-auto mt-6 w-full max-w-[980px] px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-0">
        <div className="flex flex-col justify-between gap-4 text-black md:flex-row md:items-center">
          <div>
            <h1 className="text-[20px] md:text-[30px] lg:text-[35px] font-semibold">
              AirPods (2nd generation)
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[16px] md:grid-cols-4 md:text-[18px]">
            <button className="rounded-full text-gray-500">Overview</button>

            <button className="rounded-full text-black">Tech Specs</button>

            <button className="rounded-full text-black">Compare</button>

            <button className="rounded-full bg-blue-500 px-4 py-1 text-white">
              Buy
            </button>
          </div>
        </div>
        <hr className=" my-5 " />

        <section className="pt-[50px] bg-[#F8F8F8]">
          <div className="mx-auto mt-[20px] flex w-full max-w-[900px] flex-col items-center px-4 text-center">
            <h1 className="text-[22px] font-bold md:text-[28px] lg:text-[36px]">
              AirPods
            </h1>

            <span className="text-[25px] font-bold md:text-[32px] lg:text-[43px]">
              Wireless. Effortless. Magical.
            </span>

            <p className="mt-4 text-[15px] md:text-[18px] lg:text-[20px]">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case, AirPods deliver an
              incredible wireless headphone experience. Simply take them out and
              they’re ready to use with all your devices. Put them in your ears
              and they connect immediately, immersing you in rich, high-quality
              sound. Just like magic.
            </p>
            <a href="" className="text-blue-600 text-[19px] mt-5">
              Watch the film
            </a>
          </div>
          <span>
            <img
              src={Airbods}
              alt=""
              className="w-full h-full object-contain"
            />
          </span>
        </section>

        <section className="relative bg-black text-white">
          <img src={WirelessImg} alt="" className="h-auto w-full" />
          <div className="absolute inset-x-0 top-[50px] px-4 text-center sm:top-[90px] lg:top-[173px]">
            <h2 className="text-[26px] font-bold md:text-[34px] lg:text-[42px]">
              Wireless to the fullest.
            </h2>
            <p className="mx-auto mt-4 max-w-[566px] text-[14px] md:text-[17px] lg:text-[21px] lg:leading-[29px]">
              After a simple one-tap setup, AirPods are automatically on and
              always connected.1 Using them is just as easy. They sense when
              they’re in your ears and pause when you take them out. And the
              AirPods experience is just as amazing whether you’re using them
              with your iPhone, Apple Watch, iPad, Mac, or Apple TV.
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] px-4 pb-[60px] pt-[60px] text-center lg:pb-[173px] lg:pt-[180px]">
          <h2 className="text-[26px] font-bold md:text-[34px] lg:text-[42px]">
            Performance you’ll want to hear.
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[14px] md:text-[17px] lg:text-[21px] lg:leading-[29px]">
            Powered by the Apple H1 headphone chip, AirPods deliver a faster and
            more stable wireless connection to your devices — up to 2x faster
            when switching between active devices,3 and a 1.5x faster connection
            time for phone calls.4 The H1 chip also drives voice-enabled Siri
            access and delivers up to 30 percent lower gaming latency. 5 So
            whether you’re playing games, listening to music, or enjoying
            podcasts, you’ll experience higher-quality sound.
          </p>
          <img
            src={PerformanceImg}
            alt="AirPods"
            className="mx-auto mt-10 w-[300px] sm:w-[520px] lg:mt-[95px] lg:w-[862px]"
          />
        </section>
        <Airpods2Charging />
        <Airpods2Setup />
        <Airpods2Cards />

        <div className="bg-white">
          <WhichAirpods />
        </div>
        <div className="flow-root bg-[#f5f5f7] pb-24">
          <AirpodsBenefits />
        </div>
      </div>

      <Footer />
    </>
  );
}

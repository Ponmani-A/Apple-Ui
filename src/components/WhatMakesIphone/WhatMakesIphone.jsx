import ios from "../../assets/fitnes.jpg";
import switching from "../../assets/iphone14.jpg";

function WhatMakesIphone() {
  return (
    <section className="mx-auto max-w-[1200px] px-2.5">
      <h2 className="py-16 text-center text-[28px] font-semibold md:text-[40px]">
        What makes an iPhone an iPhone?
      </h2>

      <div className="flex flex-col items-center overflow-hidden bg-white pt-10 text-center">
        <h3 className="text-[28px] font-semibold md:text-[32px]">iOS 16</h3>
        <p className="mt-1 text-xs">Personal is powerful.</p>
        <a href="#" className="text-xs text-[#06c] hover:underline">
          Learn more
        </a>
        <img
          src={ios}
          alt="iOS 16"
          className="mt-4 h-[260px] w-full max-w-[620px] object-contain md:h-[320px]"
        />
      </div>

      <div className="mx-auto mt-2.5 flex max-w-[460px] flex-col items-center overflow-hidden bg-white pt-10 text-center">
        <h3 className="px-6 text-[28px] font-semibold leading-tight md:text-[32px]">
          Switching to iPhone is super simple.
        </h3>
        <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
          Learn more
        </a>
        <img
          src={switching}
          alt="Switching to iPhone"
          className="mt-4 h-[300px] w-full object-cover"
        />
      </div>
    </section>
  );
}

export default WhatMakesIphone;

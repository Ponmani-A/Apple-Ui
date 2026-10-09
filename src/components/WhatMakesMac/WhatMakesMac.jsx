import macDoesThat from "../../assets/latest-macbook.jpg";
import continuity from "../../assets/ipad.jpg";
import ventura from "../../assets/store-mac.png";

function WhatMakesMac() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-20">
      <h2 className="text-center text-[28px] font-semibold md:text-[40px]">
        What makes a Mac a Mac?
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-[#f2f2f2] px-6 pt-8 text-center md:h-[460px]">
          <h3 className="text-[32px] font-semibold leading-tight md:text-[40px]">
            Mac does <span className="bg-[#00ff00]">that.</span>
          </h3>
          <p className="mt-2 text-xs">Discover what Mac can do for you.</p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img src={macDoesThat} alt="Mac" className="mt-auto w-[85%]" />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-[#f2f2f2] pt-8 text-center md:h-[460px]">
          <p className="text-sm font-semibold">Continuity</p>
          <h3 className="px-6 text-[32px] font-semibold leading-tight md:text-[40px]">
            All your devices. One seamless experience.
          </h3>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img src={continuity} alt="Continuity" className="mt-auto w-full" />
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center overflow-hidden bg-[#f5f5f7] md:h-[440px] md:flex-row">
        <div className="px-6 py-8 text-center md:w-[40%]">
          <p className="text-sm font-semibold">macOS Ventura</p>
          <h3 className="mt-2 text-[32px] font-semibold leading-tight md:text-[40px]">
            Works smarter. Plays harder. Goes further.
          </h3>
          <a
            href="#"
            className="mt-2 block text-xs text-[#06c] hover:underline"
          >
            Learn more
          </a>
        </div>
        <img src={ventura} alt="macOS Ventura" className="w-full md:w-[60%]" />
      </div>
    </section>
  );
}

export default WhatMakesMac;

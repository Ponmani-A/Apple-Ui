import appleLogo from "../../assets/Apple.png";
import series8 from "../../assets/watchultra-series8.jpg";

function UltraSeries8() {
  return (
    <section className="mt-[19px] overflow-hidden bg-black text-white lg:h-[639px]">
      <div className="mx-auto grid max-w-[1270px] lg:h-full lg:grid-cols-[695px_1fr]">
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center lg:py-0">
          <p className="flex items-center gap-1 text-[30px] font-bold leading-none lg:text-[36px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[26px] w-auto lg:h-[32px]"
            />
            WATCH
          </p>
          <p className="mt-2 text-[12px] font-semibold tracking-[0.3em] text-[#ff453a] lg:text-[14px]">
            SERIES 8
          </p>
          <h2 className="mt-9 text-[26px] font-semibold leading-[1.15] lg:text-[32px]">
            A healthy leap ahead.
          </h2>
          <a
            href="#"
            className="mt-3.5 text-[17px] text-[#2997ff] hover:underline"
          >
            Shop
          </a>
        </div>

        <div className="flex justify-center overflow-hidden lg:justify-start lg:pl-[4px]">
          <img
            src={series8}
            alt="Apple Watch Series 8"
            className="h-[360px] w-auto object-cover object-top lg:h-[639px] lg:w-[419px]"
          />
        </div>
      </div>
    </section>
  );
}

export default UltraSeries8;

import heroPro from "../../assets/airpods-hero-pro.jpg";
import hero3rd from "../../assets/airpods-hero-3rd.jpg";
import hero2nd from "../../assets/airpods-hero-2nd.png";
import heroMax from "../../assets/airpods-hero-max.png";

function AirpodsHero() {
  return (
    <div className="space-y-[30px] px-[30px] pt-[30px] max-md:space-y-3 max-md:px-3 max-md:pt-3">
      <section className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[28px] bg-black text-center text-white sm:h-[560px] lg:h-[818px]">
        <img
          src={heroPro}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10">
          <h2 className="text-[52px] font-semibold leading-none sm:text-[72px] lg:text-[104px]">
            AirPods Pro
          </h2>
          <p className="mt-3 text-[18px] lg:text-[24px]">$249</p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-8 lg:bottom-[70px]">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-6 py-2 text-[17px] text-white"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-[17px] text-white hover:underline lg:text-[19px]"
          >
            Learn more
          </a>
        </div>
      </section>

      <section className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[28px] bg-white text-center text-[#1d1d1f] sm:h-[520px] lg:h-[680px]">
        <img
          src={hero3rd}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10">
          <h2 className="text-[52px] font-semibold leading-none sm:text-[72px] lg:text-[104px]">
            AirPods
          </h2>
          <p className="mt-3 text-[18px] lg:text-[24px]">3rd generation</p>
          <p className="text-[18px] lg:text-[24px]">From $169</p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-8 lg:bottom-[58px]">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-6 py-2 text-[17px] text-white"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-[17px] text-[#06c] hover:underline lg:text-[19px]"
          >
            Learn more
          </a>
        </div>
      </section>

      <section className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[28px] bg-white text-center text-[#1d1d1f] sm:h-[520px] lg:h-[680px]">
        <img
          src={hero3rd}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10">
          <h2 className="text-[52px] font-semibold leading-none sm:text-[72px] lg:text-[104px]">
            AirPods
          </h2>
          <p className="mt-3 text-[18px] lg:text-[24px]">2nd generation</p>
          <p className="text-[18px] lg:text-[24px]">$129</p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-8 lg:bottom-[58px]">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-6 py-2 text-[17px] text-white"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-[17px] text-[#06c] hover:underline lg:text-[19px]"
          >
            Learn more
          </a>
        </div>
      </section>

      <section className="relative flex h-[460px] items-start justify-center overflow-hidden rounded-[28px] bg-white text-center text-[#1d1d1f] sm:h-[580px] lg:h-[746px]">
        <div className="absolute left-0 right-0 top-[60px] z-0 sm:top-[90px] lg:top-[245px]">
          <h2 className="text-[64px] font-semibold leading-none sm:text-[120px] lg:text-[200px]">
            AirPods Max
          </h2>
          <p className="mt-3 text-[18px] lg:mt-6 lg:text-[24px]">$549</p>
        </div>
        <img
          src={heroMax}
          alt="AirPods Max"
          className="relative z-10 mt-6 w-[300px] sm:w-[400px] lg:w-[600px]"
        />
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-8 lg:bottom-[60px]">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-6 py-2 text-[17px] text-white"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-[17px] text-[#06c] hover:underline lg:text-[19px]"
          >
            Learn more
          </a>
        </div>
      </section>
    </div>
  );
}

export default AirpodsHero;

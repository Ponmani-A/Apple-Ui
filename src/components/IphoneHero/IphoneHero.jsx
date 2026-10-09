import iphone14 from "../../assets/iphone14.jpg";
import banner from "../../assets/banner.jpg";
import tour from "../../assets/airpods.jpg";

function IphoneHero() {
  return (
    <div>
      <section className="flex flex-col items-center overflow-hidden bg-white px-4 pt-12 text-center">
        <p className="text-xs text-[#6e6e73]">New</p>
        <h2 className="text-xl font-semibold md:text-2xl">iPhone 14</h2>
        <h3 className="mt-3 text-[32px] font-semibold leading-[1.1] md:text-[48px]">
          Two great sizes.
          <br />
          Now with a splash of yellow.
        </h3>
        <p className="mt-4 text-xs md:text-sm">
          From $799 or $33.29/mo. for 24 mo. before trade-in2
        </p>
        <div className="mt-3 flex items-center gap-5 text-sm">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-4 py-1.5 text-white"
          >
            Buy
          </a>
          <a href="#" className="text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
        <img
          src={iphone14}
          alt="iPhone 14"
          className="mt-8 w-full max-w-[820px]"
        />
      </section>

      <section className="flex flex-col items-center overflow-hidden bg-black px-4 pt-12 text-center text-[#f5f5f7]">
        <h2 className="text-xl font-semibold md:text-2xl">iPhone 14 Pro</h2>
        <h3 className="mt-3 text-[40px] font-semibold leading-[1.1] md:text-[56px]">
          Pro. Beyond.
        </h3>
        <p className="mt-4 text-xs md:text-sm">
          From $999 or $41.62/mo. for 24 mo. before trade-in2
        </p>
        <div className="mt-3 flex items-center gap-5 text-sm">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-4 py-1.5 text-white"
          >
            Buy
          </a>
          <a href="#" className="text-[#2997ff] hover:underline">
            Learn more
          </a>
        </div>
        <img
          src={banner}
          alt="iPhone 14 Pro"
          className="mt-10 w-[120%] max-w-none sm:w-[100%] md:w-[85%] md:max-w-[1000px]"
        />
      </section>

      <section className="mt-2.5 flex flex-col items-center overflow-hidden bg-[#fbfbfd] md:h-[560px] md:flex-row">
        <div className="px-6 py-12 text-center md:w-1/2">
          <h2 className="text-xl font-semibold md:text-2xl">iPhone SE</h2>
          <h3 className="mt-3 text-[32px] font-semibold leading-[1.1] text-[#2d3d9c] md:text-[40px]">
            Love the power.
            <br />
            Love the price.
          </h3>
          <p className="mt-4 text-xs md:text-sm">
            From $429 or $17.87/mo. for 24 mo. before trade-in2
          </p>
          <div className="mt-3 flex items-center justify-center gap-5 text-sm">
            <a
              href="#"
              className="rounded-full bg-[#0071e3] px-4 py-1.5 text-white"
            >
              Buy
            </a>
            <a href="#" className="text-[#06c] hover:underline">
              Learn more
            </a>
          </div>
        </div>
        <img
          src={iphone14}
          alt="iPhone SE"
          className="h-[320px] w-full object-cover object-center md:h-full md:w-1/2"
        />
      </section>

      <section className="mx-auto mt-2.5 max-w-[1200px] px-2.5">
        <div className="relative h-[360px] overflow-hidden rounded-[24px] md:h-[560px]">
          <img
            src={tour}
            alt="Guided tour"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white md:p-12">
            <p className="text-sm font-semibold">A Guided Tour of</p>
            <h3 className="mt-1 text-[28px] font-semibold leading-tight md:text-[40px]">
              iPhone 14 &amp;
              <br />
              iPhone 14 Pro
            </h3>
            <a
              href="#"
              className="mt-4 w-fit rounded-full bg-white px-4 py-1.5 text-sm text-black"
            >
              Watch the film
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IphoneHero;

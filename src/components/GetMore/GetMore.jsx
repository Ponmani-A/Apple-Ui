import appleLogo from "../../assets/Apple.png";
import oneIcons from "../../assets/exp-services.jpg";
import tvShows from "../../assets/tedlesso.jpg";
import payImage from "../../assets/macbook.jpg";
import arcade from "../../assets/store-homepod.png";
import news from "../../assets/fitnes.jpg";
import giftCards from "../../assets/phonecard.jpg";

function GetMore() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-20">
      <h2 className="text-center text-[28px] font-semibold md:text-[40px]">
        Get more out of Mac
      </h2>

      <div className="mt-10 flex flex-col items-center bg-[#f5f5f7] px-6 py-10 md:h-[400px] md:flex-row md:justify-around">
        <img
          src={oneIcons}
          alt="Apple services"
          className="w-[280px] md:w-[320px]"
        />
        <div className="mt-6 text-center md:mt-0">
          <p className="flex items-center justify-center gap-1 text-[48px] font-semibold md:text-[64px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[40px] w-auto invert md:h-[52px]"
            />
            One
          </p>
          <p className="text-sm font-semibold">
            Bundle up to six Apple services.
            <br />
            And enjoy more for less.
          </p>
          <div className="mt-2 flex justify-center gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free9
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-black pt-8 text-center text-white md:h-[500px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto" />
            tv+
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple TV+ free
            <br />
            when you buy a Mac.
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#2997ff]">
            <a href="#" className="hover:underline">
              Try it free10
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img src={tvShows} alt="Apple TV+" className="mt-auto w-full" />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-[#f5f5f7] pt-8 text-center md:h-[500px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Pay
          </p>
          <p className="mt-2 text-xs">
            The safer way to make secure,
            <br />
            contactless purchases in stores and online.
          </p>
          <a href="#" className="mt-2 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img src={payImage} alt="Apple Pay" className="mt-auto w-[85%]" />
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-[#f5f5f7] pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Arcade
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple Arcade free
            <br />
            when you buy a Mac.
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free11
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img src={arcade} alt="Apple Arcade" className="mt-auto w-[180px]" />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-[#f5f5f7] pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            News+
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple News+ free
            <br />
            when you buy a Mac.12
          </p>
          <a href="#" className="mt-2 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img src={news} alt="Apple News+" className="mt-auto w-[85%]" />
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center overflow-hidden bg-[#f5f5f7] px-6 py-10 md:h-[340px] md:flex-row md:justify-around">
        <div className="text-center">
          <p className="flex items-center justify-center gap-1 text-[32px] font-semibold">
            <img src={appleLogo} alt="" className="h-[26px] w-auto invert" />
            Gift Card
          </p>
          <p className="mt-1 text-xs">For everything and everyone.</p>
          <div className="mt-1 flex justify-center gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Learn more
            </a>
            <a href="#" className="hover:underline">
              Buy
            </a>
          </div>
        </div>
        <img
          src={giftCards}
          alt="Gift cards"
          className="mt-6 w-full max-w-[520px] md:mt-0"
        />
      </div>
    </section>
  );
}

export default GetMore;

import appleLogo from "../../assets/Apple.png";
import oneIcons from "../../assets/ipad.jpg";
import tvShows from "../../assets/tedlesso.jpg";
import music from "../../assets/airpods.jpg";
import news from "../../assets/fitnes.jpg";
import arcade from "../../assets/homepad.jpg";
import fitness from "../../assets/fitnes.jpg";
import giftCards from "../../assets/phonecard.jpg";
import research from "../../assets/iphone14.jpg";

function GetMoreIphone() {
  return (
    <section className="mx-auto max-w-[1200px] px-2.5">
      <h2 className="py-16 text-center text-[28px] font-semibold md:text-[40px]">
        Get more out of your iPhone.
      </h2>

      <div className="flex flex-col items-center bg-white px-6 py-10 md:h-[400px] md:flex-row md:justify-around">
        <img
          src={oneIcons}
          alt="Apple services"
          className="w-[260px] md:w-[320px]"
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

      <div className="mt-2.5 grid gap-2.5 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-black pt-8 text-center text-white md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto" />
            tv+
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple TV+ free
            <br />
            when you buy an iPhone.10
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#2997ff]">
            <a href="#" className="hover:underline">
              Try it free
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={tvShows}
            alt="Apple TV+"
            className="mt-auto h-[220px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-white pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Music
          </p>
          <p className="mt-2 text-xs">
            Over 100 million songs.
            <br />
            Start listening for free today.
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free11
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={music}
            alt="Apple Music"
            className="mt-auto h-[220px] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-2.5 grid gap-2.5 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-white pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            News+
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple News+ free
            <br />
            when you buy an iPhone.12
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img
            src={news}
            alt="Apple News+"
            className="mt-auto h-[260px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-white pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Arcade
          </p>
          <p className="mt-2 text-xs">
            Get 3 months of Apple Arcade
            <br />
            free when you buy an iPhone.
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free13
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={arcade}
            alt="Apple Arcade"
            className="mt-auto h-[200px] w-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-2.5 grid gap-2.5 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-[#fbfbfd] pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Fitness+
          </p>
          <p className="mt-2 text-xs">
            Fitness for everyone.
            <br />
            Now all you need is iPhone.
          </p>
          <div className="mt-2 flex gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Learn more
            </a>
            <a href="#" className="hover:underline">
              Try it free14
            </a>
          </div>
          <img
            src={fitness}
            alt="Fitness+"
            className="mt-auto h-[220px] w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-[#fbfbfd] pt-8 text-center md:h-[420px]">
          <p className="flex items-center gap-1 text-[28px] font-semibold">
            <img src={appleLogo} alt="" className="h-[22px] w-auto invert" />
            Gift Card
          </p>
          <p className="mt-2 text-xs">For everything and everyone.</p>
          <div className="mt-1 flex gap-6 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Learn more
            </a>
            <a href="#" className="hover:underline">
              Buy
            </a>
          </div>
          <img
            src={giftCards}
            alt="Gift cards"
            className="mt-auto h-[240px] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-2.5 flex flex-col items-center overflow-hidden bg-[#fbfbfd] md:h-[440px] md:flex-row">
        <div className="px-6 py-10 text-center md:w-[40%]">
          <h3 className="text-[28px] font-semibold leading-tight md:text-[32px]">
            Introducing the Apple Research app.
          </h3>
          <p className="mt-3 text-xs">The future of health research is you.</p>
          <a
            href="#"
            className="mt-1 block text-xs text-[#06c] hover:underline"
          >
            Learn more
          </a>
        </div>
        <img
          src={research}
          alt="Apple Research app"
          className="h-[280px] w-full object-cover md:h-full md:w-[60%]"
        />
      </div>
    </section>
  );
}

export default GetMoreIphone;

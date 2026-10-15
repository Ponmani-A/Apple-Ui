import appleLogo from "../../assets/Apple.png";
import engrave from "../../assets/airpods2-engrave.png";
import music from "../../assets/airpods2-music.png";

const h2 =
  "text-[26px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px] lg:leading-[52px]";
const p = "text-[15px] leading-[1.4] lg:text-[20px] lg:leading-7";

function Airpods2Cards() {
  return (
    <section className="space-y-5 bg-white px-5 pb-[60px] lg:pb-[154px]">
      <div className="relative flex flex-col items-center overflow-hidden rounded-[6px] bg-[#fafafa] px-6 py-10 text-center lg:block lg:h-[451px] lg:p-0">
        <div className="lg:absolute lg:left-0 lg:top-1/2 lg:w-[724px] lg:-translate-y-1/2">
          <h2 className={h2}>
            Say it in a way
            <br />
            only you can.
          </h2>
          <p className={`mx-auto mt-4 max-w-[260px] ${p}`}>
            Discover new engraving options for AirPods. Mix emoji, text, and
            numbers.
          </p>
          <a
            href="#"
            className="mt-1 block text-[16px] text-[#06c] hover:underline lg:text-[20px]"
          >
            Buy AirPods
          </a>
        </div>

        <img
          src={engrave}
          alt="Engraved AirPods cases"
          className="mt-8 w-full max-w-[20px] lg:absolute lg:left-[661px] lg:top-1/2 lg:mt-0 lg:w-[400px] lg:max-w-none lg:-translate-y-1/2"
        />
      </div>

      <div className="relative flex flex-col items-center overflow-hidden rounded-[6px] bg-[#fafafa] px-6 py-10 text-center lg:block lg:h-[551px] lg:p-0">
        <div className="lg:absolute lg:left-0 lg:top-1/2 lg:w-[724px] lg:-translate-y-1/2">
          <p className="flex items-center justify-center gap-1 text-[18px] font-semibold lg:text-[22px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[16px] w-auto invert lg:h-[20px]"
            />
            Music
          </p>
          <h2 className={`mt-4 ${h2}`}>
            Get 6 months of
            <br />
            Apple Music free
            <br />
            with your AirPods.
          </h2>
          <a
            href="#"
            className="mt-2 block text-[16px] text-[#06c] hover:underline lg:text-[20px]"
          >
            Learn more
          </a>
        </div>

        <img
          src={music}
          alt="Apple Music"
          className="mt-8 w-full max-w-[320px] lg:absolute lg:left-[671px] lg:top-[38px] lg:mt-0 lg:w-[300px] lg:max-w-none"
        />
      </div>
    </section>
  );
}

export default Airpods2Cards;

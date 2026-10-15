import setup from "../../assets/airpods2-setup.jpg";
import share from "../../assets/airpods2-share.jpg";

const h2 = "text-[26px] font-bold md:text-[34px] lg:text-[42px]";
const p = "text-[14px] md:text-[17px] lg:text-[21px] lg:leading-[29px]";

function Airpods2Setup() {
  return (
    <section className="bg-white px-4 pb-[60px] text-center lg:pb-[74px]">
      <h2 className={`pt-[60px] lg:pt-[181px] ${h2}`}>
        Instant setup. Easy listening.
      </h2>
      <p className={`mx-auto mt-4 max-w-[663px] ${p}`}>
        AirPods connect immediately, and sound seamlessly switches between your
        iPhone, Apple Watch, Mac, iPad, and Apple TV. Easy setup, magical
        results.
      </p>

      <img
        src={setup}
        alt="AirPods setup"
        className="mx-auto mt-8 w-[300px] sm:w-[420px] lg:mt-[88px] lg:w-[566px]"
      />

      <h2 className={`pt-[60px] lg:pt-[171px] ${h2}`}>
        Two can play this song.
      </h2>
      <p className={`mx-auto mt-4 max-w-[473px] ${p}`}>
        With Audio Sharing,12 you can easily share a song, podcast, or other
        audio stream between two sets of AirPods — each with independent volume
        control. If your AirPods are in their case, just bring them close to the
        iPhone or iPad you want to share with and connect in a tap. And if your
        AirPods are in your ears, bring your iPhone close to the device instead.
      </p>

      <img
        src={share}
        alt="Audio Sharing"
        className="mx-auto mt-8 w-full max-w-[910px] lg:mt-[98px]"
      />
    </section>
  );
}

export default Airpods2Setup;

import hands from "../../assets/airpods2-hands.jpg";

const h2 = "text-[26px] font-bold md:text-[34px] lg:text-[42px]";
const p = "text-[14px] md:text-[17px] lg:text-[21px] lg:leading-[29px]";

function Airpods2Charging() {
  return (
    <section className="bg-white text-center">
      <div className="px-4 pt-[60px] lg:pt-[178px]">
        <h2 className={h2}>Lay it down, charge it up.</h2>
        <p className={`mx-auto mt-4 max-w-[640px] ${p}`}>
          With the available Wireless Charging Case, charging is as simple as
          placing the AirPods case on a Qi-certified charging mat. That’s it.
          The LED indicator on the front of the case lets you know that your
          AirPods are charging. And when you’re away from a charging mat, you
          can use the Lightning port to charge.
        </p>
        <a
          href="#"
          className="mt-3 block text-[16px] text-[#06c] hover:underline lg:text-[21px]"
        >
          Buy Wireless Charging Case
        </a>
      </div>

      <div className="px-4 pt-[60px] lg:pt-[209px]">
        <h2 className={h2}>The power of 24-hour battery life.</h2>
        <p className={`mx-auto mt-4 max-w-[775px] ${p}`}>
          AirPods deliver an industry-leading6 5 hours of listening time7 — and
          now up to 3 hours of talk time 8 — all on one charge. And they’re made
          to keep up with you, thanks to a charging case that holds multiple
          charges for more than 24 hours of listening time.9 Need a quick
          charge? Just put AirPods back in the case for 15 minutes to get up to
          3 hours of listening time 10 or up to 2 hours of talk time.11 To check
          the battery, hold the AirPods next to your iPhone or ask Siri “How’s
          the battery on my AirPods?” And when your AirPods need charging, a
          notification conveniently appears on your iPhone.
        </p>

        <div className="mx-auto mt-10 grid max-w-[600px] grid-cols-3 gap-4 lg:mt-[74px] lg:gap-[0px]">
          <div className="flex flex-col items-center">
            <p className="text-[12px] lg:text-[14px]">More than</p>
            <p className="mt-1 text-[26px] font-light leading-none lg:text-[40px]">
              24
              <span className="text-[18px] font-semibold lg:text-[28px]">
                hrs.
              </span>
            </p>
            <p className="mt-2 max-w-[120px] text-[11px]  text-[#6e6e73] lg:text-[14px]">
              of battery life with charging case
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[12px] lg:text-[14px]">Up to</p>
            <p className="mt-1 text-[26px] font-light leading-none lg:text-[40px]">
              5
              <span className="text-[18px] font-semibold lg:text-[28px]">
                hrs.
              </span>
            </p>
            <p className="mt-2 max-w-[120px] text-[11px]  text-[#6e6e73] lg:text-[14px]">
              of listening time on one charge
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[12px] lg:text-[14px]">Only</p>
            <p className="mt-1 text-[26px] font-light leading-none lg:text-[40px]">
              15
              <span className="text-[18px] font-semibold lg:text-[28px]">
                mins.
              </span>
            </p>
            <p className="mt-2 max-w-[140px] text-[11px]  text-[#6e6e73] lg:text-[14px]">
              of charging provides up to 3 hours of listening time
            </p>
          </div>
        </div>
      </div>

      <img src={hands} alt="" className="mt-10 h-auto w-full lg:mt-[57px]" />
    </section>
  );
}

export default Airpods2Charging;

import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import delivery from "../../assets/diff-delivery.png";
import tradeIn from "../../assets/diff-tradein.png";
import payOver from "../../assets/diff-pay.png";
import emoji from "../../assets/diff-emoji.png";

function StoreDifference() {
  return (
    <section>
      <SectionHeading
        dark="The Apple Store difference."
        light="Even more reasons to shop with us."
      />
      <ScrollRow>
        <div className="flex h-[238px] w-[290px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:w-[314px]">
          <img src={delivery} alt="" className="h-[30px] w-auto self-start" />
          <p className="mt-auto text-[17px] font-semibold leading-[1.23]">
            Enjoy <span className="text-[#5bb135]">two-hour delivery</span> from
            an Apple Store,{" "}
            <span className="text-[#5bb135]">free delivery</span>, or{" "}
            <span className="text-[#5bb135]">easy pickup.</span>
            <sup className="text-[10px]">2</sup>
          </p>
        </div>

        <div className="flex h-[238px] w-[290px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:w-[314px]">
          <img src={tradeIn} alt="" className="h-[30px] w-auto self-start" />
          <p className="mt-auto text-[17px] font-semibold leading-[1.23]">
            <span className="text-[#b34fd1]">
              Trade in your current device.
            </span>{" "}
            Get credit toward a new one.
            <sup className="text-[10px]">3</sup>
          </p>
        </div>

        <div className="flex h-[238px] w-[290px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:w-[314px]">
          <img src={payOver} alt="" className="h-[30px] w-auto self-start" />
          <p className="mt-auto text-[17px] font-semibold leading-[1.23]">
            <span className="text-[#5bb135]">
              Pay in full or pay over time.
            </span>{" "}
            Your choice.
          </p>
        </div>

        <div className="flex h-[238px] w-[290px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:w-[314px]">
          <img src={emoji} alt="" className="h-[30px] w-auto self-start" />
          <p className="mt-auto text-[17px] font-semibold leading-[1.23]">
            Make them yours.{" "}
            <span className="text-[#b34fd1]">
              Engrave a mix of emoji, names, and numbers for free.
            </span>
          </p>
        </div>
      </ScrollRow>
    </section>
  );
}

export default StoreDifference;

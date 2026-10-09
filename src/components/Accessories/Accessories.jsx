import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import newColors from "../../assets/acc-new.jpg";
import caseYellow from "../../assets/acc-case-yellow.jpg";
import caseInk from "../../assets/acc-case-ink.jpg";
import band from "../../assets/acc-band.jpg";

function Accessories() {
  return (
    <section>
      <SectionHeading
        dark="Accessories."
        light="Essentials that pair perfectly with your favorite devices."
      />
      <ScrollRow>
        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[400px] md:p-7">
          <h3 className="text-2xl font-semibold">In with the new.</h3>
          <p className="mt-2 text-sm text-[#6e6e73]">
            Discover fresh new colors for your favorite accessories.
          </p>
          <img
            src={newColors}
            alt="New accessories"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>

        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={caseYellow}
              alt="iPhone 14 Silicone Case"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#f5e663]" />
            <span className="h-2 w-2 rounded-full bg-[#9fd4a8]" />
            <span className="h-2 w-2 rounded-full bg-[#8fb4d8]" />
            <span className="h-2 w-2 rounded-full bg-[#b08fd8]" />
            <span className="h-2 w-2 rounded-full bg-[#e07a7a]" />
          </div>
          <p className="mt-auto text-xs text-[#bf4800]">New</p>
          <h3 className="mt-1 text-[17px] font-semibold leading-[1.2]">
            iPhone 14 Silicone Case with MagSafe - Canary Yellow
          </h3>
          <p className="mt-3 text-sm">$49.00</p>
        </div>

        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={caseInk}
              alt="iPhone 14 Pro Leather Case"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#7a4a3a]" />
            <span className="h-2 w-2 rounded-full bg-[#5a6a4a]" />
            <span className="h-2 w-2 rounded-full bg-[#b07a5a]" />
            <span className="h-2 w-2 rounded-full bg-[#2a2a3a]" />
          </div>
          <p className="mt-auto text-xs text-[#bf4800]">New</p>
          <h3 className="mt-1 text-[17px] font-semibold leading-[1.2]">
            iPhone 14 Pro Leather Case with MagSafe - Ink
          </h3>
          <p className="mt-3 text-sm">$59.00</p>
        </div>

        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={band}
              alt="45mm Bright Orange Sport Band"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="mt-auto text-xs text-[#bf4800]">New</p>
          <h3 className="mt-1 text-[17px] font-semibold leading-[1.2]">
            45mm Bright Orange Sport Band - M/L
          </h3>
          <p className="mt-3 text-sm">$49.00</p>
        </div>
      </ScrollRow>
    </section>
  );
}

export default Accessories;

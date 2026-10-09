import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import education from "../../assets/special-education.jpg";
import business from "../../assets/special-business.jpg";
import government from "../../assets/special-government.jpg";

function SpecialStores() {
  return (
    <section>
      <SectionHeading
        dark="Special stores."
        light="Exclusive savings for businesses, school, and more."
      />
      <ScrollRow>
        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#6e6e73]">
            Education
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Save on Mac or iPad with education pricing.
            <sup className="text-sm">1</sup>
          </h3>
          <img
            src={education}
            alt="Education"
            className="mt-auto h-[270px] w-auto shrink-0 self-center object-contain"
          />
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-black p-6 text-white md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#a1a1a6]">
            Business
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            From enterprise to small business, we’ll work with you.
            <sup className="text-sm">1</sup>
          </h3>
          <img
            src={business}
            alt="Business"
            className="mt-auto h-[270px] w-auto shrink-0 self-center object-contain"
          />
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-black p-6 text-white md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#a1a1a6]">
            Government
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Special pricing is available for state, local, and federal agencies.
            <sup className="text-sm">1</sup>
          </h3>
          <img
            src={government}
            alt="Government"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>
      </ScrollRow>
    </section>
  );
}

export default SpecialStores;

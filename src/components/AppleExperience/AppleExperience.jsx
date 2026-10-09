import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import rihanna from "../../assets/exp-rihanna.jpg";
import services from "../../assets/exp-services.jpg";
import covered from "../../assets/exp-covered.jpg";

function AppleExperience() {
  return (
    <section>
      <SectionHeading
        dark="The Apple experience."
        light="Do even more with Apple products and services."
      />
      <ScrollRow>
        <div className="relative h-[460px] w-[300px] shrink-0 overflow-hidden rounded-[18px] md:h-[500px] md:w-[480px]">
          <img
            src={rihanna}
            alt="Rihanna"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 p-6 text-white md:p-7">
            <p className="text-[11px] font-semibold uppercase">Apple Music</p>
            <h3 className="mt-2 max-w-[260px] text-2xl font-semibold">
              Rihanna’s iconic hits now in Spatial Audio.^
            </h3>
          </div>
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[480px] md:p-7">
          <h3 className="text-2xl font-semibold">
            Six Apple services. One easy subscription.
          </h3>
          <img
            src={services}
            alt="Apple services"
            className="mt-auto h-[260px] w-auto shrink-0 self-center object-contain"
          />
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[480px] md:p-7">
          <h3 className="text-2xl font-semibold">We’ve got you covered.</h3>
          <p className="mt-2 text-sm text-[#6e6e73]">
            AppleCare+ now comes with unlimited repairs for accidental damage.
          </p>
          <img
            src={covered}
            alt="AppleCare+"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>
      </ScrollRow>
    </section>
  );
}

export default AppleExperience;

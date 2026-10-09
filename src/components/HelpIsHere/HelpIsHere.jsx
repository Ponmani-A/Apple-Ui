import SectionHeading from "../SectionHeading/SectionHeading";
import specialist from "../../assets/help-specialist.jpg";
import session from "../../assets/help-session.jpg";
import genius from "../../assets/help-genius.jpg";

function HelpIsHere() {
  return (
    <section>
      <SectionHeading
        dark="Help is here."
        light="Whenever and however you need it."
      />
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-3 px-5 md:grid-cols-2">
        {/* Specialist */}
        <div className="flex h-[460px] flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#6e6e73]">
            Apple Specialist
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Shop one on one with a Specialist. Online or in a store.
          </h3>
          <img
            src={specialist}
            alt="Specialist"
            className="mt-auto h-[280px] w-auto shrink-0 self-center object-contain"
          />
        </div>

        {/* Right side: 2 cards */}
        <div className="flex flex-col gap-3">
          <div className="flex h-[240px] flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[244px]">
            <h3 className="text-xl font-semibold">
              Get to know your new device with a free Personal Session.
            </h3>
            <img
              src={session}
              alt="Personal Session"
              className="mt-auto h-auto w-full shrink-0"
            />
          </div>

          <div className="flex h-[240px] items-center justify-between overflow-hidden rounded-[18px] bg-gradient-to-br from-[#eef3fb] to-[#f8ebf6] p-6 md:h-[244px]">
            <h3 className="max-w-[200px] text-xl font-semibold">
              Get expert service and support at the Genius Bar.
            </h3>
            <img src={genius} alt="Genius Bar" className="h-[150px] w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpIsHere;

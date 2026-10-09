import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import iphone from "../../assets/latest-iphone.jpg";
import macbook from "../../assets/latest-macbook.jpg";
import watch from "../../assets/latest-watch.jpg";

function TheLatest() {
  return (
    <section>
      <SectionHeading
        dark="The latest."
        light="Take a look at what’s new, right now."
      />
      <ScrollRow>
        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#6e6e73]">
            iPhone 14
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Wonderfull.</h3>
          <p className="mt-2 text-sm">
            From $799.00 or $33.29/mo. for 24 mo. before trade-in
          </p>
          <img
            src={iphone}
            alt="iPhone 14"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-black p-6 text-white md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#a1a1a6]">
            MacBook Pro 14” and 16”
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Mover. Maker. Boundary breaker.
          </h3>
          <p className="mt-2 text-sm">From $1999 or $166.58/mo. for 12 mo.</p>
          <img
            src={macbook}
            alt="MacBook Pro"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>

        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-black p-6 text-white md:h-[500px] md:w-[420px] md:p-7">
          <p className="text-[11px] font-semibold uppercase text-[#a1a1a6]">
            Apple Watch Series 8
          </p>
          <h3 className="mt-2 text-2xl font-semibold">A healthy leap ahead.</h3>
          <p className="mt-2 text-sm">From $399 or $16.62/mo. for 24 mo.</p>
          <img
            src={watch}
            alt="Apple Watch"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>
      </ScrollRow>
    </section>
  );
}

export default TheLatest;

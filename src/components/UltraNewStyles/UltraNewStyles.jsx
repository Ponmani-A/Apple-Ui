import orange from "../../assets/watchultra-w-trail-blue.jpg";
import mint from "../../assets/watchultra-w-trail-black.jpg";
import white from "../../assets/watchultra-w-trail-yellow.jpg";
import green from "../../assets/watchultra-w-trail-blue.jpg";

function UltraNewStyles() {
  return (
    <section className="overflow-hidden bg-[#f5f5f7] lg:h-[479px]">
      <div className="mx-auto flex max-w-[1270px] flex-col lg:h-full lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-12 lg:w-[533px] lg:py-0 lg:pl-[145px] lg:pr-0">
          <h2 className="text-[32px] font-semibold leading-[1.1] sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            New styles.
            <br />
            Ready for new
            <br />
            adventures.
          </h2>
          <a href="#" className="mt-4 text-[17px] text-[#06c] hover:underline">
            Shop the latest bands
          </a>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 lg:ml-auto lg:mr-[3px] lg:gap-[64px] lg:overflow-visible lg:px-0">
          <img
            src={orange}
            alt="Orange Alpine Loop"
            className="h-[300px] w-[85px] shrink-0 object-cover lg:h-[479px] lg:w-[136px]"
          />
          <img
            src={mint}
            alt="Sport Band"
            className="h-[300px] w-[90px] shrink-0 object-cover lg:h-[479px] lg:w-[144px]"
          />
          <img
            src={white}
            alt="White Ocean Band"
            className="h-[300px] w-[83px] shrink-0 object-cover lg:h-[479px] lg:w-[132px]"
          />
          <img
            src={green}
            alt="Braided Solo Loop"
            className="h-[300px] w-[82px] shrink-0 object-cover lg:h-[479px] lg:w-[131px]"
          />
        </div>
      </div>
    </section>
  );
}

export default UltraNewStyles;

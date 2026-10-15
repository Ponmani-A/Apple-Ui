import Navbar from "../../components/Navbar/Navbar";
import MusicHero from "../../components/MusicHero/MusicHero";
import MusicBlack from "../../components/MusicBlack/MusicBlack";
import MusicTrial from "../../components/MusicTrial/MusicTrial";
import MusicFeatures from "../../components/MusicFeatures/MusicFeatures";
import MusicDevices from "../../components/MusicDevices/MusicDevices";
import MusicPlans from "../../components/MusicPlans/MusicPlans";
import MusicFaq from "../../components/MusicFaq/MusicFaq";
import MusicWorking from "../../components/MusicWorking/MusicWorking";
import Footer from "../../components/Footer/Footer";

function Music() {
  return (
    <>
      <Navbar />

      <div className="bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Music
          </span>
          <a
            href="#"
            className="rounded-full bg-[#fa243c] px-3 py-1 text-[11px] font-semibold text-white lg:px-4 lg:text-[12px]"
          >
            Try 1 month free*
          </a>
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-4 py-3 text-center text-[12px] lg:h-[51px] lg:py-0 lg:text-[14px] lg:leading-[51px]">
        Get 6 months of Apple Music free with eligible audio devices.◊{" "}
        <a href="#" className="text-[#06c] hover:underline">
          Learn more
        </a>
      </div>

      <MusicHero />
      <MusicBlack />
      <MusicTrial />
      <MusicFeatures />
      <MusicDevices />
      <MusicPlans />
      <MusicFaq />
      <MusicWorking />
      <Footer />
    </>
  );
}

export default Music;

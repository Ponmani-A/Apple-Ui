import Navbar from "../../components/Navbar/Navbar";
import PodcastsHero from "../../components/PodcastsHero/PodcastsHero";
import PodcastsCuration from "../../components/PodcastsCuration/PodcastsCuration";
import PodcastsCards from "../../components/PodcastsCards/PodcastsCards";
import PodcastsDevices from "../../components/PodcastsDevices/PodcastsDevices";
import PodcastsFaq from "../../components/PodcastsFaq/PodcastsFaq";
import PodcastsWorking from "../../components/PodcastsWorking/PodcastsWorking";
import Footer from "../../components/Footer/Footer";

function Podcasts() {
  return (
    <>
      <Navbar />

      {/* Local nav */}
      <div className="bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Podcasts
          </span>
        </div>
      </div>

      <main className="bg-[#f5f5f7] pb-[100px]">
        <PodcastsHero />
        <PodcastsCuration />
        <PodcastsCards />
        <PodcastsDevices />
        <PodcastsFaq />
        <PodcastsWorking />

        <p className="mx-auto mt-[120px] max-w-[1010px] px-5 text-[11px] leading-snug text-[#6e6e73]">
          Subscriptions automatically renew after trial until canceled. Cancel
          at any time. Requires Family Sharing. See
          support.apple.com/family-sharing for more information.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Podcasts;

import Navbar from "../../components/Navbar/Navbar";
import AirpodsSubNav from "../../components/AirpodsSubNav/AirpodsSubNav";
import AirpodsHero from "../../components/AirpodsHero/AirpodsHero";
import MagicalConnection from "../../components/MagicalConnection/MagicalConnection";
import WhichAirpods from "../../components/WhichAirpods/WhichAirpods";
import AirpodsBenefits from "../../components/AirpodsBenefits/AirpodsBenefits";
import Footer from "../../components/Footer/Footer";

function Airpods() {
  return (
    <>
      <Navbar />
      <AirpodsSubNav />

      <div className="bg-[#f5f5f7] px-4 py-2.5 text-center text-xs">
        Get 6 months of Apple Music free with your AirPods.*{" "}
        <a href="#" className="text-[#06c] hover:underline">
          Learn more
        </a>
      </div>

      <main className="bg-[#f5f5f7] pb-24">
        <AirpodsHero />
        <MagicalConnection />
        <WhichAirpods />
        <AirpodsBenefits />
      </main>

      <Footer />
    </>
  );
}

export default Airpods;

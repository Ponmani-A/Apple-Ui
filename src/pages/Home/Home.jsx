import Navbar from "../../components/Navbar/Navbar";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import HeroSection from "../../components/HeroSection/HeroSection";
import TileGrid from "../../components/TileGrid/TileGrid";
import TvCarousel from "../../components/TvCarousel/TvCarousel";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <TileGrid />
      <TvCarousel />
      <Footer />
    </>
  );
}
export default Home;

import Navbar from "../../components/Navbar/Navbar";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import StoreIcons from "../../components/StoreIcons/StoreIcons";
import TheLatest from "../../components/TheLatest/TheLatest";
import HelpIsHere from "../../components/HelpIsHere/HelpIsHere";
import StoreDifference from "../../components/StoreDifference/StoreDifference";
import Accessories from "../../components/Accessories/Accessories";
import LoudAndClear from "../../components/LoudAndClear/LoudAndClear";
import AppleExperience from "../../components/AppleExperience/AppleExperience";
import SpecialStores from "../../components/SpecialStores/SpecialStores";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import Footer from "../../components/Footer/Footer";

function Store() {
  return (
    <>
      <Navbar />
      <PromoBanner />
      <main className="bg-[#f5f5f7] pb-16">
        <StoreHeader />
        <StoreIcons />
        <TheLatest />
        <HelpIsHere />
        <StoreDifference />
        <Accessories />
        <LoudAndClear />
        <AppleExperience />
        <SpecialStores />
        <QuickLinks />
      </main>
      <Footer />
    </>
  );
}

export default Store;

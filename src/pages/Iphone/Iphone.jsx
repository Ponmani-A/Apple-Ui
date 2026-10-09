import Navbar from "../../components/Navbar/Navbar";
import IphoneSubNav from "../../components/IphoneSubNav/IphoneSubNav";
import IphoneHero from "../../components/IphoneHero/IphoneHero";
import WhichIphone from "../../components/WhichIphone/WhichIphone";
import SaveOnIphone from "../../components/SaveOnIphone/SaveOnIphone";
import IphoneAccessories from "../../components/IphoneAccessories/IphoneAccessories";
import WhatMakesIphone from "../../components/WhatMakesIphone/WhatMakesIphone";
import GetMoreIphone from "../../components/GetMoreIphone/GetMoreIphone";
import Footer from "../../components/Footer/Footer";

function Iphone() {
  return (
    <>
      <Navbar />
      <IphoneSubNav />

      <div className="bg-[#f5f5f7] px-4 py-2.5 text-center text-xs">
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade
        in iPhone 11 or higher.{" "}
        <a href="#" className="text-[#06c] hover:underline">
          Shop iPhone
        </a>
      </div>

      <IphoneHero />
      <WhichIphone />

      <div className="bg-[#f2f2f2] pb-16">
        <SaveOnIphone />
        <IphoneAccessories />
        <WhatMakesIphone />
        <GetMoreIphone />
      </div>

      <Footer />
    </>
  );
}

export default Iphone;

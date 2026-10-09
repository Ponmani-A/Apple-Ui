import Navbar from "../../components/Navbar/Navbar";
import MacSubNav from "../../components/MacSubNav/MacSubNav";
import MacHero from "../../components/MacHero/MacHero";
import WhichMac from "../../components/WhichMac/WhichMac";
import MacPromos from "../../components/MacPromos/MacPromos";
import WhatMakesMac from "../../components/WhatMakesMac/WhatMakesMac";
import AppsTabs from "../../components/AppsTabs/AppsTabs";
import GetMore from "../../components/GetMore/GetMore";
import AppleAtWork from "../../components/AppleAtWork/AppleAtWork";
import Footer from "../../components/Footer/Footer";

function Mac() {
  return (
    <>
      <Navbar />
      <MacSubNav />

      <div className="bg-[#f5f5f7] px-4 py-3 text-center text-xs leading-5">
        Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12
        months, interest-free when you choose to check out with Apple Card
        Monthly Installments.*
        <br />
        <a href="#" className="text-[#06c] hover:underline">
          Learn more
        </a>
      </div>

      <MacHero />
      <WhichMac />
      <MacPromos />
      <WhatMakesMac />
      <AppsTabs />
      <GetMore />
      <AppleAtWork />
      <Footer />
    </>
  );
}

export default Mac;

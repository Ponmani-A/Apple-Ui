import Navbar from "../../components/Navbar/Navbar";
import UltraBands from "../../components/UltraBands/UltraBands";
import UltraNewStyles from "../../components/UltraNewStyles/UltraNewStyles";
import UltraSeries8 from "../../components/UltraSeries8/UltraSeries8";
import UltraCompare from "../../components/UltraCompare/UltraCompare";
import Footer from "../../components/Footer/Footer";

function WatchUltra() {
  return (
    <>
      <Navbar />

      <div className="border-b border-[#d2d2d7] bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Watch Ultra
          </span>
          <div className="flex gap-6 text-[12px]">
            <a href="#" className="hover:underline">
              Overview
            </a>
            <a href="#" className="hover:underline">
              Compare
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f7] px-4 py-3 text-center text-[12px] lg:h-[51px] lg:py-0 lg:text-[14px] lg:leading-[51px]">
        Pay for your Apple Watch over time, interest-free when you choose to
        check out with Apple Card Monthly Installments.{" "}
        <a href="#" className="text-[#06c] hover:underline">
          Learn more ◊
        </a>
      </div>

      <UltraBands />
      <UltraNewStyles />
      <UltraSeries8 />
      <UltraCompare />
      <Footer />
    </>
  );
}

export default WatchUltra;

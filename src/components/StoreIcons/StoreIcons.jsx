import ScrollRow from "../ScrollRow/ScrollRow";
import mac from "../../assets/store-mac.png";
import iphone from "../../assets/store-iphone.png";
import ipad from "../../assets/store-ipad.png";
import watch from "../../assets/store-watch.png";
import airpods from "../../assets/store-airpods.png";
import airtag from "../../assets/store-airtag.png";
import tv from "../../assets/store-tv.png";
import homepod from "../../assets/store-homepod.png";
import accessories from "../../assets/store-accessories.png";

function StoreIcons() {
  return (
    <ScrollRow>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img src={mac} alt="Mac" className="h-[70px] w-auto md:h-[80px]" />
        <span className="text-xs font-semibold">Mac</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={iphone}
          alt="iPhone"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">iPhone</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img src={ipad} alt="iPad" className="h-[70px] w-auto md:h-[80px]" />
        <span className="text-xs font-semibold">iPad</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={watch}
          alt="Apple Watch"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">Apple Watch</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={airpods}
          alt="AirPods"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">AirPods</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={airtag}
          alt="AirTag"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">AirTag</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={tv}
          alt="Apple TV 4K"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">Apple TV 4K</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={homepod}
          alt="HomePod"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">HomePod</span>
      </a>
      <a
        href="#"
        className="flex w-[110px] shrink-0 flex-col items-center gap-3 md:w-[130px]"
      >
        <img
          src={accessories}
          alt="Accessories"
          className="h-[70px] w-auto md:h-[80px]"
        />
        <span className="text-xs font-semibold">Accessories</span>
      </a>
    </ScrollRow>
  );
}

export default StoreIcons;

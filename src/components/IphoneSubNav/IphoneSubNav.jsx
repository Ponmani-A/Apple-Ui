import iphone14 from "../../assets/iphone14.jpg";
import banner from "../../assets/banner.jpg";
import airpods from "../../assets/airpods.jpg";
import card from "../../assets/card.png";
import phoneCard from "../../assets/phonecard.jpg";

const items = [
  { name: "iPhone 14 Pro", icon: banner, tag: "New" },
  { name: "iPhone 14", icon: iphone14, tag: "New" },
  { name: "iPhone 13", icon: iphone14, tag: "" },
  { name: "iPhone SE", icon: iphone14, tag: "" },
  { name: "iPhone 12", icon: iphone14, tag: "" },
  { name: "Compare", icon: iphone14, tag: "" },
  { name: "AirPods", icon: airpods, tag: "" },
  { name: "AirTag", icon: airpods, tag: "" },
  { name: "Accessories", icon: phoneCard, tag: "" },
  { name: "Apple Card", icon: card, tag: "" },
  { name: "iOS 16", icon: iphone14, tag: "" },
  { name: "Shop iPhone", icon: iphone14, tag: "" },
];

function IphoneSubNav() {
  return (
    <div className="no-scrollbar overflow-x-auto bg-white">
      <div className="mx-auto flex max-w-[980px] justify-between gap-5 px-5 py-3">
        {items.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex w-[64px] shrink-0 flex-col items-center gap-1 text-[10px] text-[#1d1d1f]"
          >
            <img
              src={item.icon}
              alt=""
              className="h-[28px] w-[28px] object-contain"
            />
            <span className="whitespace-nowrap">{item.name}</span>
            <span className="h-3 text-[9px] text-[#bf4800]">{item.tag}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default IphoneSubNav;

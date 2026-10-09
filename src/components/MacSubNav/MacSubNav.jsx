import airIcon from "../../assets/store-mac.png";
import proIcon from "../../assets/macbook.jpg";
import imacIcon from "../../assets/store-mac.png";
import miniIcon from "../../assets/store-tv.png";
import studioIcon from "../../assets/store-tv.png";
import macProIcon from "../../assets/store-homepod.png";
import compareIcon from "../../assets/store-ipad.png";
import displaysIcon from "../../assets/store-ipad.png";
import accIcon from "../../assets/store-accessories.png";
import ventura from "../../assets/store-mac.png";
import shopIcon from "../../assets/store-mac.png";

const items = [
  { name: "MacBook Air", icon: airIcon, tag: "" },
  { name: "MacBook Pro", icon: proIcon, tag: "New" },
  { name: "iMac 24”", icon: imacIcon, tag: "" },
  { name: "Mac mini", icon: miniIcon, tag: "New" },
  { name: "Mac Studio", icon: studioIcon, tag: "" },
  { name: "Mac Pro", icon: macProIcon, tag: "" },
  { name: "Compare", icon: compareIcon, tag: "" },
  { name: "Displays", icon: displaysIcon, tag: "" },
  { name: "Accessories", icon: accIcon, tag: "" },
  { name: "Ventura", icon: ventura, tag: "" },
  { name: "Shop Mac", icon: shopIcon, tag: "" },
];

function MacSubNav() {
  return (
    <div className="no-scrollbar overflow-x-auto bg-white">
      <div className="mx-auto flex max-w-[980px] justify-between gap-6 px-5 py-3">
        {items.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex w-[64px] shrink-0 flex-col items-center gap-1 text-[10px] text-[#1d1d1f]"
          >
            <img src={item.icon} alt="" className="h-[28px] w-auto" />
            <span className="whitespace-nowrap">{item.name}</span>
            <span className="h-3 text-[9px] text-[#bf4800]">{item.tag}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MacSubNav;

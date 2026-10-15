import iphone from "../../assets/music-device-iphone.png";
import ipad from "../../assets/ipad.jpg";
import watch from "../../assets/watch.jpg";
import appletv from "../../assets/tedlesso.jpg";
import mac from "../../assets/macbook.jpg";
import homepod from "../../assets/homepad.jpg";
import carplay from "../../assets/card.png";
import smarttv from "../../assets/banner.jpg";
import gaming from "../../assets/fitnes.jpg";
import roku from "../../assets/airpods.jpg";
import android from "../../assets/phonecard.jpg";
import pc from "../../assets/macbook.jpg";
import echo from "../../assets/homepad.jpg";
import sonos from "../../assets/airpods.jpg";
import nest from "../../assets/homepad.jpg";
// note = grey chinna text, link = blue chinna text
const devices = [
  { name: "iPhone", icon: iphone },
  { name: "iPad", icon: ipad },
  { name: "Apple Watch", icon: watch },
  { name: "Apple TV", icon: appletv },
  { name: "Mac", icon: mac },
  { name: "HomePod", icon: homepod },
  { name: "CarPlay", icon: carplay },
  { name: "Smart TVs", icon: smarttv, note: ["Samsung", "LG"] },
  { name: "Gaming Consoles", icon: gaming, note: ["PlayStation 5", "Xbox"] },
  { name: "Roku", icon: roku },
  { name: "Android", icon: android, link: "Download on Google Play" },
  { name: "PC", icon: pc, link: "Update to the latest iTunes" },
  { name: "Amazon Echo", icon: echo, link: "Download the Amazon Alexa app" },
  { name: "Sonos", icon: sonos, link: "Download the Sonos app" },
  { name: "Google Nest", icon: nest, link: "Download the Google Home app" },
];

function MusicDevices() {
  return (
    <section className="bg-white px-5 py-[80px] lg:py-[152px]">
      <h2 className="text-center text-[30px] font-semibold leading-[1.15] sm:text-[40px] lg:text-[48px]">
        Apple Music plays
        <br />
        on all your devices.
      </h2>

      <div className="mx-auto mt-[50px] grid max-w-[980px] grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:mt-[90px] lg:grid-cols-5 lg:gap-y-[56px]">
        {devices.map((d) => (
          <div key={d.name} className="flex flex-col items-center text-center">
            <div className="flex h-[76px] items-center justify-center">
              <img
                src={d.icon}
                alt=""
                className="max-h-[76px] w-auto object-contain"
              />
            </div>
            <p className="mt-[18px] text-[15px] font-semibold leading-[1.2] lg:text-[17px]">
              {d.name}
            </p>
            {d.note && (
              <p className="mt-2 text-[12px] leading-snug text-[#6e6e73] lg:text-[13px]">
                {d.note.map((n) => (
                  <span key={n} className="block">
                    {n}
                  </span>
                ))}
              </p>
            )}
            {d.link && (
              <a
                href="#"
                className="mt-2 max-w-[130px] text-[12px] leading-snug text-[#06c] hover:underline lg:text-[13px]"
              >
                {d.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MusicDevices;

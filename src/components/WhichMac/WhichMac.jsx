import { useState } from "react";
import air1 from "../../assets/store-mac.png";
import air2 from "../../assets/store-mac.png";
import pro13 from "../../assets/macbook.jpg";
import pro14 from "../../assets/latest-macbook.jpg";
import iconMemory from "../../assets/Apple.png";
import iconBattery from "../../assets/card.png";
import iconCamera from "../../assets/search.png";
import iconAudio from "../../assets/Apple.png";
import iconTouch from "../../assets/Apple.png";

const laptops = [
  {
    image: air1,
    isNew: false,
    name: "MacBook Air",
    chip: "M1 chip",
    price: "From $999",
    display: "13.3”",
    displayLabel: "Retina display1",
    chipTag: "M1",
    chipLabel: "Apple M1 chip",
    cpuPre: "",
    cpu: "8-core",
    gpuPre: "",
    gpu: "7-core",
    memory: "Up to 16GB unified memory",
    storage: "2TB",
    battery: "Up to 18 hours battery life3",
    camera: "720p FaceTime HD camera",
    audio: "Three-mic array\nStereo speakers",
    weight: "2.8 lb.",
    touch: "Touch ID",
  },
  {
    image: air2,
    isNew: false,
    name: "MacBook Air",
    chip: "M2 chip",
    price: "From $1199",
    display: "13.6”",
    displayLabel: "Liquid Retina display1",
    chipTag: "M2",
    chipLabel: "Apple M2 chip",
    cpuPre: "",
    cpu: "8-core",
    gpuPre: "Up to",
    gpu: "10-core",
    memory: "Up to 24GB unified memory",
    storage: "2TB",
    battery: "Up to 18 hours battery life4",
    camera: "1080p FaceTime HD camera",
    audio: "Three-mic array\nFour-speaker sound system with Spatial Audio",
    weight: "2.7 lb.",
    touch: "Touch ID",
  },
  {
    image: pro13,
    isNew: false,
    name: "MacBook Pro 13”",
    chip: "",
    price: "From $1299",
    display: "13.3”",
    displayLabel: "Retina display1",
    chipTag: "M2",
    chipLabel: "Apple M2 chip",
    cpuPre: "",
    cpu: "8-core",
    gpuPre: "",
    gpu: "10-core",
    memory: "Up to 24GB unified memory",
    storage: "2TB",
    battery: "Up to 20 hours battery life5",
    camera: "720p FaceTime HD camera",
    audio: "Studio-quality three-mic array\nStereo speakers with Spatial Audio",
    weight: "3.0 lb.",
    touch: "Touch Bar and Touch ID",
  },
  {
    image: pro14,
    isNew: true,
    name: "MacBook Pro 14” and 16”",
    chip: "",
    price: "From $1999",
    display: "14.2” or 16.2”",
    displayLabel: "Liquid Retina XDR display1",
    chipTag: "M2 Pro / Max",
    chipLabel: "Apple M2 Pro or Apple M2 Max chip",
    cpuPre: "Up to",
    cpu: "12-core",
    gpuPre: "Up to",
    gpu: "38-core",
    memory: "Up to 96GB unified memory",
    storage: "8TB",
    battery: "Up to 22 hours battery life6",
    camera: "1080p FaceTime HD camera",
    audio:
      "Studio-quality three-mic array\nSix-speaker sound system with Spatial Audio",
    weight: "3.5 lb. or 4.7 lb.",
    touch: "Touch ID",
  },
];

const row =
  "flex min-h-[70px] flex-col items-center justify-center gap-1 text-center";
const big = "text-[17px] font-semibold";
const small = "text-[10px] leading-tight text-[#1d1d1f]";

function WhichMac() {
  const [tab, setTab] = useState("Laptop");

  return (
    <section className="bg-[#fbfbfd] py-16">
      <h2 className="text-center text-[28px] font-semibold md:text-[40px]">
        Which Mac is right for you?
      </h2>

      <div className="mt-6 flex justify-center gap-6 text-sm">
        <button
          onClick={() => setTab("Laptop")}
          className={
            tab === "Laptop"
              ? "border-b border-black pb-1"
              : "pb-1 text-[#6e6e73]"
          }
        >
          Laptop
        </button>
        <button
          onClick={() => setTab("Desktop")}
          className={
            tab === "Desktop"
              ? "border-b border-black pb-1"
              : "pb-1 text-[#6e6e73]"
          }
        >
          Desktop
        </button>
      </div>

      {tab === "Desktop" && (
        <p className="py-20 text-center text-sm text-[#6e6e73]">
          Desktop models inga add pannunga (iMac, Mac mini, Mac Studio, Mac
          Pro).
        </p>
      )}

      {tab === "Laptop" && (
        <div className="no-scrollbar mx-auto mt-8 max-w-[980px] overflow-x-auto px-5">
          <div className="grid min-w-[760px] grid-cols-4 gap-6">
            {laptops.map((m, i) => (
              <div key={i} className="border-b border-[#d2d2d7] pb-4">
                <img
                  src={m.image}
                  alt={m.name}
                  className="mx-auto h-[100px] w-auto"
                />
                <div className="mt-4 flex justify-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#86868b]" />
                  <span className="h-2 w-2 rounded-full bg-[#d2d2d7]" />
                </div>
                <div className="mt-4 flex min-h-[170px] flex-col items-center text-center">
                  {m.isNew && <p className="text-[10px] text-[#bf4800]">New</p>}
                  <h3 className="text-[17px] font-semibold leading-tight">
                    {m.name}
                  </h3>
                  {m.chip && (
                    <p className="mt-1 text-xs font-semibold">{m.chip}</p>
                  )}
                  <p className="mt-3 text-[11px]">{m.price}</p>
                  <a
                    href="#"
                    className="mt-2 rounded-full bg-[#0071e3] px-3 py-1 text-[11px] text-white"
                  >
                    Buy
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-[11px] text-[#06c] hover:underline"
                  >
                    Learn more
                  </a>
                </div>

                <div className={row}>
                  <p className={big}>{m.display}</p>
                  <p className={small}>{m.displayLabel}</p>
                </div>
                <div className={row}>
                  <span className="rounded bg-black px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    {m.chipTag}
                  </span>
                  <p className={small}>{m.chipLabel}</p>
                </div>
                <div className={row}>
                  <p className={small}>{m.cpuPre}</p>
                  <p className={big}>{m.cpu}</p>
                  <p className={small}>CPU</p>
                </div>
                <div className={row}>
                  <p className={small}>{m.gpuPre}</p>
                  <p className={big}>{m.gpu}</p>
                  <p className={small}>GPU</p>
                </div>
                <div className={row}>
                  <img src={iconMemory} alt="" className="h-6 w-auto" />
                  <p className={small}>{m.memory}</p>
                </div>
                <div className={row}>
                  <p className={big}>{m.storage}</p>
                  <p className={small}>Maximum configurable storage2</p>
                </div>
                <div className={row}>
                  <img src={iconBattery} alt="" className="h-6 w-auto" />
                  <p className={small}>{m.battery}</p>
                </div>
                <div className={row}>
                  <img src={iconCamera} alt="" className="h-6 w-auto" />
                  <p className={small}>{m.camera}</p>
                </div>
                <div className={row}>
                  <img src={iconAudio} alt="" className="h-6 w-auto" />
                  <p className={`${small} whitespace-pre-line`}>{m.audio}</p>
                </div>
                <div className={row}>
                  <p className={big}>{m.weight}</p>
                  <p className={small}>Weight</p>
                </div>
                <div className={row}>
                  <img src={iconTouch} alt="" className="h-6 w-auto" />
                  <p className={small}>{m.touch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center gap-6 text-sm text-[#06c]">
        <a href="#" className="hover:underline">
          Compare all Mac models
        </a>
        <a href="#" className="hover:underline">
          Shop Mac
        </a>
      </div>
    </section>
  );
}

export default WhichMac;

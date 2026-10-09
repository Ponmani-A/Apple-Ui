import banner from "../../assets/banner.jpg";
import iphone14 from "../../assets/iphone14.jpg";

const phones = [
  {
    image: banner,
    isNew: true,
    name: "iPhone 14 Pro",
    tagline: "The ultimate iPhone.",
    price: "From $999",
    display: "6.7” or 6.1”",
    displayLabel: "Super Retina XDR display3",
    extras: ["ProMotion technology", "Always-On display"],
    island: ["Dynamic Island", "A new way to interact with iPhone"],
    sos: ["Emergency SOS via satellite4", "Emergency SOS", "Crash Detection5"],
    cameraTitle: "Pro camera system",
    camera: [
      "48MP Main | Ultra Wide",
      "Telephoto",
      "Photonic Engine for incredible detail and color",
      "Autofocus on TrueDepth front camera",
    ],
    action: "Action mode smooths out shaky handheld videos",
    battery: "Up to 29 hours video playback6",
    chip: "A16",
    chipLabel: "A16 Bionic chip",
    auth: "Face ID",
    authBadge: "ID",
    cellular: "Superfast 5G cellular7",
  },
  {
    image: iphone14,
    isNew: true,
    name: "iPhone 14",
    tagline: "A total powerhouse.",
    price: "From $799*",
    display: "6.7” or 6.1”",
    displayLabel: "Super Retina XDR display3",
    extras: ["–", "–"],
    island: ["–"],
    sos: ["Emergency SOS via satellite4", "Emergency SOS", "Crash Detection5"],
    cameraTitle: "Advanced dual-camera system",
    camera: [
      "12MP Main | Ultra Wide",
      "–",
      "Photonic Engine for incredible detail and color",
      "Autofocus on TrueDepth front camera",
    ],
    action: "Action mode smooths out shaky handheld videos",
    battery: "Up to 26 hours video playback6",
    chip: "A15",
    chipLabel: "A15 Bionic chip with 5-core GPU",
    auth: "Face ID",
    authBadge: "ID",
    cellular: "Superfast 5G cellular7",
  },
  {
    image: iphone14,
    isNew: false,
    name: "iPhone 13",
    tagline: "As amazing as ever.",
    price: "From $599*",
    display: "6.1” or 5.4”",
    displayLabel: "Super Retina XDR display3",
    extras: ["–", "–"],
    island: ["–"],
    sos: ["Emergency SOS", "–"],
    cameraTitle: "Dual-camera system",
    camera: ["12MP Main | Ultra Wide", "–", "–", "TrueDepth front camera"],
    action: "–",
    battery: "Up to 19 hours video playback6",
    chip: "A15",
    chipLabel: "A15 Bionic chip with 4-core GPU",
    auth: "Face ID",
    authBadge: "ID",
    cellular: "Superfast 5G cellular7",
  },
  {
    image: iphone14,
    isNew: false,
    name: "iPhone SE",
    tagline: "Serious power. Serious value.",
    price: "From $429",
    display: "4.7”",
    displayLabel: "Retina HD display",
    extras: ["–", "–"],
    island: ["–"],
    sos: ["Emergency SOS", "–"],
    cameraTitle: "Advanced camera system",
    camera: ["12MP Main", "–", "–", "Front camera"],
    action: "–",
    battery: "Up to 15 hours video playback6",
    chip: "A15",
    chipLabel: "A15 Bionic chip with 4-core GPU",
    auth: "Touch ID",
    authBadge: "TID",
    cellular: "5G cellular7",
  },
];

const cell = "flex flex-col items-center justify-center gap-1 text-center";
const small = "text-[10px] leading-tight text-[#1d1d1f]";
const badge =
  "flex h-7 w-7 items-center justify-center rounded-full border border-[#1d1d1f] text-[8px] font-semibold";

function WhichIphone() {
  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-[28px] font-semibold md:text-[40px]">
        Which iPhone is right for you?
      </h2>

      <div className="no-scrollbar mx-auto mt-10 max-w-[980px] overflow-x-auto px-5">
        <div className="grid min-w-[760px] grid-cols-4 gap-6">
          {phones.map((p, i) => (
            <div key={i} className="border-b border-[#d2d2d7] pb-4">
              <img
                src={p.image}
                alt={p.name}
                className="mx-auto h-[130px] w-auto object-contain"
              />
              <div className="mt-4 flex justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#3a3a3c]" />
                <span className="h-2 w-2 rounded-full bg-[#d2d2d7]" />
                <span className="h-2 w-2 rounded-full bg-[#86868b]" />
              </div>

              <div className="mt-4 flex min-h-[150px] flex-col items-center text-center">
                <p className="h-3 text-[10px] text-[#bf4800]">
                  {p.isNew ? "New" : ""}
                </p>
                <h3 className="text-[17px] font-semibold leading-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs">{p.tagline}</p>
                <p className="mt-4 text-[11px]">{p.price}</p>
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

              <div className={`${cell} min-h-[110px]`}>
                <p className="text-[13px] font-semibold">{p.display}</p>
                <p className={small}>{p.displayLabel}</p>
                {p.extras.map((e, k) => (
                  <p key={k} className={small}>
                    {e}
                  </p>
                ))}
              </div>

              <div className={`${cell} min-h-[90px]`}>
                {p.island.length > 1 && (
                  <span className="h-5 w-3 rounded-sm border border-[#1d1d1f]" />
                )}
                {p.island.map((t, k) => (
                  <p key={k} className={small}>
                    {t}
                  </p>
                ))}
              </div>

              <div className={`${cell} min-h-[100px]`}>
                <span className={badge}>SOS</span>
                {p.sos.map((t, k) => (
                  <p key={k} className={small}>
                    {t}
                  </p>
                ))}
              </div>

              <div className={`${cell} min-h-[200px]`}>
                <span className={badge}>CAM</span>
                <p className={small}>{p.cameraTitle}</p>
                {p.camera.map((t, k) => (
                  <p key={k} className={`${small} text-[#6e6e73]`}>
                    {t}
                  </p>
                ))}
              </div>

              <div className={`${cell} min-h-[80px]`}>
                {p.action !== "–" && <span className={badge}>ACT</span>}
                <p className={small}>{p.action}</p>
              </div>

              <div className={`${cell} min-h-[70px]`}>
                <span className="h-3 w-6 rounded-sm bg-black" />
                <p className={small}>{p.battery}</p>
              </div>

              <div className={`${cell} min-h-[70px]`}>
                <span className={badge}>{p.chip}</span>
                <p className={small}>{p.chipLabel}</p>
              </div>

              <div className={`${cell} min-h-[70px]`}>
                <span className={badge}>{p.authBadge}</span>
                <p className={small}>{p.auth}</p>
              </div>

              <div className={`${cell} min-h-[70px]`}>
                <span className={badge}>5G</span>
                <p className={small}>{p.cellular}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6 text-sm text-[#06c]">
        <a href="#" className="hover:underline">
          Compare all iPhone models
        </a>
        <a href="#" className="hover:underline">
          Shop iPhone
        </a>
      </div>
    </section>
  );
}

export default WhichIphone;

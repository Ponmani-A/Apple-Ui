import compareS8 from "../../assets/watchultra-compare-s8.jpg";
import compareSe from "../../assets/watchultra-compare-se.jpg";
import compareUltra from "../../assets/watchultra-compare-ultra.jpg";

// 2D array (array of array)
const rows = [
  ["45mm or 41mm case size", "44mm or 40mm", "49mm case size"],
  ["50m water resistant¹", "50m water resistant¹", "100m water resistant²"],
  ["Swimproof¹", "Swimproof¹", "Swimproof and recreational diving to 40m²"],
  ["—", "—", "EN13319 certification¹³"],
  ["—", "—", "Depth gauge with water temperature sensor"],
  ["Certified IP6X dust resistant", "—", "Certified IP6X dust resistant"],
  ["—", "—", "Tested to MIL-STD 810H³"],
  ["—", "—", "Customizable Action button"],
  [
    "Always-On Retina display\nUp to 1000 nits brightness",
    "Retina display\nUp to 1000 nits brightness",
    "Always-On Retina display\nUp to 2000 nits brightness",
  ],
  ["Blood Oxygen app⁴", "—", "Blood Oxygen app⁴"],
  ["ECG app⁵", "—", "ECG app⁵"],
  [
    "High and low heart rate notifications",
    "High and low heart rate notifications",
    "High and low heart rate notifications",
  ],
  [
    "Irregular rhythm notification⁶",
    "Irregular rhythm notification⁶",
    "Irregular rhythm notification⁶",
  ],
  [
    "Cardio fitness notifications",
    "Cardio fitness notifications",
    "Cardio fitness notifications",
  ],
  ["Temperature sensing⁷", "—", "Temperature sensing⁷"],
  [
    "Cycle Tracking with retrospective ovulation estimates⁸",
    "Cycle Tracking⁸",
    "Cycle Tracking with retrospective ovulation estimates⁸",
  ],
  ["Emergency SOS⁹", "Emergency SOS⁹", "Emergency SOS⁹"],
  [
    "International emergency calling¹⁰",
    "International emergency calling¹⁰",
    "International emergency calling¹⁰",
  ],
  ["Fall Detection", "Fall Detection", "Fall Detection"],
  ["Crash Detection⁹", "Crash Detection⁹", "Crash Detection⁹"],
  ["High-g accelerometer", "High-g accelerometer", "High-g accelerometer"],
  ["—", "—", "86-decibel Siren to attract attention"],
  ["Cellular available¹¹", "Cellular available¹¹", "Cellular connectivity¹¹"],
  [
    "Supports Family Setup¹²\nConnect family members who don’t have an iPhone",
    "Supports Family Setup¹²\nConnect family members who don’t have an iPhone",
    "Supports Family Setup¹²\nConnect family members who don’t have an iPhone",
  ],
];

const cols = "grid grid-cols-[359px_336px_285px]";

function UltraCompare() {
  return (
    <section className="bg-white px-5 pb-[80px] pt-[60px] lg:pt-[99px]">
      <h2 className="text-center text-[28px] font-semibold leading-[1.1] sm:text-[34px] lg:text-[40px]">
        Which Apple Watch is right for you?
      </h2>
      <a
        href="#"
        className="mt-5 block text-center text-[17px] text-[#06c] hover:underline lg:text-[19px]"
      >
        Compare all models
      </a>

      <div className="no-scrollbar mx-auto mt-[40px] max-w-[980px] overflow-x-auto lg:mt-[59px]">
        <div className="min-w-[980px]">
          <div className={`${cols} items-end`}>
            <img
              src={compareS8}
              alt="Apple Watch Series 8"
              className="h-[271px] w-auto"
            />
            <img
              src={compareSe}
              alt="Apple Watch SE"
              className="h-[271px] w-auto"
            />
            <img
              src={compareUltra}
              alt="Apple Watch Ultra"
              className="h-[300px] w-auto"
            />
          </div>

          <div className={`${cols} mt-[75px]`}>
            <div>
              <h3 className="text-[21px] font-semibold leading-tight">
                Apple Watch Series 8
              </h3>
              <p className="mt-1 text-[17px] font-semibold">From $399</p>
            </div>
            <div>
              <h3 className="text-[21px] font-semibold leading-tight">
                Apple Watch SE
              </h3>
              <p className="mt-1 text-[17px] font-semibold">From $249</p>
            </div>
            <div>
              <h3 className="text-[21px] font-semibold leading-tight">
                Apple Watch Ultra
              </h3>
              <p className="mt-1 text-[17px] font-semibold">From $799</p>
            </div>
          </div>

          <div className={`${cols} mt-5 gap-y-4`}>
            {rows.flat().map((text, i) => (
              <p
                key={i}
                className="whitespace-pre-line pr-6 text-[17px] leading-6"
              >
                {text}
              </p>
            ))}
          </div>

          <div className={`${cols} mt-6`}>
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <a
                  href="#"
                  className="inline-flex h-[43px] items-center rounded-full bg-[#0071e3] px-5 text-[17px] text-white"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="mt-4 block text-[17px] text-[#06c] hover:underline"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UltraCompare;

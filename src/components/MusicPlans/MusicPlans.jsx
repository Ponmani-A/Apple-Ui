import appleLogo from "../../assets/Apple.png";
import appIcon from "../../assets/music-app-icon.png";
import homepod from "../../assets/music-homepod.jpg";
import oneIcons from "../../assets/music-one-icons.jpg";
import studentPhones from "../../assets/music-student-phones.jpg";

const plans = [
  { name: "Voice", sup: "5", price: "$4.99/mo.", button: "Try it free" },
  { name: "Student", sup: "6", price: "$5.99/mo.", button: "Try it free" },
  { name: "Individual", sup: "", price: "$10.99/mo.", button: "Try it free*" },
  { name: "Family", sup: "7", price: "$16.99/mo.", button: "Try it free" },
];

const features = [
  "100 million songs and more than 30,000 expert-curated playlists",
  "Request any track, album, playlist, or station simply by asking Siri or with Type to Siri",
  "Free trial with no commitment8",
  "Stream ad-free music",
  "Original shows, concerts, and exclusives — and live and on-demand radio stations hosted by artists",
  "Available on Apple devices",
  "Available on other supported devices",
  "Spatial Audio with Dolby Atmos",
  "Full catalog in lossless audio",
  "Apple Music Sing, with beat-by-beat lyrics and adjustable vocals4",
  "Download 100,000 songs to your library, access your entire library from any device, and listen online or off",
  "See what your friends are listening to",
  "Unlimited access for up to six people",
  "Personal music library for each family member",
  "Personalized recommendations for each family member",
];

const gridCols =
  "grid grid-cols-[1fr_repeat(4,110px)] lg:grid-cols-[1fr_repeat(4,164px)]";
const redBtn =
  "inline-flex h-[32px] items-center rounded-full bg-[#fa243c] px-4 text-[13px] font-semibold text-white";

function MusicPlans() {
  return (
    <section className="bg-[#f5f5f7] px-4 py-[80px] lg:pb-[153px] lg:pt-[148px]">
      {/* Heading */}
      <div className="text-center">
        <img src={appIcon} alt="" className="mx-auto h-[84px] w-[84px]" />
        <h2 className="mt-4 text-[32px] font-semibold leading-[1.14] sm:text-[44px] lg:text-[56px] lg:leading-[64px]">
          Choose the plan
          <br />
          that’s right for you.
        </h2>
        <p className="mt-4 text-[17px] font-semibold lg:text-[21px]">
          No commitment. Cancel anytime.
        </p>
        <p className="mt-6 text-[11px] text-[#6e6e73] lg:text-[12px]">
          Apple Music is available in iTunes, and for iOS and Android devices.
        </p>
      </div>

      <div className="no-scrollbar mx-auto mt-[50px] max-w-[980px] overflow-x-auto">
        <div className="min-w-[760px]">
          <div className={`${gridCols} items-end pb-6`}>
            <div />
            {plans.map((p) => (
              <div key={p.name} className="text-center">
                <p className="text-[14px] font-semibold leading-snug lg:text-[17px]">
                  {p.name}
                  {p.sup && <sup className="text-[10px]">{p.sup}</sup>}
                  <br />
                  {p.price}
                </p>
                <a href="#" className={`${redBtn} mt-3`}>
                  {p.button}
                </a>
              </div>
            ))}
          </div>

          {features.map((f) => (
            <div
              key={f}
              className={`${gridCols} border-b border-[#d2d2d7] py-3`}
            >
              <p className="max-w-[300px] pr-4 text-[14px] font-semibold leading-5 lg:text-[15px]">
                {f}
              </p>
              {/* Checkmark screenshot la illa. Venum-na ✓ inga podunga */}
              <div />
              <div />
              <div />
              <div />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-[60px] grid max-w-[980px] gap-5 md:grid-cols-2 lg:mt-[75px]">
        <div className="flex flex-col overflow-hidden rounded-[18px] bg-white px-8 pt-10 lg:h-[683px] lg:px-[65px] lg:pt-[56px]">
          <p className="flex items-center gap-1 text-[21px] font-semibold">
            <img src={appleLogo} alt="" className="h-[18px] w-auto invert" />
            Music
          </p>
          <h3 className="mt-3 text-[24px] font-semibold leading-[1.15] lg:text-[28px] lg:leading-8">
            Get 6 months of Apple Music free with eligible devices.◊
          </h3>
          <a href="#" className="mt-2 text-[14px] text-[#06c] hover:underline">
            Learn more
          </a>
          <img
            src={homepod}
            alt=""
            className="mb-10 mt-10 w-[250px] lg:mb-[83px] lg:mt-auto lg:w-[313px]"
          />
        </div>

        <div className="flex flex-col overflow-hidden rounded-[18px] bg-white px-8 pt-10 lg:h-[683px] lg:px-[65px] lg:pt-[56px]">
          <p className="flex items-center gap-1 text-[21px] font-semibold">
            <img src={appleLogo} alt="" className="h-[18px] w-auto invert" />
            One
          </p>
          <h3 className="mt-3 text-[24px] font-semibold leading-[1.15] lg:text-[28px] lg:leading-8">
            Bundle up to 6 Apple services. And enjoy more for less.
          </h3>
          <div className="mt-2 flex gap-6 text-[14px] text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free2
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={oneIcons}
            alt=""
            className="mb-10 mt-10 w-[260px] lg:mb-[83px] lg:mt-auto lg:w-[366px]"
          />
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-[980px] flex-col items-center overflow-hidden rounded-[18px] bg-white lg:h-[381px] lg:flex-row">
        <div className="px-8 py-10 lg:w-1/2 lg:px-[96px]">
          <h3 className="max-w-[260px] text-[24px] font-semibold leading-[1.15] lg:text-[28px] lg:leading-8">
            Apple Music Student Plan comes with Apple TV+ for free.9
          </h3>
          <a href="#" className={`${redBtn} mt-5 h-[40px] px-5`}>
            Try it free
          </a>
          <a
            href="#"
            className="mt-4 block text-[14px] text-[#06c] hover:underline"
          >
            Learn more about Apple TV+
          </a>
        </div>
        <div className="flex justify-center self-stretch lg:w-1/2 lg:items-end lg:justify-start lg:pl-[22px]">
          <img src={studentPhones} alt="" className="w-[300px] lg:w-[381px]" />
        </div>
      </div>
    </section>
  );
}

export default MusicPlans;

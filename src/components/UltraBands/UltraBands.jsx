import bannerAlpine from "../../assets/watchultra-banner-alpine.jpg";
import bannerTrail from "../../assets/watchultra-banner-trail.jpg";
import bannerOcean from "../../assets/watchultra-banner-ocean.jpg";
import iconA1 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconA2 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconA3 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconT1 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconT2 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconT3 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconO1 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconO2 from "../../assets/watchultra-w-ocean-yellow.jpg";
import iconO3 from "../../assets/watchultra-w-ocean-yellow.jpg";
import wAlpineGreen from "../../assets/watchultra-w-alpine-green.jpg";
import wAlpineOrange from "../../assets/watchultra-w-alpine-orange.jpg";
import wAlpineStarlight from "../../assets/watchultra-w-alpine-starlight.jpg";
import wTrailBlue from "../../assets/watchultra-w-trail-blue.jpg";
import wTrailBlack from "../../assets/watchultra-w-trail-black.jpg";
import wTrailYellow from "../../assets/watchultra-w-trail-yellow.jpg";
import wOceanMidnight from "../../assets/watchultra-w-ocean-white.jpg";
import wOceanWhite from "../../assets/watchultra-w-ocean-white.jpg";
import wOceanYellow from "../../assets/watchultra-w-ocean-yellow.jpg";

const bands = [
  {
    title: "Alpine Loop",
    banner: bannerAlpine,
    height: "lg:h-[222px]",
    features: [
      { icon: iconA1, text: "For outdoor adventurers" },
      { icon: iconA2, text: "Comfortable, yet extremely rugged" },
      { icon: iconA3, text: "G-hook ensures a secure fit" },
    ],
    watches: [
      {
        image: wAlpineGreen,
        name: ["Titanium Case with", "Green Alpine Loop"],
      },
      {
        image: wAlpineOrange,
        name: ["Titanium Case with", "Orange Alpine Loop"],
      },
      {
        image: wAlpineStarlight,
        name: ["Titanium Case with", "Starlight Alpine Loop"],
      },
    ],
  },
  {
    title: "Trail Loop",
    banner: bannerTrail,
    height: "lg:h-[229px]",
    features: [
      { icon: iconT1, text: "For endurance athletes" },
      { icon: iconT2, text: "Light, stretchy, our thinnest band yet" },
      {
        icon: iconT3,
        text: "Convenient pull tab for making quick adjustments on the go",
      },
    ],
    watches: [
      {
        image: wTrailBlue,
        name: ["Titanium Case with", "Blue/Gray Trail Loop"],
      },
      {
        image: wTrailBlack,
        name: ["Titanium Case with", "Black/Gray Trail Loop"],
      },
      {
        image: wTrailYellow,
        name: ["Titanium Case with", "Yellow/Beige Trail Loop"],
      },
    ],
  },
  {
    title: "Ocean Band",
    banner: bannerOcean,
    height: "lg:h-[237px]",
    features: [
      {
        icon: iconO1,
        text: "For extreme water sports and recreational diving",
      },
      {
        icon: iconO2,
        text: "The tubular design allows it to flex and stretch, even over a wetsuit",
      },
      {
        icon: iconO3,
        text: "Titanium buckle with adjustable loop provides a secure fit",
      },
    ],
    watches: [
      {
        image: wOceanMidnight,
        name: ["Titanium Case with", "Midnight Ocean Band"],
      },
      { image: wOceanWhite, name: ["Titanium Case with", "White Ocean Band"] },
      {
        image: wOceanYellow,
        name: ["Titanium Case with", "Yellow Ocean Band"],
      },
    ],
  },
];

function UltraBands() {
  return (
    <section className="bg-white px-4 pb-[40px] pt-[50px] lg:pt-[92px]">
      <h1 className="mx-auto max-w-[900px] text-center text-[30px] font-semibold leading-[1.15] sm:text-[40px] lg:text-[48px] lg:leading-[52px]">
        One rugged case. Three specialized bands. Choose your adventure.
      </h1>

      <div className="mx-auto mt-[40px] max-w-[1270px] lg:mt-[67px]">
        {bands.map((band) => (
          <div key={band.title} className="mb-[50px] lg:mb-[69px]">
            <div
              className={`relative h-[260px] overflow-hidden ${band.height}`}
            >
              <img
                src={band.banner}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-10 px-6 pt-6 text-white lg:pl-[163px] lg:pt-[56px]">
                <h2 className="text-[20px] font-semibold leading-[1.25] lg:text-[24px] lg:leading-[30px]">
                  {band.title}
                </h2>
                <div className="mt-3 flex flex-col gap-2 lg:mt-[28px] lg:flex-row lg:gap-x-[28px]">
                  {band.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-3">
                      <img
                        src={f.icon}
                        alt=""
                        className="h-6 w-6 shrink-0 object-contain"
                      />
                      <p className="text-[11px] font-semibold leading-[1.3] lg:max-w-[190px] lg:text-[13px]">
                        {f.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-[40px] grid gap-12 sm:grid-cols-3 sm:gap-4 lg:mt-[88px] lg:flex lg:justify-between lg:gap-0">
              {band.watches.map((w) => (
                <div
                  key={w.image}
                  className="flex flex-col items-center text-center lg:w-[303px]"
                >
                  <img
                    src={w.image}
                    alt={w.name[1]}
                    className="h-auto w-[220px] lg:h-[431px] lg:w-[296px]"
                  />
                  <p className="mt-[19px] text-[14px] font-semibold leading-5">
                    {w.name[0]}
                    <br />
                    {w.name[1]}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-[22px]">$799</p>
                  <p className="text-[14px] leading-5">
                    or $33.29/mo. for 24 mo.*
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UltraBands;

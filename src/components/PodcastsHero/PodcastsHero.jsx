import { useState } from "react";

import tile1 from "../../assets/banner.jpg";
import tile2 from "../../assets/ipad.jpg";
import tile3 from "../../assets/watch.jpg";
import tile4 from "../../assets/fitnes.jpg";
import tile5 from "../../assets/macbook.jpg";
import tile6 from "../../assets/homepad.jpg";
import tile7 from "../../assets/airpods.jpg";
import tile8 from "../../assets/phonecard.jpg";
import podcasts from "../../assets/podcasts-hero-phone.png";

// Podcast card details
const leftPodcasts = [
  {
    title: "REFILE",
    subtitle: "Investigative Journalism",
    tag: "True Crime",
    image: tile1,
  },
  {
    title: "SWEET BOBBY",
    subtitle: "A Catfish Nightmare",
    tag: "Docuseries",
    image: tile2,
  },
  {
    title: "CRIME SHOW",
    subtitle: "The Stories Behind",
    tag: "Mystery",
    image: tile3,
  },
  {
    title: "NIGHT TALK",
    subtitle: "Neon Stories",
    tag: "Culture",
    image: tile4,
  },
];

const rightPodcasts = [
  {
    title: "WORTH NOTING",
    subtitle: "Design & Ideas",
    tag: "Design",
    image: tile5,
  },
  {
    title: "WE CAN DO HARD THINGS",
    subtitle: "Glennon Doyle",
    tag: "Self-Help",
    image: tile6,
  },
  {
    title: "EAR HUSTLE",
    subtitle: "San Quentin Prison",
    tag: "Society",
    image: tile7,
  },
  {
    title: "MLK TAPES",
    subtitle: "Historical Audio",
    tag: "History",
    image: tile8,
  },
];

// One reusable card. We use the same design for all 8 cards.
function PodcastCard({ podcast, index, rightSide = false }) {
  const moveCard =
    index % 2 === 0
      ? rightSide
        ? "translate-y-3"
        : "-translate-y-3"
      : rightSide
        ? "-translate-y-3"
        : "translate-y-3";

  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${moveCard}`}
    >
      <img
        src={podcast.image}
        alt={podcast.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 text-left text-white">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-purple-300">
          {podcast.tag}
        </span>
        <h2 className="line-clamp-1 text-xs font-bold leading-snug">
          {podcast.title}
        </h2>
        <p className="line-clamp-1 text-[10px] text-gray-300">
          {podcast.subtitle}
        </p>
      </div>
    </div>
  );
}

// The phone is kept as a separate component to make the main page easier to read.
function PodcastPhone() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="flex w-full justify-center lg:col-span-4">
      <div className="relative w-[300px] rounded-[50px] border-[5px] border-[#38383a] bg-black p-3 shadow-2xl ring-1 ring-black/10 sm:w-[325px]">
        <div className="flex h-[640px] flex-col overflow-hidden rounded-[40px] bg-[#fbfbfd] text-[#1d1d1f]">
          {/* Phone status bar */}
          <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[13px] font-semibold">
            <span>9:41</span>
            <div className="flex h-6 w-24 items-center justify-center rounded-full bg-black text-xs text-white">
              {isPlaying ? "♫ 〰" : "•••"}
            </div>
            <span className="text-xs">◉ ▰</span>
          </div>

          {/* Scrollable phone app content */}
          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 pb-4 pt-1">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-purple-700">
                  Listen Now
                </span>
                <span className="text-gray-600">♧　•••</span>
              </div>

              {/* Podcast cover */}
              <div className="relative mt-2 flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-600 p-4 text-center shadow-md">
                <div className="flex h-36 w-36 rotate-[-2deg] flex-col items-center justify-center rounded-md border border-yellow-400/80 bg-[#fde047] p-3 text-gray-900 shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-700">
                    DR. MAYA SHANKAR
                  </span>
                  <p className="mt-1 text-sm font-black leading-tight text-[#111827]">
                    A SLIGHT
                    <br />
                    CHANGE
                    <br />
                    OF PLANS
                  </p>
                  <span className="mt-1 text-[8px] font-semibold text-gray-600">
                    PUSHKIN
                  </span>
                </div>

                <div className="absolute left-2.5 top-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-semibold text-white">
                  ✓ Subscribed
                </div>
              </div>

              {/* Podcast information */}
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                    Latest Episode
                  </span>
                  <span className="text-[10px] text-gray-400">Oct 4</span>
                </div>
                <h2 className="mt-0.5 text-base font-bold leading-snug">
                  Navigating Life’s Pivot Moments
                </h2>
                <p className="text-xs font-medium text-gray-500">
                  A Slight Change of Plans
                </p>
              </div>

              {/* Play and pause button */}
              <div className="mt-2 rounded-2xl border border-gray-200/80 bg-[#f0f0f4] p-3 shadow-sm">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-xl text-white shadow-md transition hover:bg-purple-700 active:scale-95"
                    title={isPlaying ? "Pause" : "Play"}
                    aria-label={isPlaying ? "Pause podcast" : "Play podcast"}
                  >
                    {isPlaying ? "Ⅱ" : "▶"}
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-gray-200/60 pt-2 text-[10px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>🔊</span>
                    <div className="h-1 w-16 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-3/4 rounded-full bg-gray-600" />
                    </div>
                  </div>
                  <span className="font-medium text-purple-700">
                    AirPods Pro
                  </span>
                </div>
              </div>
            </div>

            {/* Phone bottom navigation */}
            <div className="mt-4 flex justify-around border-t border-gray-200 pt-2 text-[9px] font-medium text-gray-400">
              <div className="flex flex-col items-center text-purple-600">
                <span className="text-base">▶</span>
                <span>Listen Now</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base">▦</span>
                <span>Browse</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base">▥</span>
                <span>Top Charts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base">⌕</span>
                <span>Search</span>
              </div>
            </div>
          </div>

          {/* Phone home indicator */}
          <div className="mx-auto mb-2 h-1 w-32 rounded-full bg-black/60" />
        </div>
      </div>
    </div>
  );
}

function PodcastsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] pb-20 pt-28 md:pt-36">
      {/* Soft purple background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-200/40 via-purple-100/30 to-pink-100/20 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Main heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c084fc] via-[#9333ea] to-[#6b21a8] text-3xl text-white shadow-xl shadow-purple-500/20 md:h-20 md:w-20">
            🎙
          </div>

          <h1 className="mb-12 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#1d1d1f] sm:mb-16 sm:text-6xl md:text-7xl">
            Millions of shows.
            <br />
            More ways to listen.
            <br />
            People are talking.
          </h1>
        </div>

        {/* Left cards + phone + right cards */}
        <div className="relative mx-auto mt-2 max-w-[1100px]">
          <div className="grid grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-12">
            <div className="hidden w-full grid-cols-2 gap-4 lg:col-span-4 lg:grid">
              {leftPodcasts.map((podcast, index) => (
                <PodcastCard
                  key={podcast.title}
                  podcast={podcast}
                  index={index}
                />
              ))}
            </div>

            {/* Phone image */}
            <div className="col-span-12 flex w-full justify-center lg:col-span-4">
              <img
                src={podcasts}
                alt="Apple Podcasts iPhone"
                className="w-[360px] sm:w-[400px] lg:w-[430px] object-contain"
              />
            </div>

            <div className="hidden w-full grid-cols-2 gap-4 lg:col-span-4 lg:grid">
              {rightPodcasts.map((podcast, index) => (
                <PodcastCard
                  key={podcast.title}
                  podcast={podcast}
                  index={index}
                  rightSide
                />
              ))}
            </div>
          </div>
        </div>

        {/* Four main features */}
        <div className="mx-auto mt-[100px] max-w-[900px] text-center text-[26px] font-semibold leading-[1.2] sm:text-[34px] lg:text-[48px] lg:leading-[58px]">
          <p>
            <span className="block text-[#aa45e1]">Millions of podcasts,</span>
            <span className="block">from the biggest names</span>
            <span className="block">to the best independents.</span>
          </p>

          <p className="mt-[48px]">
            <span className="block">
              Access to <span className="text-[#aa45e1]">premium content</span>
            </span>
            <span className="block">with subscriptions.</span>
          </p>

          <p className="mt-[48px]">
            <span className="block">
              Best-in-world <span className="text-[#aa45e1]">curation</span>
            </span>
            <span className="block">and collections.</span>
          </p>

          <p className="mt-[48px]">
            <span className="block text-[#aa45e1]">Personalized discovery</span>
            <span className="block">with easy ways to search.</span>
          </p>
        </div>

        {/* Final description */}
        <div className="text-center">
          <h2 className="mt-[100px] text-[34px] font-semibold leading-[1.15] sm:text-[48px] lg:mt-[150px] lg:text-[64px] lg:leading-[73px]">
            A catalog that
            <br />
            creates <span className="text-[#aa45e1]">dialogue.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
            Apple Podcasts is home to the largest and most talked-about
            collection of shows across all subjects. From globally recognized
            names to the most authentic independents, it is a place where every
            voice matters. And that says it all.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PodcastsHero;

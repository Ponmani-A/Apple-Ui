import { useState } from "react";

const faqs = [
  {
    q: "What is Apple Music? Is it the same as iTunes?",
    a: "Apple Music is a streaming service with over 100 million songs, expert-curated playlists, and live radio. It’s separate from the iTunes Store, where you can buy music.",
  },
  {
    q: "How can I listen to Apple Music?",
    a: "Listen on iPhone, iPad, Mac, Apple Watch, Apple TV, HomePod, CarPlay, Android, PC, smart TVs, and more.",
  },
  {
    q: "What does Apple Music cost?",
    a: "Voice is $4.99/mo., Student is $5.99/mo., Individual is $10.99/mo., and Family is $16.99/mo.",
  },
  {
    q: "What is the Apple Music Voice Plan and how can I listen?",
    a: "The Apple Music Voice Plan is an audio-only plan you control with Siri.",
  },
  {
    q: "Is there an Apple Music student subscription?",
    a: "Yes. Verified college students can subscribe for $5.99/mo. and get Apple TV+ free.",
  },
  {
    q: "Does Siri work with all plans?",
    a: "Yes. Siri works with all plans, and the Voice Plan is designed around Siri.",
  },
  {
    q: "What is Dolby Atmos music and how can I listen to it?",
    a: "Spatial Audio with Dolby Atmos surrounds you with sound from all directions on compatible devices and headphones.",
  },
  {
    q: "What is lossless audio and how can I listen to it?",
    a: "Lossless audio preserves every detail of the original recording and is available across the full catalog.",
  },
  {
    q: "Can I share with my family?",
    a: "Yes. The Family plan gives up to six people their own library and recommendations.",
  },
  { q: "Are there commercials?", a: "No. Apple Music streams ad-free." },
  {
    q: "Am I eligible for a six-month Apple Music free offer? How do I redeem it?",
    a: "Eligible audio device owners can redeem 6 months free. Check eligibility from the offer at the top of this page.",
  },
];

function MusicFaq() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="bg-white px-5 py-[80px] lg:pb-[150px] lg:pt-[148px]">
      <h2 className="text-center text-[32px] font-semibold leading-[1.14] sm:text-[44px] lg:text-[56px]">
        Questions? Answers.
      </h2>

      <div className="mx-auto mt-[40px] max-w-[980px] border-t border-[#d2d2d7] lg:mt-[56px]">
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-[#d2d2d7]">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-[16px] font-semibold leading-6 lg:py-8 lg:text-[19px]"
            >
              {f.q}
              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 shrink-0 text-[#6e6e73] transition-transform ${open === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
            </button>
            {open === i && (
              <p className="pb-6 text-[15px] leading-6 text-[#424245] lg:text-[17px]">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MusicFaq;

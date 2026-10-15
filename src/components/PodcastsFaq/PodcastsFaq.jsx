import { useState } from "react";

const faqs = [
  {
    q: "What is Apple Podcasts?",
    a: "Apple Podcasts is the app where you discover, follow, and listen to millions of shows across every subject, from the biggest names to the best independents.",
  },
  {
    q: "Where can I listen?",
    a: "You can listen on iPhone, iPad, Mac, Apple Watch, Apple TV, CarPlay, and HomePod.",
  },
  {
    q: "What does it cost?",
    a: "Apple Podcasts is free to use, and most shows are free to listen to. Some shows offer optional paid subscriptions.",
  },
  {
    q: "Can I share my subscriptions with my family?",
    a: "Yes. With Family Sharing, you can share your Apple Podcasts subscriptions with your family.",
  },
  {
    q: "Can I download and listen offline?",
    a: "Yes. Download episodes to your library and listen anytime, even without a connection.",
  },
  {
    q: "Can I start a podcast?",
    a: "Yes. Apple Podcasts guides you through creating and publishing your own show.",
  },
  {
    q: "Is Apple Podcasts the same as iTunes?",
    a: "Apple Podcasts is the dedicated app for podcasts and replaces the podcast features that used to live in iTunes.",
  },
];

function PodcastsFaq() {
  const [open, setOpen] = useState(-1); // -1 = ellam close

  return (
    <section className="mt-[100px] px-5 lg:mt-[210px]">
      <h2 className="text-center text-[34px] font-semibold leading-[1.15] sm:text-[48px] lg:text-[64px] lg:leading-[73px]">
        Questions? Answers.
      </h2>

      <div className="mx-auto mt-12 max-w-[936px] border-t border-[#d2d2d7] lg:mt-[100px]">
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-[#d2d2d7]">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-[25px] text-left text-[17px] font-semibold leading-6 lg:text-[21px]"
            >
              {f.q}
              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
            </button>
            {open === i && (
              <p className="pb-6 text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PodcastsFaq;

const podcasts = [
  {
    category: "APPLE PODCASTS ORIGINAL",
    title: "All Music Is Black Music",
    description:
      "Exploring the roots and branches of Black music history and global impact.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "ACTION & DRAMA",
    title: "Marvel's Black Widow",
    description:
      "An audio thriller tracing a hero's untold story and secret missions.",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "TRUE CRIME",
    title: "Something Was Wrong",
    description:
      "A gripping series exploring complicated relationships and deception.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "COMEDY & SOCIETY",
    title: "SmartLess",
    description:
      "Unexpected conversations, funny stories, and surprising guests.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "DOCUMENTARY",
    title: "At Least Things",
    description:
      "Audio documentaries about unusual nights, long roads, and solitude.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "COMEDY",
    title: "Merry Laughs",
    description:
      "Funny routines and behind-the-scenes stories from great performers.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
  },
];

function PodcastCard({ podcast }) {
  return (
    <div className="group relative h-[230px] overflow-hidden rounded-[24px] shadow-md sm:h-[270px] lg:h-[328px]">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-purple-300 sm:text-xs">
          {podcast.category}
        </p>

        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {podcast.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-snug text-white/90 sm:text-[15px]">
          {podcast.description}
        </p>

        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          onClick={() => {}}
        >
          <span aria-hidden="true">▶</span>
          Listen now
        </button>
      </div>
    </div>
  );
}

function PodcastsCuration() {
  return (
    <section className="mt-[60px] bg-[#f5f5f7] px-5 py-8 sm:px-8 lg:mt-[87px] lg:px-10">
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.title} podcast={podcast} />
        ))}
      </div>

      <h2 className="mt-10 text-center text-[34px] font-semibold leading-tight text-[#aa45e1] sm:text-[40px] lg:mt-12 lg:text-[48px]">
        Curation
      </h2>

      <p className="mx-auto mt-4 max-w-[560px] text-center text-[17px] leading-[1.45] text-[#1d1d1f] sm:px-5 lg:text-[19px] lg:leading-6">
        Easily discover trending stories, collections around culturally relevant
        topics, and outstanding new podcasts with expert curation from our
        editors.
      </p>
    </section>
  );
}

export default PodcastsCuration;

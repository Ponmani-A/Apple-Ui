import appIcon from "../../assets/music-app-icon.png";

const notes = [
  "* New subscribers only. $10.99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  "◊ New subscribers only. $10.99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.",
  "1 Compatible hardware and software required. Not all content available in Spatial Audio with Dolby Atmos.",
  "2 The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
  "3 Apple Music 1, Apple Music Hits, and Apple Music Country are available without an Apple Music subscription.",
  "4 Apple Music Sing is supported on iPhone 11 and later or iPhone SE (3rd generation) using iOS 16.2 or later, iPad Pro 11-inch (3rd generation and later), iPad Air (4th generation and later), iPad mini (6th generation), iPad (9th generation and later) using iPadOS 16.2 or later, and Apple TV 4K (3rd generation).",
  "6 College students only. Verification required.",
  "7 Requires Family Sharing. See apple.com/family-sharing for more information.",
  "8 Free trial for new subscribers only. Plan renews at stated price per month until cancelled.",
  "9 Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.",
  "“Umbrella (feat. JAY Z)” written by Christopher Stewart, Terius Nash, Thaddis Harrell, Shawn Carter.",
  "“Green Light” written by Ella Yelich-O’Connor, Jack Antonoff, Joel Little.",
];

function MusicWorking() {
  return (
    <section className="bg-[#fafafa]">
      <div className="px-5 pb-[100px] pt-[80px] text-center lg:pb-[160px] lg:pt-[150px]">
        <img
          src={appIcon}
          alt="Apple Music"
          className="mx-auto h-[84px] w-[84px]"
        />
        <h2 className="mt-4 text-[28px] font-semibold leading-[1.15] sm:text-[34px] lg:text-[40px]">
          Working with Apple Music.
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] lg:text-[17px] lg:leading-7">
          Apple Music supports artists with tools to create, release, promote,
          and measure music across a global stage. Celebrate big moments with
          your fans with unique Shareable Milestones for plays, Shazams, and
          playlist adds. Discover all the ways to showcase content on Apple
          Music — including MusicKit, RSS feeds, widgets, brand guidelines,
          badge art, and more.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 text-[16px] text-[#06c] sm:flex-row sm:gap-20 lg:text-[17px]">
          <a href="#" className="hover:underline">
            Apple Music for Artists
          </a>
          <a href="#" className="hover:underline">
            Apple Performance Partners Program
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[980px] space-y-2 px-5 pb-10 text-[11px] leading-snug text-[#6e6e73]">
        {notes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </section>
  );
}

export default MusicWorking;

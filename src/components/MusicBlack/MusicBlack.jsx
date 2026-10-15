const text =
  "text-[28px] font-semibold leading-[1.14] sm:text-[40px] lg:text-[56px] lg:leading-[64px]";

function MusicBlack() {
  return (
    <section className="bg-black px-5 py-[100px] text-white lg:pb-[347px] lg:pt-[325px]">
      <div className="mx-auto max-w-[980px]">
        <p className={text}>
          Play over 100 million songs
          <br className="hidden lg:block" /> and 30,000 playlists ad-free.
        </p>
        <p className={`mt-16 lg:mt-[140px] ${text}`}>
          Experience Spatial Audio for
          <br className="hidden lg:block" /> sound that surrounds you.1
        </p>
        <p className={`mt-16 lg:mt-[140px] ${text}`}>
          Get curated playlists
          <br className="hidden lg:block" /> and live radio.
        </p>
        <p className={`mt-16 lg:mt-[140px] ${text}`}>
          Download your favorite
          <br className="hidden lg:block" /> tracks. Play them offline.
        </p>
        <p className={`mt-16 lg:mt-[140px] ${text}`}>
          Listen across your devices.
        </p>
      </div>
    </section>
  );
}

export default MusicBlack;

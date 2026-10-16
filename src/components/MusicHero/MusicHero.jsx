import appIcon from "../../assets/music-app-icon.png";

function Phone({ className = "left, top" }) {
  return (
    <div
      className={`relative h-[315px] w-[150px] shrink-0 rounded-[24px] border-2 border-[#4b3f5a] bg-black shadow-xl sm:h-[440px] sm:w-[210px] sm:rounded-[34px] lg:h-[581px] lg:w-[277px] lg:rounded-[45px] ${className}`}
    >
      <span className="absolute left-[34%] top-[2.4%] h-[2.6%] w-[26%] rounded-full bg-[#0c0c0e]" />

      <span className="absolute left-[67%] top-[2.9%] h-[1.2%] w-[3.8%] rounded-full bg-[#0f1530]" />

      <span className="absolute -left-[3px] top-[18%] h-[3.5%] w-[3px] rounded-sm bg-[#4b3f5a]" />

      <span className="absolute -left-[3px] top-[24%] h-[6%] w-[3px] rounded-sm bg-[#4b3f5a]" />

      <span className="absolute -left-[3px] top-[31.5%] h-[6%] w-[3px] rounded-sm bg-[#4b3f5a]" />

      <span className="absolute -right-[3px] top-[27%] h-[9%] w-[3px] rounded-sm bg-[#4b3f5a]" />
    </div>
  );
}

function MusicHero() {
  return (
    <section className="overflow-hidden bg-white px-5 pb-[60px] pt-[40px] text-center lg:pb-[130px] lg:pt-[80px]">
      {/* Apple Music Icon */}
      <img
        src={appIcon}
        alt="Apple Music"
        className="mx-auto h-[84px] w-[84px]"
      />

      {/* App Name */}
      <p className="mt-4 text-[15px] font-semibold lg:text-[17px]">
        Apple Music
      </p>

      {/* Main Heading */}
      <h1 className="mt-[18px] text-[40px] font-semibold leading-[1.05] sm:text-[56px] lg:text-[72px]">
        Hear sound all around.
      </h1>

      {/* Free Trial Button */}
      <a
        href="#"
        className="mt-[28px] inline-flex h-[44px] items-center rounded-full bg-[#fa243c] px-7 text-[15px] font-semibold text-white lg:h-[58px] lg:px-9 lg:text-[19px]"
      >
        Try 1 month free*
      </a>

      {/* Phone Container */}
      <div className="mx-auto mt-[40px] max-w-[1200px] overflow-hidden lg:mt-[79px]">
        <div className="flex items-start justify-center">
          {/* Phone 1 */}
          <Phone className="mt-[33px] -mr-[20px] sm:mt-[46px] sm:-mr-[28px] lg:mt-[61px] lg:-mr-[36px]" />

          {/* Phone 2 */}
          <Phone className="z-10" />

          {/* Phone 3 */}
          <Phone className="mt-[33px] -mx-[20px] sm:mt-[46px] sm:-mx-[28px] lg:mt-[61px] lg:-mx-[36px]" />

          {/* Phone 4 */}
          <Phone className="z-10" />

          {/* Phone 5 */}
          <Phone className="mt-[33px] -ml-[20px] sm:mt-[46px] sm:-ml-[28px] lg:mt-[61px] lg:-ml-[36px]" />
        </div>
      </div>
    </section>
  );
}

export default MusicHero;

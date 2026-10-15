import appIcon from "../../assets/music-app-icon.png";

// Phone: ella size-um var(--w) (phone width) la irundhu calculate aagum.
// left / top = position (CSS calc)
function Phone({ left, top }) {
  return (
    <div
      className="absolute border bg-black"
      style={{
        left,
        top,
        width: "var(--w)",
        height: "calc(var(--w) * 2.097)",
        borderRadius: "calc(var(--w) * 0.162)",
        borderColor: "#4b3f5a",
        borderWidth: "calc(var(--w) * 0.012)",
        boxShadow:
          "calc(var(--w) * 0.1) calc(var(--w) * 0.13) calc(var(--w) * 0.19) rgba(0,0,0,0.16)",
      }}
    >
      {/* Dynamic island */}
      <span className="absolute left-[34%] top-[2.4%] h-[2.6%] w-[26%] rounded-full bg-[#0c0c0e]" />
      {/* Camera dot */}
      <span className="absolute left-[67%] top-[2.9%] h-[1.2%] w-[3.8%] rounded-full bg-[#0f1530]" />
      {/* Side buttons */}
      <span className="absolute -left-[1.2%] top-[18%] h-[3.5%] w-[1.2%] rounded-sm bg-[#4b3f5a]" />
      <span className="absolute -left-[1.2%] top-[24%] h-[6%] w-[1.2%] rounded-sm bg-[#4b3f5a]" />
      <span className="absolute -left-[1.2%] top-[31.5%] h-[6%] w-[1.2%] rounded-sm bg-[#4b3f5a]" />
      <span className="absolute -right-[1.2%] top-[27%] h-[9%] w-[1.2%] rounded-sm bg-[#4b3f5a]" />
    </div>
  );
}

function MusicHero() {
  return (
    <section className="overflow-hidden bg-white px-5 pb-[60px] pt-[40px] text-center lg:pb-[130px] lg:pt-[80px]">
      <img
        src={appIcon}
        alt="Apple Music"
        className="mx-auto h-[84px] w-[84px]"
      />
      <p className="mt-4 text-[15px] font-semibold lg:text-[17px]">
        Apple Music
      </p>

      <h1 className="mt-[18px] text-[40px] font-semibold leading-[1.05] sm:text-[56px] lg:text-[72px]">
        Hear sound all around.
      </h1>

      <a
        href="#"
        className="mt-[28px] inline-flex h-[44px] items-center rounded-full bg-[#fa243c] px-7 text-[15px] font-semibold text-white lg:h-[58px] lg:px-9 lg:text-[19px]"
      >
        Try 1 month free*
      </a>

      {/* ================= CONTAINER (inga width maathunga: max-w-[1200px]) ================= */}
      {/* --w = phone width: mobile 150px, tablet 210px, desktop 277px (image 2 size) */}
      <div className="mx-auto mt-[40px] max-w-[1200px] overflow-hidden lg:mt-[79px]">
        <div
          className="relative [--w:150px] sm:[--w:210px] lg:[--w:277px]"
          style={{ height: "calc(var(--w) * 2.317)" }}
        >
          {/* 2 & 4 mela, 1, 3, 5 keezha (stagger = 0.22 x width) */}
          <Phone
            left="calc(50% - var(--w) * 2.774)"
            top="calc(var(--w) * 0.22)"
          />
          <Phone left="calc(50% - var(--w) * 1.637)" top="0px" />
          <Phone
            left="calc(50% - var(--w) * 0.5)"
            top="calc(var(--w) * 0.22)"
          />
          <Phone left="calc(50% + var(--w) * 0.637)" top="0px" />
          <Phone
            left="calc(50% + var(--w) * 1.774)"
            top="calc(var(--w) * 0.22)"
          />
        </div>
      </div>
    </section>
  );
}

export default MusicHero;

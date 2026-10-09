import appleLogo from "../../assets/Apple.png";

function ProductTile({
  title,
  eyebrow,
  subtitle,
  theme,
  bg,
  big,
  titleIcon,
  link1,
  link2,
  image,
}) {
  const isDark = theme === "dark";

  const tileSize = big
    ? "h-[480px] pt-10 sm:h-[560px] md:pt-14 lg:h-[694px] mb-2.5"
    : "h-[440px] pt-10 sm:h-[500px] md:pt-[58px] lg:h-[580px]";

  const titleSize = big
    ? "text-[40px] leading-[1.07] md:text-[56px]"
    : "text-[32px] leading-[1.1] md:text-[40px]";

  const subtitleSize = big
    ? "mt-1.5 max-w-[520px] text-[21px] md:text-[28px]"
    : "mt-2 max-w-[360px] text-[17px] md:text-[21px]";

  const linksSize = big
    ? "mt-3 text-[17px] md:text-[21px]"
    : "mt-3.5 text-[17px] md:text-[19px]";

  const iconSize = big ? "h-[32px] md:h-[42px]" : "h-[24px] md:h-[30px]";

  return (
    <section
      className={`flex flex-col items-center overflow-hidden px-4 text-center ${tileSize} ${
        isDark ? "text-[#f5f5f7]" : "text-[#1d1d1f]"
      }`}
      style={{ background: bg }}
    >
      <h2
        className={`flex shrink-0 items-center justify-center gap-1 font-semibold ${titleSize}`}
      >
        {titleIcon && (
          <img
            src={appleLogo}
            alt=""
            className={`w-auto ${iconSize} ${isDark ? "" : "invert"}`}
          />
        )}
        {title}
      </h2>

      {eyebrow && (
        <p className="mt-1 shrink-0 text-xs tracking-[0.35em] text-[#ff453a] md:text-sm">
          {eyebrow}
        </p>
      )}

      <p className={`shrink-0 leading-[1.19] ${subtitleSize}`}>{subtitle}</p>

      <div
        className={`flex shrink-0 gap-6 ${linksSize} ${isDark ? "text-[#2997ff]" : "text-[#06c]"}`}
      >
        <a href="#" className="hover:underline">
          {link1}
        </a>
        <a href="#" className="hover:underline">
          {link2}
        </a>
      </div>

      <div className="relative mt-4 min-h-0 w-full flex-1">
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
        />
      </div>
    </section>
  );
}

export default ProductTile;

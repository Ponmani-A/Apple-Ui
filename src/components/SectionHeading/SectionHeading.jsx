function SectionHeading({ dark, light }) {
  return (
    <h2 className="mx-auto max-w-[980px] px-5 pb-6 pt-16 text-2xl font-semibold leading-tight md:text-[28px]">
      <span className="text-[#1d1d1f]">{dark}</span>{" "}
      <span className="text-[#6e6e73]">{light}</span>
    </h2>
  );
}

export default SectionHeading;

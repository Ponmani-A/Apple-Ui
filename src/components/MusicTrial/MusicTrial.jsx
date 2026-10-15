const label = "text-[17px] font-semibold lg:text-[19px]";
const name = "mt-2 text-[28px] font-semibold leading-tight lg:text-[34px]";
const desc =
  "mt-3 max-w-[260px] text-[14px] leading-6 text-[#6e6e73] lg:text-[15px]";
const button =
  "mt-5 inline-flex h-[40px] items-center rounded-full bg-[#fa243c] px-5 text-[14px] font-semibold text-white lg:h-[46px]";

function MusicTrial() {
  return (
    <section className="bg-white px-5 py-[80px] lg:py-[150px]">
      <div className="mx-auto grid max-w-[980px] gap-12 md:grid-cols-3 md:gap-[88px]">
        <div>
          <p className={label}>Buy an Apple device</p>
          <h3 className={name}>6 months free</h3>
          <p className={desc}>
            Get 6 months of Apple Music free with the purchase of eligible audio
            devices.◊
          </p>
          <a href="#" className={button}>
            Check eligibility
          </a>
        </div>

        <div>
          <p className={label}>Free 1-month trial</p>
          <h3 className={name}>Apple Music</h3>
          <p className={desc}>
            New subscribers get 1 month of Apple Music free, then pay $10.99 per
            month.
          </p>
          <a href="#" className={button}>
            Try it free*
          </a>
        </div>

        <div>
          <p className={label}>Free 1-month trial</p>
          <h3 className={name}>Apple One</h3>
          <p className={desc}>
            Bundle Apple Music with up to 5 other great services for 1 low
            monthly price.{" "}
            <a href="#" className="text-[#06c] hover:underline">
              Learn more
            </a>
          </p>
          <a href="#" className={button}>
            Try Apple One free2
          </a>
        </div>
      </div>

      <a
        href="#"
        className="mt-10 block text-center text-[17px] font-semibold text-[#06c] hover:underline"
      >
        Compare plans
      </a>
    </section>
  );
}

export default MusicTrial;

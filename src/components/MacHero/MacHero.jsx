import macbookPro from "../../assets/macbook.jpg";
import macMini from "../../assets/latest-macbook.jpg";

function MacHero() {
  return (
    <div>
      <section className="mb-2.5 flex h-[300px] flex-col items-center justify-center bg-black px-4 text-center text-[#f5f5f7] md:h-[380px]">
        <h1 className="text-[32px] font-semibold leading-[1.1] md:text-[56px]">
          Introducing the new
          <br />
          MacBook Pro and Mac mini.
        </h1>
        <a
          href="#"
          className="mt-6 rounded-full bg-white px-5 py-2 text-sm text-black"
        >
          Watch the announcement
        </a>
      </section>

      <section className="mb-2.5 flex h-[520px] flex-col items-center overflow-hidden bg-black px-4 pt-12 text-center text-[#f5f5f7] md:h-[640px]">
        <p className="text-sm font-semibold text-[#ff6f00]">New</p>
        <h2 className="text-[40px] font-semibold leading-[1.1] md:text-[56px]">
          MacBook Pro
        </h2>
        <p className="mt-2 text-[21px] font-semibold md:text-[28px]">
          Mover. Maker. Boundary breaker.
        </p>
        <p className="mt-4 text-sm">From $1999</p>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-4 py-1.5 text-white"
          >
            Buy
          </a>
          <a href="#" className="text-[#2997ff] hover:underline">
            Learn more
          </a>
        </div>
        <img
          src={macbookPro}
          alt="MacBook Pro"
          className="mt-auto w-[700px] max-w-none shrink-0 md:w-[900px]"
        />
      </section>

      <section className="flex h-[520px] flex-col items-center overflow-hidden bg-black px-4 pt-24 text-center text-[#f5f5f7] md:h-[640px]">
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-4 py-1.5 text-white"
          >
            Buy
          </a>
          <a href="#" className="text-[#2997ff] hover:underline">
            Learn more
          </a>
        </div>
        <img
          src={macMini}
          alt="Mac mini"
          className="mt-auto w-[700px] max-w-none shrink-0 md:w-[1000px]"
        />
      </section>
    </div>
  );
}

export default MacHero;

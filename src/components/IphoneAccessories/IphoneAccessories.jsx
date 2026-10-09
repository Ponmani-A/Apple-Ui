import magsafe from "../../assets/iphone14.jpg";
import airtag from "../../assets/fitnes.jpg";
import magic from "../../assets/airpods.jpg";

function IphoneAccessories() {
  return (
    <section className="mx-auto max-w-[1200px] px-2.5">
      <h2 className="py-16 text-center text-[28px] font-semibold md:text-[40px]">
        Featured accessories
      </h2>

      <div className="flex flex-col items-center overflow-hidden bg-white md:h-[420px] md:flex-row">
        <div className="px-6 py-10 text-center md:w-1/2">
          <h3 className="text-[28px] font-semibold md:text-[32px]">MagSafe</h3>
          <p className="mx-auto mt-3 max-w-[240px] text-xs">
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </p>
          <a
            href="#"
            className="mt-1 block text-xs text-[#06c] hover:underline"
          >
            Shop MagSafe accessories
          </a>
        </div>
        <img
          src={magsafe}
          alt="MagSafe"
          className="h-[260px] w-full object-cover md:h-full md:w-1/2"
        />
      </div>

      <div className="mt-2.5 flex flex-col items-center overflow-hidden bg-white md:h-[420px] md:flex-row">
        <img
          src={airtag}
          alt="AirTag"
          className="h-[260px] w-full object-cover md:h-full md:w-1/2"
        />
        <div className="px-6 py-10 text-center md:w-1/2">
          <h3 className="text-[28px] font-semibold md:text-[32px]">AirTag</h3>
          <p className="mx-auto mt-3 max-w-[260px] text-xs">
            Attach one to your keys. Put another in your backpack. If they’re
            misplaced, just use the Find My app.
          </p>
          <div className="mt-1 flex justify-center gap-5 text-xs text-[#06c]">
            <a href="#" className="hover:underline">
              Buy
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex flex-col items-center overflow-hidden bg-white pt-10 text-center">
        <h3 className="text-[28px] font-semibold leading-tight md:text-[32px]">
          Magic runs
          <br />
          in the family.
        </h3>
        <img
          src={magic}
          alt="AirPods"
          className="mt-6 h-[260px] w-full object-cover md:h-[360px]"
        />
      </div>

      <a
        href="#"
        className="mt-8 block text-center text-xs text-[#06c] hover:underline"
      >
        Shop all iPhone accessories
      </a>

      <div className="mx-auto mt-14 grid max-w-[900px] gap-10 text-center md:grid-cols-3">
        <div className="flex flex-col items-center">
          <span className="text-3xl">📦</span>
          <p className="mt-3 text-xs font-semibold">Fast, free delivery</p>
          <p className="mt-1 max-w-[200px] text-xs">
            Or pick up available items at an Apple Store.
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">💲</span>
          <p className="mt-3 text-xs font-semibold">Pay monthly at 0% APR</p>
          <p className="mt-1 max-w-[220px] text-xs">
            You can pay over time when you choose to check out with Apple Card
            Monthly Installments.**
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">👥</span>
          <p className="mt-3 text-xs font-semibold">Get help buying</p>
          <p className="mt-1 max-w-[200px] text-xs">
            Have a question? Call a Specialist or chat online. Call
            1-800-MY-APPLE.
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default IphoneAccessories;

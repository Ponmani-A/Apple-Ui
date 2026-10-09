import skywalker from "../../assets/tedlesso.jpg";
import appleCard from "../../assets/phonecard.jpg";
import accessories from "../../assets/store-accessories.png";
import tradeIn from "../../assets/macbook.jpg";
import iconDelivery from "../../assets/diff-delivery.png";
import iconApr from "../../assets/diff-pay.png";
import iconHelp from "../../assets/icon-specialist.jpg";

function MacPromos() {
  return (
    <section className="mx-auto max-w-[1200px] px-4">
      <img
        src={skywalker}
        alt="Skywalker Sound"
        className="h-[260px] w-full object-cover md:h-[500px]"
      />

      <div className="mt-4 flex flex-col items-center overflow-hidden bg-[#f2f2f2] md:h-[380px] md:flex-row">
        <div className="px-6 py-8 text-center md:w-1/2 md:px-16">
          <h3 className="text-[28px] font-semibold leading-tight md:text-[32px]">
            Get 3% Daily Cash back with Apple Card.
          </h3>
          <p className="mt-3 text-xs">
            And pay for your new Mac over 12 months, interest-free when you
            choose to check out with Apple Card Monthly Installments.*
          </p>
          <a
            href="#"
            className="mt-2 block text-xs text-[#06c] hover:underline"
          >
            Learn more
          </a>
        </div>
        <img
          src={appleCard}
          alt="Apple Card"
          className="h-[260px] w-full object-cover md:h-full md:w-1/2"
        />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center overflow-hidden bg-[#f2f2f2] pt-8 text-center md:h-[520px]">
          <p className="text-sm font-semibold">Accessories</p>
          <h3 className="text-[32px] font-semibold leading-tight md:text-[40px]">
            Explore Mac accessories.
          </h3>
          <a
            href="#"
            className="mt-4 rounded-full bg-[#0071e3] px-4 py-1.5 text-sm text-white"
          >
            Shop
          </a>
          <img src={accessories} alt="Accessories" className="mt-auto w-full" />
        </div>
        <div className="flex flex-col items-center overflow-hidden bg-[#f2f2f2] px-6 pt-8 text-center md:h-[520px]">
          <p className="text-sm font-semibold">Apple Trade In</p>
          <h3 className="text-[32px] font-semibold leading-tight md:text-[40px]">
            Get credit toward a new Mac.
          </h3>
          <p className="mt-3 text-xs">
            Just trade in your eligible computer for credit or recycle it for
            free. It’s good for you and the planet.8
          </p>
          <a href="#" className="mt-3 text-xs text-[#06c] hover:underline">
            Find your trade-in value
          </a>
          <img src={tradeIn} alt="Trade in" className="mt-auto w-[80%]" />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[980px] gap-10 text-center md:grid-cols-3">
        <div className="flex flex-col items-center">
          <img src={iconDelivery} alt="" className="h-7 w-auto" />
          <p className="mt-3 text-xs font-semibold">Fast delivery or pickup</p>
          <p className="mt-1 max-w-[220px] text-[15px] leading-snug">
            Enjoy two-hour delivery from an Apple Store, free delivery, or easy
            pickup.
          </p>
          <a href="#" className="mt-1 text-sm text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img src={iconApr} alt="" className="h-7 w-auto" />
          <p className="mt-3 text-xs font-semibold">Pay monthly at 0% APR</p>
          <p className="mt-1 max-w-[240px] text-[15px] leading-snug">
            You can pay over time when you choose to check out with Apple Card
            Monthly Installments.*
          </p>
          <a href="#" className="mt-1 text-sm text-[#06c] hover:underline">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img src={iconHelp} alt="" className="h-7 w-auto" />
          <p className="mt-3 text-xs font-semibold">Get help buying</p>
          <p className="mt-1 max-w-[220px] text-[15px] leading-snug">
            Have a question? Call a Specialist or chat online. Call
            1-800-MY-APPLE.
          </p>
          <a href="#" className="mt-1 text-sm text-[#06c] hover:underline">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

export default MacPromos;

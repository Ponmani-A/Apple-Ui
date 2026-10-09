import tradeIn from "../../assets/phonecard.jpg";
import appleCard from "../../assets/phonecard.jpg";
import whyApple from "../../assets/iphone14.jpg";

function SaveOnIphone() {
  return (
    <section className="mx-auto max-w-[1200px] px-2.5">
      <h2 className="py-16 text-center text-[28px] font-semibold md:text-[40px]">
        Ways to save on iPhone
      </h2>

      <div className="flex flex-col items-center overflow-hidden bg-white pt-10 text-center">
        <h3 className="max-w-[420px] text-[28px] font-semibold leading-tight md:text-[36px]">
          Trade in your current phone for credit toward a new one.
        </h3>
        <p className="mt-3 max-w-[260px] text-xs">
          Get $200–$600 in credit when you trade in iPhone 11 or higher and
          upgrade to iPhone 14 or iPhone 14 Pro. 1
        </p>
        <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
          Learn more
        </a>
        <img
          src={tradeIn}
          alt="Trade in"
          className="mt-6 h-[220px] w-full object-cover md:h-[300px]"
        />
      </div>

      <div className="mt-2.5 grid gap-2.5 md:grid-cols-2">
        <div className="flex flex-col items-center bg-white px-6 pb-10 pt-10 text-center md:h-[620px]">
          <h3 className="text-[28px] font-semibold leading-tight md:text-[32px]">
            Save up to $800 with select carrier deals at Apple.8
          </h3>
          <p className="mt-3 max-w-[300px] text-xs">
            Get the carrier deals you love and save on a new iPhone when you
            trade in and purchase right here at Apple.
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Find your deal
          </a>

          <div className="mt-12 grid w-full max-w-[320px] grid-cols-2 gap-y-8">
            <div>
              <p className="text-xl font-bold text-[#009fdb]">AT&amp;T</p>
              <p className="mt-2 text-[10px]">
                Get up to $800
                <br />
                credit after trade-in
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#e20074]">T-Mobile</p>
              <p className="mt-2 text-[10px]">
                Get up to $400
                <br />
                credit after trade-in
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-xl font-bold">
                verizon<span className="text-[#cd040b]">✓</span>
              </p>
              <p className="mt-2 text-[10px]">
                Get up to $800
                <br />
                credit after trade-in
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center overflow-hidden bg-white pt-10 text-center md:h-[620px]">
          <h3 className="px-6 text-[28px] font-semibold leading-tight md:text-[32px]">
            Get 3% Daily Cash back with Apple Card.
          </h3>
          <p className="mt-3 max-w-[300px] px-6 text-xs">
            And pay for your new iPhone over 24 months, interest-free when you
            choose to check out with Apple Card Monthly Installments.**
          </p>
          <a href="#" className="mt-1 text-xs text-[#06c] hover:underline">
            Learn more
          </a>
          <img
            src={appleCard}
            alt="Apple Card"
            className="mt-auto h-[300px] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-2.5 flex flex-col items-center overflow-hidden bg-white md:h-[440px] md:flex-row">
        <img
          src={whyApple}
          alt=""
          className="h-[260px] w-full object-cover md:h-full md:w-1/2"
        />
        <div className="px-6 py-10 text-center md:w-1/2">
          <h3 className="text-[28px] font-semibold leading-tight md:text-[32px]">
            Why Apple is the best place to buy iPhone.
          </h3>
          <p className="mx-auto mt-3 max-w-[320px] text-xs">
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </p>
          <a
            href="#"
            className="mt-1 block text-xs text-[#06c] hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default SaveOnIphone;

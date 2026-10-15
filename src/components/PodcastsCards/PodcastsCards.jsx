import discovery from "../../assets/fitnes.jpg";
import subsPhone from "../../assets/phonecard.jpg";
import homepod from "../../assets/homepad.jpg";

function PodcastsCards() {
  return (
    <section className="mx-auto mt-[100px] max-w-[1010px] space-y-[31px] px-4 lg:mt-[138px]">
      <div className="relative overflow-hidden rounded-[18px] bg-white lg:h-[592px]">
        <div className="px-8 pb-6 pt-12 lg:absolute lg:left-[84px] lg:top-1/2 lg:-translate-y-1/2 lg:p-0">
          <h2 className="text-[28px] font-semibold leading-[1.15] sm:text-[36px] lg:text-[48px] lg:leading-[52px]">
            Personalized
            <br />
            <span className="text-[#aa45e1]">discovery.</span>
          </h2>

          <p className="mt-4 max-w-[281px] text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
            With personalized recommendations based on what you already listen
            to, you’ll come across more shows in sync with your tastes than ever
            before.
          </p>
        </div>

        <img
          src={discovery}
          alt="You Might Like"
          className="ml-auto h-[221px] w-[320px] object-cover sm:h-[290px] sm:w-[420px] lg:absolute lg:right-0 lg:top-[122px] lg:h-[347px] lg:w-[502px]"
        />
      </div>

      <div className="relative flex flex-col-reverse overflow-hidden rounded-[18px] bg-white lg:block lg:h-[592px]">
        <img
          src={subsPhone}
          alt="Luminary subscriptions"
          className="mx-auto h-[371px] w-[300px] rounded-t-[40px] object-cover object-top lg:absolute lg:bottom-0 lg:left-[86px] lg:mx-0 lg:h-[482px] lg:w-[390px]"
        />

        <div className="px-8 pb-6 pt-12 lg:absolute lg:left-[538px] lg:top-1/2 lg:w-[420px] lg:-translate-y-1/2 lg:p-0">
          <h2 className="text-[28px] font-semibold leading-[1.15] sm:text-[36px] lg:text-[48px] lg:leading-[52px]">
            Dive deeper with
            <br />
            <span className="text-[#aa45e1]">subscriptions.</span>
          </h2>

          <p className="mt-4 text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
            Beyond hearing millions of shows, you can also support many of your
            favorite podcasters with subscriptions.1 Bonus episodes, ad-free
            listening, early access to new shows, and easy access to the
            archives are a few examples of the premium content subscriptions can
            unlock.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center overflow-hidden rounded-[18px] bg-white px-6 pt-12 text-center lg:h-[477px] lg:pt-[73px]">
        <h2 className="text-[28px] font-semibold leading-[1.15] sm:text-[36px] lg:text-[48px] lg:leading-[52px]">
          <span className="text-[#aa45e1]">Hey Siri,</span> play
          <br />
          my podcasts.
        </h2>

        <p className="mt-4 max-w-[560px] text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
          Go ahead, put your feet up — Siri can access everything on Apple
          Podcasts, so just ask your favorite personal assistant to put on
          whatever you want to hear.
        </p>

        <img
          src={homepod}
          alt="HomePod"
          className="mt-10 h-[120px] w-full max-w-[559px] object-cover object-top lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[162px] lg:-translate-x-1/2"
        />
      </div>
    </section>
  );
}

export default PodcastsCards;

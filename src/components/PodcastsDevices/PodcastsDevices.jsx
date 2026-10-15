import iphone from "../../assets/iphone14.jpg";
import carplay from "../../assets/card.png";
import homepod from "../../assets/homepad.jpg";
import mac from "../../assets/macbook.jpg";
import ipad from "../../assets/ipad.jpg";
import watch from "../../assets/watch.jpg";
import appleTv from "../../assets/tedlesso.jpg";

const item = "flex flex-col items-center gap-4";
const label = "text-[17px] font-semibold lg:text-[21px]";

function PodcastsDevices() {
  return (
    <section className="mt-[100px] px-5 text-center lg:mt-[163px]">
      <h2 className="text-[34px] font-semibold leading-[1.15] sm:text-[48px] lg:text-[64px] lg:leading-[73px]">
        Stories that go <span className="text-[#aa45e1]">everywhere.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
        All your Apple devices come ready to play every podcast on the app — so
        whether you’re driving or jogging or cooking, you can keep the
        conversation going. You can even download shows to your Apple Podcasts
        library and listen offline.
      </p>

      <div className="mx-auto mt-[60px] grid max-w-[1010px] grid-cols-2 gap-y-12 sm:grid-cols-3 lg:mt-[114px] lg:grid-cols-5">
        <div className={item}>
          <img
            src={iphone}
            alt=""
            className="h-[89px] w-[45px] object-contain"
          />
          <span className={label}>iPhone</span>
        </div>
        <div className={item}>
          <img
            src={carplay}
            alt=""
            className="h-[89px] w-[89px] object-contain"
          />
          <span className={label}>CarPlay</span>
        </div>
        <div className={item}>
          <img
            src={homepod}
            alt=""
            className="h-[89px] w-[89px] object-contain"
          />
          <span className={label}>HomePod</span>
        </div>
        <div className={item}>
          <img src={mac} alt="" className="h-[89px] w-[120px] object-contain" />
          <span className={label}>Mac</span>
        </div>
        <div className={item}>
          <img src={ipad} alt="" className="h-[89px] w-[63px] object-contain" />
          <span className={label}>iPad</span>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-16 lg:mt-[100px] lg:gap-[130px]">
        <div className={item}>
          <img
            src={watch}
            alt=""
            className="h-[81px] w-[71px] object-contain"
          />
          <span className={label}>Apple Watch</span>
        </div>
        <div className={item}>
          <img
            src={appleTv}
            alt=""
            className="h-[81px] w-[90px] object-contain"
          />
          <span className={label}>Apple TV</span>
        </div>
      </div>
    </section>
  );
}

export default PodcastsDevices;

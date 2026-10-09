import setup from "../../assets/airpods-card-setup.jpg";
import spatial from "../../assets/airpods-card-spatial.jpg";
import sharing from "../../assets/airpods-card-sharing.jpg";
import switching from "../../assets/airpods-card-switching.jpg";
import siri from "../../assets/airpods-card-siri.jpg";
import accessibility from "../../assets/airpods-card-accessibility.jpg";

const cards = [
  { title: "One-tap setup", image: setup },
  { title: "Personalized Spatial Audio", image: spatial },
  { title: "Audio Sharing", image: sharing },
  { title: "Automatic switching", image: switching },
  { title: "Siri", image: siri },
  { title: "Accessibility", image: accessibility },
];

function MagicalConnection() {
  return (
    <section className="mx-auto max-w-[1315px] px-4 pt-24 lg:pt-[140px]">
      <h2 className="text-center text-[34px] font-semibold leading-[1.14] sm:text-[44px] lg:text-[56px]">
        A magical connection
        <br />
        to your devices.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-3 lg:gap-x-[84px] lg:gap-y-[30px]">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative h-[420px] overflow-hidden rounded-[28px] bg-white lg:h-[484px]"
          >
            <img
              src={card.image}
              alt=""
              className="h-[340px] w-full object-cover object-top lg:h-[400px]"
            />
            <h3 className="absolute bottom-6 left-6 text-[20px] font-semibold lg:text-[24px]">
              {card.title}
            </h3>
            <button
              className="absolute bottom-6 right-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1d1d1f] text-xl leading-none text-white"
              aria-label={`More about ${card.title}`}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MagicalConnection;

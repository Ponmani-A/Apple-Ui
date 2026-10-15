import appIcon from "../../assets/podcasts-app-icon.png";

function PodcastsWorking() {
  return (
    <section className="mt-[100px] px-5 text-center lg:mt-[181px]">
      <img
        src={appIcon}
        alt="Apple Podcasts"
        className="mx-auto h-[79px] w-[79px] rounded-[18px] bg-[#aa45e1] object-contain p-4"
      />
      <h2 className="mt-4 text-[28px] font-semibold leading-[1.15] sm:text-[36px] lg:text-[44px]">
        Working with Apple Podcasts.
      </h2>
      <p className="mx-auto mt-3 max-w-[560px] text-[17px] leading-[1.45] lg:text-[19px] lg:leading-6">
        Stay up to date on the latest news, features, and best practices that
        help you create your own podcast.
      </p>
      <a
        href="#"
        className="mt-1 block text-[17px] text-[#06c] hover:underline lg:text-[19px]"
      >
        Learn more
      </a>
    </section>
  );
}

export default PodcastsWorking;

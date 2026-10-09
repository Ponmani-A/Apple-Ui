import atWork from "../../assets/airpods.jpg";
import education from "../../assets/help-specialist.jpg";

function AppleAtWork() {
  return (
    <section className="mx-auto max-w-[1200px] space-y-4 px-4 pt-4">
      <div className="relative h-[360px] overflow-hidden md:h-[480px]">
        <img
          src={atWork}
          alt="Apple at Work"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h3 className="text-[32px] font-semibold md:text-[48px]">
            Apple at Work
          </h3>
          <p className="mt-2 max-w-[420px] text-xs">
            Get the power to take your business to the next level.
          </p>
          <a href="#" className="mt-1 text-xs hover:underline">
            Learn about Apple at Work
          </a>
          <a href="#" className="mt-1 text-xs hover:underline">
            Learn more about Mac for business
          </a>
        </div>
      </div>

      <div className="relative h-[360px] overflow-hidden md:h-[480px]">
        <img
          src={education}
          alt="Apple and Education"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h3 className="text-[32px] font-semibold md:text-[48px]">
            Apple and Education
          </h3>
          <a href="#" className="mt-2 text-xs hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default AppleAtWork;

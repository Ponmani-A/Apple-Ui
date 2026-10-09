import specialistIcon from "../../assets/icon-specialist.jpg";
import storeIcon from "../../assets/icon-store.png";

function StoreHeader() {
  return (
    <header className="mx-auto flex max-w-[980px] flex-col gap-6 px-5 pb-10 pt-12 md:flex-row md:items-start md:justify-between md:pt-16">
      <h1 className="max-w-[560px] text-[32px] font-semibold leading-[1.1] md:text-[48px]">
        Store. The best way to buy the products you love.
      </h1>

      <div className="flex flex-col gap-4 text-xs">
        <div className="flex items-center gap-3">
          <img src={specialistIcon} alt="" className="h-8 w-auto" />
          <div>
            <p className="font-semibold">Need shopping help?</p>
            <a href="#" className="text-[#06c] hover:underline">
              Ask a Specialist
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={storeIcon} alt="" className="h-8 w-auto" />
          <div>
            <p className="font-semibold">Visit an Apple Store</p>
            <a href="#" className="text-[#06c] hover:underline">
              Find one near you
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;

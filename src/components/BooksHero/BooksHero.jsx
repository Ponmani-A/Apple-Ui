import appIcon from "../../assets/books-app-icon.png";
import devices from "../../assets/books-hero-devices.jpg";

function BooksHero() {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-[#f2f2f2] px-5 pt-[60px] text-center lg:pt-[88px]">
      <img src={appIcon} alt="Apple Books" className="h-[83px] w-[83px]" />
      <p className="mt-3 text-[17px] font-semibold lg:text-[21px]">
        Apple Books
      </p>

      <h1 className="mt-[28px] text-[44px] font-semibold leading-[1.15] sm:text-[56px] lg:text-[72px] lg:leading-[83px]">
        Read, listen, discover.
        <br />
        All in one place.
      </h1>

      <p className="mt-[40px] max-w-[840px] text-[17px] leading-[1.55] lg:text-[20px] lg:leading-[31px]">
        Apple Books is the single destination for all the books and audiobooks
        you’ll love next. Browse the Book Store and Audiobook Store to find the
        perfect book to read or listen to. Track what you’ve read and want to
        read, and set your own Reading Goals — all in one app and across all
        your Apple devices.
      </p>

      <img
        src={devices}
        alt="Apple Books on iPad and iPhone"
        className="mt-[100px] w-full max-w-[763px]"
      />
    </section>
  );
}

export default BooksHero;

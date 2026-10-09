import appIcon from "../../assets/books-app-icon.png";

function BooksPublish() {
  return (
    <section className="bg-white px-5 py-[100px] text-center lg:pt-[137px] lg:pb-[150px]">
      <img
        src={appIcon}
        alt="Apple Books"
        className="mx-auto h-[83px] w-[83px]"
      />
      <h2 className="mt-3 text-[24px] font-semibold lg:text-[28px]">
        Publish to Apple Books.
      </h2>
      <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-[1.55] lg:text-[19px] lg:leading-[29px]">
        Stories are important. Apple Books for Authors helps you tell yours.
        Apple Books for Authors guides you through every step of your journey as
        an author, from structuring your story to packaging your digital book
        and selling it on our store. Even established authors will find valuable
        resources on how to grow sales and track performance.
      </p>
      <a
        href="#"
        className="mt-2 block text-[17px] text-[#06c] hover:underline"
      >
        Learn more
      </a>
    </section>
  );
}

export default BooksPublish;

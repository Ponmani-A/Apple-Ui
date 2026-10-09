import readingNow from "../../assets/books-phone-reading-now.jpg";
import library from "../../assets/books-phone-library.jpg";
import bookStore from "../../assets/books-phone-book-store.jpg";
import audiobooks from "../../assets/books-phone-audiobooks.jpg";
import search from "../../assets/books-phone-search.jpg";

const features = [
  {
    title: ["Reading Now.", "Your digital nightstand."],
    text: "The Reading Now tab makes it easy to get to the right page in an instant, whether you’re immersed in a single story or bouncing between books. It’s also where you’ll find personalized recommendations based on what you’ve been reading.",
    image: readingNow,
  },
  {
    title: ["Your library,", "your way."],
    text: "Organize your library any way you like. With collections, every one of your books is right where you want it. Create your own collections and get to them easily at any time. You can also revisit an old favorite you’ve already read in the Finished collection.",
    image: library,
  },
  {
    title: ["So many books,", "so much in store."],
    text: "Swipe from book to book to see which book covers, descriptions, and reviews catch your eye, then add the books you’re interested in to your Want to Read list. Choose from today’s bestsellers, check out lists curated by Apple Books editors, or get recommendations based on what you’ve been listening to.",
    image: bookStore,
  },
  {
    title: ["Listen while you work.", "Or play. Or drive."],
    text: "With audiobooks available on CarPlay, Apple Watch, and more, it’s easy to transport yourself to another world during your commute or learn something new on a run.",
    image: audiobooks,
  },
  {
    title: ["Search the books", "you own. Browse", "millions more."],
    text: "Now you can find just the book you’re looking for easier and faster than ever. Search through the Book Store and your personal library at the same time. You can return to your recent searches or tap a search suggestion to discover something new.",
    image: search,
  },
];

function BooksFeatures() {
  return (
    <section className="bg-white pt-10">
      {features.map((f, i) => (
        <div
          key={i}
          className="mx-auto grid max-w-[980px] items-center gap-8 px-5 py-12 md:grid-cols-2 md:gap-0 lg:py-[71px]"
        >
          <div className="max-w-[474px]">
            <h2 className="text-[28px] font-semibold leading-[1.25] sm:text-[34px] lg:text-[40px] lg:leading-[51px]">
              {f.title.map((line, k) => (
                <span key={k} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.55] lg:text-[19px] lg:leading-[29px]">
              {f.text}
            </p>
          </div>

          <div className="flex justify-center md:justify-start md:pl-[78px]">
            <img src={f.image} alt="" className="w-[300px] lg:w-[387px]" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default BooksFeatures;

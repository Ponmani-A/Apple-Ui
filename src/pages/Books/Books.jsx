import Navbar from "../../components/Navbar/Navbar";
import BooksHero from "../../components/BooksHero/BooksHero";
import BooksFeatures from "../../components/BooksFeatures/BooksFeatures";
import BooksGoals from "../../components/BooksGoals/BooksGoals";
import BooksPublish from "../../components/BooksPublish/BooksPublish";
import Footer from "../../components/Footer/Footer";

function Books() {
  return (
    <>
      <Navbar />

      {/* Local nav: Apple Books title */}
      <div className="bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Books
          </span>
        </div>
      </div>

      <BooksHero />
      <BooksFeatures />
      <BooksGoals />
      <BooksPublish />
      <Footer />
    </>
  );
}

export default Books;

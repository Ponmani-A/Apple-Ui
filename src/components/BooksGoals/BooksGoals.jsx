import goalsPhones from "../../assets/books-goals-phones.jpg";

function BooksGoals() {
  return (
    <section className="overflow-hidden bg-[#f2f2f2] pt-[100px] lg:pt-[163px]">
      <div className="mx-auto max-w-[980px] px-5">
        <h2 className="text-[28px] font-semibold leading-[1.25] sm:text-[34px] lg:text-[40px]">
          A Reading Goal you can’t put down.
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-[1.55] lg:text-[19px] lg:leading-[29px]">
          Setting a Reading Goal helps make reading a priority by tracking the
          amount of time you’re reading or listening to an audiobook. Build
          strong reading habits and celebrate your achievements — whether that’s
          a daily goal, a new streak record, or how many books you’ve read this
          year.
        </p>
      </div>

      <img
        src={goalsPhones}
        alt="Reading Goals"
        className="mx-auto mt-[60px] w-full max-w-[875px] px-5 lg:mt-[93px] lg:px-0"
      />
    </section>
  );
}

export default BooksGoals;

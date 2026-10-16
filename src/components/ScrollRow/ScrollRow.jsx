function ScrollRow({ children }) {
  return (
    <div className=" mx-auto flex max-w-[1280px] gap-3 overflow-x-auto px-5 pb-2">
      {children}
    </div>
  );
}

export default ScrollRow;

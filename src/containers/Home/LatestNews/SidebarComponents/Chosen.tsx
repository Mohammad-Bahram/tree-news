const Chosen = () => {
  return (
    <div className="w-full h-[340px] overflow-auto scrollbar-thin scrollbar-thumb-[#AC2043]  scrollbar-track-white scrollbar-thumb-rounded-[4px] scrollbar-h-3 pt-[13px] px-3 flex flex-col flex-wrap justify-normal items-start gap-y-[14px] xl:text-[14px] lg:text-[13px] md:text-[13px] max-sm:text-[13px] ">
      <div className="flex flex-row justify-start items-center gap-x-1 relative">
        <span>
          <svg
            className="absolute top-[58%] right-0 translate-y-[-50%]"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#282828" />
          </svg>
        </span>
        <p className="pr-3">روزی که نقطه عطف تاریخ شد</p>
      </div>
    </div>
  );
};
export default Chosen;

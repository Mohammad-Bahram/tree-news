import React from "react";

function Pagination() {
  return (
    <>
      <div className="join w-[356px] max-sm:w-fit mb-[76px] rounded-[10px] bg-[white]  shadow-lg mx-auto block ">
        <div className="join flex justify-between  ">
          <button className="join-item btn bg-white border-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.25L15 1.25C20.43 1.25 22.75 3.57 22.75 9L22.75 15C22.75 20.43 20.43 22.75 15 22.75L9 22.75C3.57 22.75 1.25 20.43 1.25 15L1.25 9C1.25 3.57 3.57 1.25 9 1.25ZM15 21.25C19.61 21.25 21.25 19.61 21.25 15L21.25 9C21.25 4.39 19.61 2.75 15 2.75L9 2.75C4.39 2.75 2.75 4.39 2.75 9L2.75 15C2.75 19.61 4.39 21.25 9 21.25L15 21.25Z"
                fill="#828282"
              />
              <path
                d="M10.7401 7.72C10.9301 7.72 11.1201 7.79 11.2701 7.94L14.8001 11.47C15.0901 11.76 15.0901 12.24 14.8001 12.53L11.2701 16.06C10.9801 16.35 10.5001 16.35 10.2101 16.06C9.92008 15.77 9.92008 15.29 10.2101 15L13.2101 12L10.2101 9C9.92008 8.71 9.92008 8.23 10.2101 7.94C10.3501 7.79 10.5401 7.72 10.7401 7.72Z"
                fill="#828282"
              />
            </svg>
          </button>
          <button className="join-item btn bg-white text-[#828282] text-[14px] border-none">
            ۱
          </button>
          <button className="join-item btn bg-white text-[#828282] text-[14px] border-none">
            ۲
          </button>
          <button className="join-item btn bg-white text-[#828282] text-[14px] border-none">
            ۳
          </button>
          <button className="join-item btn bg-white text-[#828282] text-[14px] border-none">
            ...
          </button>
          <button className="join-item btn bg-white text-[#828282] text-[14px] border-none">
            ۱۲۳
          </button>
          <button className="join-item btn bg-white text-[#828282] border-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="white" />
              <path
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                fill="#828282"
              />
              <path
                d="M13.2599 16.28C13.0699 16.28 12.8799 16.21 12.7299 16.06L9.19992 12.53C8.90992 12.24 8.90992 11.76 9.19992 11.47L12.7299 7.94C13.0199 7.65 13.4999 7.65 13.7899 7.94C14.0799 8.23 14.0799 8.71 13.7899 9L10.7899 12L13.7899 15C14.0799 15.29 14.0799 15.77 13.7899 16.06C13.6499 16.21 13.4599 16.28 13.2599 16.28Z"
                fill="#828282"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;

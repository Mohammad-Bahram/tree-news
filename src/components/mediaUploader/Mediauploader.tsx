"use client";
import React, { useState } from "react";

const MediaUploader: React.FC = () => {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleMediaRemove = () => {
    setMedia(null);
  };

  return (
    <div className="  max-md:max-w-none max-md:w-[55%] shadow-[#00000017] shadow-[0px_0px_10px_rgba(0,0,0,25)] rounded-[5px] relative max-sm:w-full">
      <div className=" rounded-lg pb-[50px]  pt-[6px] pr-[8px] text-center ">
        <div className="flex gap-x-2 mb-[22px]">
          <svg
            width="40"
            height="16"
            viewBox="0 0 40 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 15.1667H30C26.38 15.1667 24.8333 13.62 24.8333 10V6.00004C24.8333 2.38004 26.38 0.833374 30 0.833374H34C37.62 0.833374 39.1667 2.38004 39.1667 6.00004V10C39.1667 13.62 37.62 15.1667 34 15.1667ZM30 1.83337C26.9267 1.83337 25.8333 2.92671 25.8333 6.00004V10C25.8333 13.0734 26.9267 14.1667 30 14.1667H34C37.0733 14.1667 38.1667 13.0734 38.1667 10V6.00004C38.1667 2.92671 37.0733 1.83337 34 1.83337H30Z"
              fill="#2D2D2D"
            />
            <path
              d="M30 7.16667C28.9867 7.16667 28.1667 6.34667 28.1667 5.33333C28.1667 4.32 28.9867 3.5 30 3.5C31.0133 3.5 31.8333 4.32 31.8333 5.33333C31.8333 6.34667 31.0133 7.16667 30 7.16667ZM30 4.5C29.54 4.5 29.1667 4.87333 29.1667 5.33333C29.1667 5.79333 29.54 6.16667 30 6.16667C30.46 6.16667 30.8333 5.79333 30.8333 5.33333C30.8333 4.87333 30.46 4.5 30 4.5Z"
              fill="#2D2D2D"
            />
            <path
              d="M25.78 13.1333C25.62 13.1333 25.46 13.0533 25.3667 12.9133C25.2133 12.6866 25.2733 12.3733 25.5067 12.22L28.7933 10.0133C29.5133 9.52662 30.5067 9.58662 31.16 10.14L31.38 10.3333C31.7133 10.62 32.28 10.62 32.6067 10.3333L35.38 7.95329C36.0867 7.34662 37.2 7.34662 37.9133 7.95329L39 8.88662C39.2067 9.06662 39.2333 9.37996 39.0533 9.59329C38.8733 9.79996 38.56 9.82662 38.3467 9.64662L37.26 8.71329C36.9267 8.42662 36.36 8.42662 36.0267 8.71329L33.2533 11.0933C32.5467 11.7 31.4333 11.7 30.72 11.0933L30.5 10.9C30.1933 10.64 29.6867 10.6133 29.3467 10.8466L26.06 13.0533C25.9733 13.1066 25.8733 13.1333 25.78 13.1333Z"
              fill="#2D2D2D"
            />
            <path
              d="M10 15.1667H6.00001C2.38001 15.1667 0.833344 13.62 0.833344 10V6.00004C0.833344 2.38004 2.38001 0.833374 6.00001 0.833374H10C13.62 0.833374 15.1667 2.38004 15.1667 6.00004V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6.00001 1.83337C2.92668 1.83337 1.83334 2.92671 1.83334 6.00004V10C1.83334 13.0734 2.92668 14.1667 6.00001 14.1667H10C13.0733 14.1667 14.1667 13.0734 14.1667 10V6.00004C14.1667 2.92671 13.0733 1.83337 10 1.83337H6.00001Z"
              fill="#292D32"
            />
            <path
              d="M14.32 5.23999H1.67999C1.40666 5.23999 1.17999 5.01332 1.17999 4.73999C1.17999 4.46666 1.39999 4.23999 1.67999 4.23999H14.32C14.5933 4.23999 14.82 4.46666 14.82 4.73999C14.82 5.01332 14.6 5.23999 14.32 5.23999Z"
              fill="#292D32"
            />
            <path
              d="M5.67999 5.14662C5.40666 5.14662 5.17999 4.91995 5.17999 4.64662V1.40662C5.17999 1.13328 5.40666 0.906616 5.67999 0.906616C5.95333 0.906616 6.17999 1.13328 6.17999 1.40662V4.64662C6.17999 4.91995 5.95333 5.14662 5.67999 5.14662Z"
              fill="#292D32"
            />
            <path
              d="M10.32 4.84662C10.0467 4.84662 9.82001 4.61995 9.82001 4.34662V1.40662C9.82001 1.13328 10.0467 0.906616 10.32 0.906616C10.5933 0.906616 10.82 1.13328 10.82 1.40662V4.34662C10.82 4.62662 10.6 4.84662 10.32 4.84662Z"
              fill="#292D32"
            />
            <path
              d="M7.39333 12.08C7.15333 12.08 6.92667 12.02 6.72 11.9066C6.26667 11.64 6 11.1066 6 10.4333V8.8333C6 8.15996 6.26667 7.61996 6.72667 7.3533C7.18667 7.08663 7.78667 7.12663 8.36667 7.46663L9.75333 8.26663C10.3333 8.59996 10.6733 9.09996 10.6733 9.6333C10.6733 10.1666 10.3333 10.6666 9.74667 11L8.36 11.8C8.04 11.9866 7.70667 12.08 7.39333 12.08ZM7.4 8.17996C7.33333 8.17996 7.27333 8.1933 7.22667 8.21996C7.08667 8.29996 7 8.52663 7 8.8333V10.4333C7 10.7333 7.08667 10.96 7.22667 11.0466C7.36667 11.1266 7.60667 11.0866 7.86667 10.9333L9.25333 10.1333C9.51333 9.97996 9.67333 9.7933 9.67333 9.6333C9.67333 9.4733 9.52 9.28663 9.25333 9.1333L7.86667 8.3333C7.69333 8.2333 7.52667 8.17996 7.4 8.17996Z"
              fill="#292D32"
            />
          </svg>
          <span className="text-[12px] text-[#333333]">JPEG - MP4</span>
        </div>
        {media ? (
          <div className="">
            <p className="text-gray-700 mb-4">{media.name}</p>
            <button
              onClick={handleMediaRemove}
              className="text-[#EB5757] focus:outline-none  absolute bottom-[-30px] left-0 text-[14px] flex items-center gap-x-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15.1667C4.04666 15.1667 0.833328 11.9534 0.833328 8.00004C0.833328 4.04671 4.04666 0.833374 8 0.833374C11.9533 0.833374 15.1667 4.04671 15.1667 8.00004C15.1667 11.9534 11.9533 15.1667 8 15.1667ZM8 1.83337C4.6 1.83337 1.83333 4.60004 1.83333 8.00004C1.83333 11.4 4.6 14.1667 8 14.1667C11.4 14.1667 14.1667 11.4 14.1667 8.00004C14.1667 4.60004 11.4 1.83337 8 1.83337Z"
                  fill="#EB5757"
                />
                <path
                  d="M6.11334 10.3867C5.98667 10.3867 5.86001 10.34 5.76001 10.24C5.56667 10.0467 5.56667 9.72666 5.76001 9.53332L9.53334 5.75999C9.72667 5.56666 10.0467 5.56666 10.24 5.75999C10.4333 5.95332 10.4333 6.27332 10.24 6.46666L6.46667 10.24C6.37334 10.34 6.24001 10.3867 6.11334 10.3867Z"
                  fill="#EB5757"
                />
                <path
                  d="M9.88667 10.3867C9.76001 10.3867 9.63334 10.34 9.53334 10.24L5.76001 6.46666C5.56667 6.27332 5.56667 5.95332 5.76001 5.75999C5.95334 5.56666 6.27334 5.56666 6.46667 5.75999L10.24 9.53332C10.4333 9.72666 10.4333 10.0467 10.24 10.24C10.14 10.34 10.0133 10.3867 9.88667 10.3867Z"
                  fill="#EB5757"
                />
              </svg>
              حذف رسانه{" "}
            </button>
          </div>
        ) : (
          <div className="border border-dashed border-gray-400  p-4 w-[116px] h-[32px] rounded-[5px] flex items-center justify-center mx-auto ">
            <label
              htmlFor="media-upload"
              className="text-[#333333] text-[10px] cursor-pointer "
            >
              افزودن رسانه +
            </label>
            <input
              id="media-upload"
              type="file"
              accept="image/jpeg, image/png, video/mp4"
              className="hidden"
              onChange={handleMediaUpload}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaUploader;

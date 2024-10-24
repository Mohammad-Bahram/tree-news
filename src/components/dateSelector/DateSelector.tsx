"use client";
import React from "react";
import Select from "react-select";
import CustomDropdownIndicator from "./Dropdown";
import { components } from "react-select";

const categories = [
  { value: "all", label: "همه" },
  { value: "category1", label: "دسته 1" },
  { value: "category2", label: "دسته 2" },
  // Add more categories as needed
];

const years = [
  { value: "1403", label: "1403" },
  { value: "1402", label: "1402" },
  // Add more years as needed
];

const months = [
  { value: "farvardin", label: "فروردین" },
  { value: "ordibehesht", label: "اردیبهشت" },
  { value: "khordad", label: "خرداد" },
  { value: "tir", label: "تیر" },
  { value: "mordad", label: "مرداد" },
  { value: "shahrivar", label: "شهریور" },
  { value: "mehr", label: "مهر" },
  { value: "aban", label: "آبان" },
  { value: "aban", label: "آذر" },
  { value: "dey", label: "دی" },
  { value: "bahman", label: "بهمن" },
  { value: "esfand", label: "اسفند" },

  // Add more months as needed
];

const days = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },

  // Add more days as needed
];

const customStyles = {
  control: (provided: {}) => ({
    ...provided,
    backgroundColor: "#500C0B",
    color: "white",
    borderRadius: "4px",
    border: "solid 1px #FF0C0C",
    width: "120px",
  }),
  menu: (provided: {}) => ({
    ...provided,
    backgroundColor: "#500C0B",
    color: "white",
    width: "120px",
  }),
  singleValue: (provided: {}) => ({
    ...provided,
    color: "white",
  }),
  dropdownIndicator: (provided: {}) => ({
    ...provided,
    color: "white",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided:any, state:any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#FF0C0C" : "#500C0B",
    color: "white",
    transition: "150ms",
  }),
};
const DropdownIndicator = (props:any) => {
  return (
    <components.DropdownIndicator {...props}>
      <CustomDropdownIndicator />
    </components.DropdownIndicator>
  );
};

const DateSelector = () => {
  return (
    <div className="w-full h-[120px]  flex flex-row flex-wrap items-center max-sm:flex-col max-sm:h-fit max-sm:gap-y-4  bg-[#500C0B] border-t-[#FF0C0C] bordert-t-[1px] border-solid border border-x-transparent border-b-transparent ">
      <div
        className="lg:w-fit xl:w-[60.3055556%] md:w-[92%] max-sm:flex-col max-sm:justify-normal  h-fit max-md:mx-auto max-lg:text-[14px] max-md:text-[14px] max-sm:text-[12px] max-sm:w-[85%] gap-x-[72px] max-sm:gap-y-5 max-[357px]:w-full md:mr-[6.45833333%] max-md:gap-x-2 "
        style={{
          display: "flex",
          backgroundColor: "#500C0B",
          padding: "10px",
        }}
      >
        <div className="flex flex-row flex-wrap gap-y-5 max-sm:justify-between max-[518px]:justify-end max-[518px]:gap-x-4   justify-start items-center gap-x-2  ">
          <span className="text-[16px] font-bold text-white ml-[4px] max-lg:text-[14px] max-[518px]:ml-auto max-[518px]:w-fit ">
            تاریخ
          </span>
          <Select
            options={days}
            styles={customStyles}
            components={{ DropdownIndicator }}
            defaultValue={days[0]}
          />
          <Select
            options={months}
            styles={customStyles}
            defaultValue={months[0]}
            components={{ DropdownIndicator }}
          />
          <Select 
            options={years}
            styles={customStyles}
            defaultValue={years[0]}
            components={{ DropdownIndicator }}
          />
        </div>

        <div className="flex flex-row items-center justify-normal gap-x-[14px] max-sm:justify-between">
          <span className="text-[16px] font-bold text-white max-lg:text-[14px]">
            دسته ها
          </span>
          <Select
            className=""
            options={categories}
            styles={customStyles}
            defaultValue={categories[0]}
            components={{ DropdownIndicator }}
          />
        </div>
      </div>
      <button className="w-[120px] h-[40px] rounded-[5px] bg-[#FF0C0C] text-white text-[16px]  max-[357px]:w-full  max-sm:w-[85%] max-sm:mr-[0] max-lg:mr-[7.2%] sm:ml-4 ">
        اخبار امروز
      </button>
    </div>
  );
};

export default DateSelector;

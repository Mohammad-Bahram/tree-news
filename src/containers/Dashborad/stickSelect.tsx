import CustomDropdownIndicator from "@/src/components/dateSelector/Dropdown";
import React from "react";
import Select, { StylesConfig } from "react-select";
import { components } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "none", label: "بدون برچسب" },
  { value: "for main 1", label: "ویژه اصلی 1" },
  { value: "for main 2", label: "ویژه اصلی 2" },
  { value: "chosen", label: "برگزیده اصلی" },
  { value: "for category 1 ", label: "ویژه دسته 1" },
  { value: "for category 1 ", label: "ویژه دسته 2" },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    direction: "rtl",
    fontFamily: "inherit",
    fontSize: "14px",
    height: "48px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
  dropdownIndicator: (provided: {}) => ({
    ...provided,
    color: "#333",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#333",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "0",
    zIndex: 9999,
  }),
  indicatorSeparator: () => ({
    display: "none", // حذف separator
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <CustomDropdownIndicator />
    </components.DropdownIndicator>
  );
};

const StickSelect: React.FC = () => {
  return (
    <Select
      options={options}
      className="w-full md:max-w-[148px]   mb-4 h-[48px]  "
      placeholder=" بدون برچسب "
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default StickSelect;

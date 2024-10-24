import CustomDropdownIndicator from "@/src/components/dateSelector/Dropdown";
import React from "react";
import Select, { StylesConfig } from "react-select";
import { components } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "sports", label: "ورزش" },
  { value: "economy", label: "اقتصاد" },
  { value: "Iran", label: "ایران" },
  { value: "World", label: "جهان" },
  { value: "politics", label: "سیاست" },
  { value: "culture", label: "فرهنگ" },
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
  indicatorSeparator: () => ({
    display: "none", // حذف separator
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

const CategorySelect: React.FC = () => {
  return (
    <Select
      options={options}
      className="w-[50%] max-md:w-full mb-4 h-[48px] "
      placeholder=" انتخاب دسته"
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default CategorySelect;

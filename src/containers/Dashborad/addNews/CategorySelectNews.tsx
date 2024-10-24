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
    display: "none",
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

const CategorySelectNews: React.FC = () => {
  return (
    <Select
      options={options}
      className=" w-full md:w-[135px] h-[48px] mb-3 "
      placeholder="دسته بندی"
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default CategorySelectNews;

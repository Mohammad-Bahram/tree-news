import CustomDropdownIndicator from "@/src/components/dateSelector/Dropdown";
import React from "react";
import Select, { StylesConfig } from "react-select";
import { components } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "adPosition", label: "بنر صفحه اصلی 1	" },
  { value: "adPosition", label: "بنر صفحه اصلی 2	" },
  { value: "adPosition", label: "بنر صفحه دسته بندی	" },
  { value: "adPosition", label: "بنر سکشن 1	" },
  { value: "adPosition", label: "بنر سکشن 2	" },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    direction: "rtl",
    fontFamily: "inherit",
    fontSize: "14px",
    height: "50px",
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

const AdSelect: React.FC = () => {
  return (
    <Select
      options={options}
      className="w-[215px] max-lg:mx-auto max-md:w-full  mb-4"
      placeholder="انتخاب جایگاه"
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default AdSelect;

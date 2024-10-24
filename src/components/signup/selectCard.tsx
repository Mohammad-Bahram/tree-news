import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "admin", label: "ادمین" },
  { value: "user", label: "کاربر" },
  { value: "guest", label: "مهمان" },
];

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "5px",
    borderColor: state.isFocused ? "#A855F7" : "#e2e8f0",
    boxShadow: state.isFocused ? "0 0 0 1px #A855F7" : "none",
    "&:hover": {
      borderColor: "#A855F7",
    },
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#A855F7",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#A855F7" : "white",
    color: state.isFocused ? "white" : "black",
    "&:hover": {
      backgroundColor: "#A855F7",
      color: "white",
    },
  }),
};

const RoleSelect: React.FC = () => {
  const [sekectOption, setSelectOption] = useState<Option | null>(null);
  return (
    <Select
      onChange={(e: Option | null) => {
        setSelectOption(e);
        console.log(e);
      }}
      className="w-full h-[40px]  "
      options={options}
      styles={customStyles}
      placeholder="انتخاب نقش"
      isRtl={true}
    />
  );
};

export default RoleSelect;

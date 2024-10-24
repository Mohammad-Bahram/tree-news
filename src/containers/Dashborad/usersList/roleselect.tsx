import CustomDropdownIndicator from "@/src/components/dateSelector/Dropdown";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { components } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "Admin", label: "مدیر" },
  { value: "Reporter", label: "خبرنگار" },
  { value: "Photographer", label: "عکاس" },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    direction: "rtl",
    fontFamily: "inherit",
    fontSize: "14px",
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

const RoleSelect: React.FC<{
  getRole: (value: string) => void;
}> = ({ getRole }) => {
  const [selectedRole, setSelectedRole] = useState<OptionType | null>(null); // اضافه کردن state برای ذخیره انتخاب

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedRole(selectedOption); // ذخیره انتخاب کاربر
    console.log("انتخاب شده:", selectedOption); // می‌توانید داده‌ها را در اینجا لاگ کنید
    if (selectedRole?.value) {
      getRole(selectedRole.value);
    }
  };
  return (
    <Select
      options={options}
      className="w-[30%] max-md:w-full mb-4"
      placeholder="انتخاب نقش"
      styles={customStyles}
      components={{ DropdownIndicator }}
      onChange={handleChange}
    />
  );
};

export default RoleSelect;

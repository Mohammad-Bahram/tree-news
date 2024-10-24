import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddUser from "./AddUser";
const schema = z.object({
  searchBar: z.string().min(3, "حداقل سه حرف باید بنویسید"),
});
type FormField = z.infer<typeof schema>;
const UsersSearch: React.FC<{
  userData?: [];
  getUserData?: (value: []) => void;
  handleSearchState?: () => void;
}> = ({ userData, getUserData, handleSearchState }) => {
  const {
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormField>({
    resolver: zodResolver(schema),
    defaultValues: {
      searchBar: "",
    },
  });
  const onSubmit = () => {
    const data = getValues();
    console.log(data, "data");
    // console.log(userData);
    // const filterSearchData: any = userData.filter(
    //   (element: { username: string }) => element.username === data.searchBar
    // );
    // console.log(filterSearchData, "searchResult");
    // getUserData(filterSearchData);
    // handleSearchState();
  };
  return (
    <div className="flex max-sm:flex-col max-sm:gap-y-4 max-sm:w-full flex-row gap-x-3">
      <div className="xl:w-[313px] max-sm:w-full  lg:w-[290px]   h-[48px] max-sm:h-[40px] relative ">
        <input
          onKeyDown={(e) => {
            console.log(e.key);

            if (e.key === "Enter") {
              e.preventDefault();
              console.log("okay");
              onSubmit();
              reset();
            }
          }}
          {...register("searchBar")}
          type="text"
          className="w-full h-full bg-[#F6F6F6] rounded-[10px] outline-none text-[#BDBDBD] text-[16px] pr-[49px] max-sm:text-[14px] "
          placeholder="جستجو"
        />
        <svg
          className="absolute max-sm:w-[19px] top-[50%] translate-y-[-50%] right-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
            fill="#BDBDBD"
          />
          <path
            d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
            fill="#BDBDBD"
          />
        </svg>
      </div>
    </div>
  );
};

export default UsersSearch;

import React, { useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import ListBoxComp from "./ListBoxComp";

export default function Navbar() {
  const [listBoxClose, setListBoxClose] = useState(false);

  const handleListBox = () => {
    if (listBoxClose) {
      setListBoxClose(false);
    } else {
      setListBoxClose(true);
    }
  };

  return (
    <div className="flex justify-between flex-col sm:flex-row gap-4">
      <div className="flex items-center justify-center gap-x-2">
        <TbTriangleFilled className="w-6 h-6 text-red-500" />
        <h1 className="font-extrabold text-lg text-rose-500">windbnb</h1>
      </div>
      <div
        className="flex justify-center items-center rounded-xl border px-4 text-sm cursor-pointer w-fit mx-auto 
      sm:mx-0"
        onClick={handleListBox}
      >
        <div className="border-r py-5 pr-3">Bali, Indonesia</div>
        <div className="border-r py-5 px-3 text-gray-200">Add Guest</div>
        <GoSearch className="w-8 h-8 pl-3 text-rose-500" />
      </div>
      <div
        className={` left-0 top-0 min-h-[80vh] bg-white w-full fixed transition-all  ${
          !listBoxClose ? "-translate-y-full" : "translate-y-none"
        }`}
      >
        <div className="flex justify-between p-4">
          <span>Edit Your Search</span>
          <IoClose className="h-6 w-6" onClick={handleListBox} />
        </div>
        <div className="flex">
          <ListBoxComp />
        </div>
        <button
          className="absolute flex items-center gap-x-2 bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 rounded-lg text-white bg-red-500 "
          onClick={handleListBox}
        >
          <GoSearch />
          Search
        </button>
      </div>
    </div>
  );
}

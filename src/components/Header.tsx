import React, { useState } from "react";
import Header_Logo from "../image/logo.svg";
import Header_Hamber_Menu from "../image/hambergur-menu.svg";
import clsx from "clsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#c4c7d2]">
        {/* logo img */}
        <div>
          <img src={Header_Logo} alt="" />
        </div>
        {/* hamber menu */}
        <div
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
          className=""
        >
          <img src={Header_Hamber_Menu} alt="" />
        </div>
      </div>
      {/* hamber menu open / close */}
      <div
        className={clsx("fixed p-4 flex flex-col gap-4 w-full transition-all", {
          "-right-full": !open,
          "right-0": open,
        })}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-gray-600 capitalize">home</li>
          <li className="text-gray-600 capitalize">cars</li>
          <li className="text-gray-600 capitalize">my booking</li>
          <li className="text-gray-600 capitalize">list cars</li>
        </ul>
        <button className="bg-[#2563eb] text-white px-8 py-2 cursor-pointer rounded-lg self-start">
          login
        </button>
      </div>
    </header>
  );
};

export default Header;

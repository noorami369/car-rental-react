import React from "react";
import mainCarPng from "../image/main_car.png";

const LuxuryCarsSearch = () => {
  return (
    <div className="flex flex-col gap-10 px-12 py-5">
      <div>
        <h1 className="flex justify-center text-[36px] text-nowrap font-bold">
          Luxury cars on Rent
        </h1>
      </div>
      <div className="bg-white rounded-lg p-6 flex flex-col gap-5 items-start shadow-md">
        <div className="flex flex-col">
          <select name="pickup-location" id="pickup-location">
            <option value="">Pick-Up Location</option>
            <option value="">New York</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <span>Please select location</span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="pickup-date">Pick-Up Date</label>
          <input type="date" id="pickup-date" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" />
        </div>
        <div>
          <button className="bg-[#2563eb] flex gap-2 items-center px-8 py-3 rounded-full">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.626 10.6259L14.7088 14.7092"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.96293 11.7488C11.6387 10.6116 12.886 7.52063 11.7488 4.84487C10.6116 2.16912 7.52063 0.921849 4.84488 2.05902C2.16913 3.19619 0.921857 6.28717 2.05902 8.96292C3.19619 11.6387 6.28718 12.8859 8.96293 11.7488Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="max-h-74" src={mainCarPng} alt="" />
      </div>
    </div>
  );
};

export default LuxuryCarsSearch;

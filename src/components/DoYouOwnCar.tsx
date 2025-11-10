import React from "react";
import bannerCarImage from "../image/banner_car_image-B9uXTQkB.png";

const DoYouOwnCar = () => {
  return (
    <div className="px-4">
      <div className="bg-linear-to-r from-[#0558fe] to-[#a9cfff] bg-white rounded-2xl pt-10 px-8">
        <div>
          <h2 className="font-medium text-[28px] text-white">
            Do You Own a Luxury Car?
          </h2>
          <p className="text-white">
            Monetize your vehicle effortlessly by listing it on CarRental.
          </p>
          <p className="text-white">
            We take care of insurance, driver verification and secure payments —
            so you can earn passive income, stress-free.
          </p>
          <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer text-[#2563eb]">
            List your car
          </button>
          <img className="pt-10" src={bannerCarImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoYouOwnCar;

import React, { useState } from "react";
import facebook from "../assets/article-preview-component-master/images/icon-facebook.svg";
import twitter from "../assets/article-preview-component-master/images/icon-twitter.svg";
import pinterest from "../assets/article-preview-component-master/images/icon-pinterest.svg";
import michelle from "../assets/article-preview-component-master/images/avatar-michelle.jpg";
import shareBtn from "../assets/article-preview-component-master/images/icon-share.svg";

const RightContainer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <aside className="bg-white py-8 px-6 md:px-12 md:w-[28rem] flex flex-col justify-evenly md:rounded-tr-xl  rounded-br-xl rounded-bl-xl md:rounded-bl-xl-none text-slate-600 z-20">
      <h1 className="text-md md:text-xl font-[700] mb-4">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="text-xs mt-1 md:mt-0 mb-8 md:mb-4 leading-5 pr-4">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="flex flex-row justify-between items-center text-sm">
        <div className="flex flex-row items-center">
          <img
            src={michelle}
            alt="michelle"
            className="rounded-full h-[2.5rem] mr-4 hover:scale-110 duration-300 cursor-pointer"
          />
          <div className="flex flex-col">
            <h1 className="font-bold">Michelle Appleton</h1>
            <h2 className="text-xs text-gray-400">28 Jun 2020</h2>
          </div>
        </div>

        <div
          className="hover:bg-gray-200 duration-300 rounded-full bg-[#eef2fa] py-3 px-3 items-center cursor-pointer"
          onClick={() => toggle(i)}
        >
          <img src={shareBtn} alt="shareBtn" />
          {selected === i && (
            <div className="md:w-[15rem] flex flex-row justify-center items-center absolute bg-slate-600/90 text-slate-400 text-xs py-4 px-[4rem] md:px-9 rounded-xl translate-x-[-6.5rem] translate-y-[-6rem]">
              <span className=" hidden md:block pr-5">S H A R E</span>
              <img src={facebook} alt="fb" className="pr-5" />
              <img src={twitter} alt="twitter" className="pr-5" />
              <img src={pinterest} alt="pinterest" />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

const i = 1; // Index of the share button, adjust as needed

export default RightContainer;

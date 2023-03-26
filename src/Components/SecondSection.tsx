import React from 'react';
import SecondItem from './SecondItem';

const SecondSection = () => {
	return (
    <div className="relative">
      <div id="second-section" className="absolute -top-[170px]" />

      <div className="mt-10 flex flex-row-reverse lg:flex-row pl-5 lg:pl-0  lg:space-x-[200px] justify-center">
        {/* LEFT */}
        <div>
          <img
            src="/gif/second-phone.gif"
            className=" lg:w-auto w-[700px] -scale-x-100 mt-5"
            alt=""
          />
        </div>
        {/* RIGHT */}
        <div className="flex-grow lg:w-1/3 mt-5">
          <div className="text-[#724100] text-2xl lg:text-4xl font-bold">
            Sodda va onson
          </div>
          <div className="text-[#2A2F37] my-7   text-xl lg:text-3xl">
            Javohir Med yordamida siz barcha protseduralaringizni bajarishingiz
            mumkin <span className="font-semibold"> 100% ONLAYN </span>
          </div>
          {/* MENU */}
          <div>
            <div className="flex items-center flex-wrap space-y-5 ">
              <SecondItem contentImage="second1" title="Navbat oling" />
              <SecondItem
                contentImage="second2"
                title="Ruxsatnomalarni oling"
              />
              <SecondItem
                contentImage="second3"
                title="Ishonchnomangizni yuklab oling"
              />
              <SecondItem
                contentImage="second4"
                title="Oilangiz a'zosini qo'shing"
              />
              <SecondItem contentImage="second5" title="Hisobingizni to'lang" />
              <SecondItem
                contentImage="second6"
                title="Consultat bilan maslahatlashing"
              />
            </div>
          </div>
          {/* BUTTON */}
          <button className="mt-10 mb-5  lg:mt-[60px] button-hover bg-[#FFB71B] py-2 px-6 rounded-lg font-semibold text-[#191B1E]">
            BOSHLASH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

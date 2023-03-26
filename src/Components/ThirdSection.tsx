import React from 'react';
import ThirdListItem from './ThirdListItem';

const ThirdSection = () => {
	return (
    <div className="relative ">
      <div id="third-section" className="absolute -top-[150px]" />

      {/* BG */}
      <div className="bg-gradient-to-r from-[#13548D] to-[#0F4F87] absolute w-full md:h-full h-[87%] -z-20 flex bottom-0" />
      <div className="flex flex-col-reverse md:flex-row  justify-around pt-10 md:pt-20">
        {/* LEFT PART */}
        <div className="text-white md:mb-0 mb-5 flex flex-col md:items-start items-center md:mt-10 space-y-2 md:space-y-5">
          <div className="font-bold text-[50px]">Onlayn doctor </div>
          <div className="text-xl md:text-[25px] font-semibold inline">
            <span>Video patformasi</span>
            <span className="block">Hayotingizni soddalashtiramiz</span>
          </div>
          {/* MOBILE LIST */}
          <div className="md:hidden flex flex-col space-y-3 pt-7">
            <ThirdListItem contentText="Retseptlar va buyurtmalar oling" />
            <ThirdListItem contentText="Uzoq navbat kutish yo'q" />
            <ThirdListItem contentText="Uyingizdan chiqmasdan" />
          </div>

          <button className="w-[95%] md:w-[70%]  border-2 border-white transition-all duration-300 hover:bg-[#12528B] hover:text-white !mt-7 md:!mt-[60px] bg-white font-semibold py-2 px-2 rounded-lg text-[#00205C]">
            Tashrif Buyurish
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex  justify-center">
          <img src="/png/third-image-mobile.png" className="hidden md:block h-[350px] w-[450px]" alt=""  />
          <img src="/png/third-image-mobile.png" className="md:hidden" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

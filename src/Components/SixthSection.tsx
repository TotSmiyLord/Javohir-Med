import React from 'react';

const SixthSection = () => {
	return (
    <div id="sixth-section">
      <div className="container px-5 lg:px-20 mx-auto pt-10 lg:pt-20 pb-10 flex flex-col lg:flex-row justify-between">
        {/* LEFT */}
        <div>
          <img src="/gif/med.png" alt="" width={400} />
        </div>
        {/* MIDDLE */}
        <div className="sixth-menu">
          <div className="sixth-title">Contactlar</div>
          <div className="sixth-item">
            <img src="/svg/whatsapp-yellow.svg" alt="" />
            <div className="sixth-item-title">(93) 1221507</div>
          </div>
          <div className="sixth-item">
            <img src="/svg/facebook-yellow.svg" alt="" />
            <div className="sixth-item-title">@javohir_med</div>
          </div>
          <a href="https://www.instagram.com/sherzodov1_ch_07/">
            <div className="sixth-item">
              <img src="/svg/instagram-yellow.svg" alt="" />
              <div className="sixth-item-title">@sherzodov1_ch_07</div>
            </div>
          </a>
        </div>
        {/* RIGHT */}
        <div className="sixth-menu">
          <div className="sixth-title">¿Manzil?</div>
          <div className="sixth-item">
            <img src="/svg/location.svg" alt="" />
            <div className="sixth-item-title">
              Toshkent: Yunusobod 9 mavze, 6 uy
            </div>
          </div>
          <div className="sixth-item">
            <img src="/svg/location.svg" alt="" />
            <div className="sixth-item-title">
              Toshkent: Taxtapul orentir 3 radom roparasi
            </div>
          </div>
          <div className="sixth-item">
            <img src="/svg/location.svg" alt="" />
            <div className="sixth-item-title">
              Toshkent:Sergili 5 mavze, 7 uy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;

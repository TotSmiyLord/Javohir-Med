import React from 'react';
import Layout from './Layout';

const Warning: React.FC<{ setOpen: Function }> = ({ setOpen }) => {
	return (
    <Layout setOpen={setOpen}>
      <div>
        <div className="text-[#FFB71B] text-lg w-[90%] md:text-2xl font-bold lg:mb-5">
          Sog'liqni saqlash rejangizdagi yangi ozgarishlar
        </div>
        <div className="text-[#191B1E] text-sm md:text-base flex flex-col space-y-5 warning-inner">
          <div>
            Superintendency qoidalariga muvofiq Sog'liqni saqlash va Sog'liqni
            saqlash vazirligi <span>Res. N. R. 1293/2022</span>,bu biz
            xarajatlarimizga tuzatish kiritamiz <span>11,34%</span>sifatida
            <span>Mart 2023</span>.
          </div>
          <div>
            Bunday chora sog'liqni saqlash xizmatini qo'llab - quvvatlashga
            imkon beradi xizmat sifatini saqlab qolish, chunki u jamoatchilikka
            tegishli bilim sog'liqni saqlash bilan bog'liq xarajatlarning
            tuzilishi bo'ldi narxlarining sezilarli o'zgarishi ta'sir qiladi
            dori-darmonlar va materiallar va professional to'lovlari. Andes
            Saludda biz bilamizki, bu chora har birining iqtisodiyotiga ta'sir
            qiladi bizni tanlagan oilalar, lekin biz bu yo'l ekanligini
            tushunamiz buyuk bilan a'zolari sog'liqni saqlash uchun keladi
            excellence mumkin.
          </div>
          <div>
            Har doimgidek, biz sizning virtual kanallarimizni sizning
            ixtiyoringizga beramiz yuzaga kelishi mumkin bo'lgan har qanday
            shubhalarda sizga yordam beradigan aloqa.
          </div>
          <span>Hamkorlik Xizmatlarini Boshqarish</span>
        </div>
      </div>
    </Layout>
  );
};

export default Warning;

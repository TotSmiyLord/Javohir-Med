import React from 'react';

const CONTENTS = [
  {
    itemImg: "/svg/slider1.svg",
    title: "REJANGIZNI KIRITING",
    description:
      "Onlayn kotirovka xizmatimiz yordamida ehtiyojlaringizga moslashtirilgan rejani oling.",
  },
  {
    itemImg: "/svg/slider2.svg",
    title: "BIZNING REJALARIMIZNI BILING",
    description:
      "Siz kartalar va har bir rejaning barcha afzalliklari bilan tanishishingiz mumkin.",
  },
  {
    itemImg: "/svg/slider3.svg",
    title: "FOYDALANUVCHI QO'LLANMASI",
    description: "Har bir xizmatimizga oson va sodda tarzda kirish.",
  },
  {
    itemImg: "/svg/slider4.svg",
    title: "BOSHLANG",
    description:
      "¿Rejangiz bilan shartnoma tuzdingizmi? Qachon boshlashni rejalashtirayotganingizni bu erda tekshiring.",
  },
];

const SliderItem: React.FC<{ contentId: number; setOpen?: Function }> = ({
	contentId,
	setOpen,
}) => {
	const item = CONTENTS[contentId];

	return (
		<div
			onClick={() => setOpen && setOpen(true)}
			className=" bg-white h-[250px] lg:mb-2 shadow-lg  z-40 rounded-lg px-3 py-8 text-[#2A2F37]"
		>
			<div className="max-h-full flex flex-col items-center justify-center text-center space-y-2 md:space-y-4">
				<div>
					<img src={item.itemImg} alt="" />
				</div>
				<div className="text-lg md:text-xl font-bold">{item.title}</div>
				<div className="pb-2">{item.description}</div>
			</div>
		</div>
	);
};

export default SliderItem;

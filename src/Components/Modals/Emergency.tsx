import React from 'react';
import Layout from './Layout';

const Emergency: React.FC<{ setOpen: Function }> = ({ setOpen }) => {
	return (
		<Layout setOpen={setOpen}>
			<div className="max-w-[400px]">
				<div className="text-[#E52E2E] text-lg md:text-4xl font-bold mb-1">
					Favhukotda vaytda
				</div>
				<div className="text-[#191B1E] text-sm mb-2 mt-1">
					Bahtsiz hodisalar yuz berganida shu raqamlarga murojat qilishigizni iltimos qilib qolamiz:
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Yongin Xafsizligi</div>
					<div className="emergency-number">101</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Tez yordam</div>
					<div className="emergency-number">102</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Militsa</div>
					<div className="emergency-number">103</div>
				</div>
			</div>
		</Layout>
	);
};

export default Emergency;

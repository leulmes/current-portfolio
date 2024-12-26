import React from "react";

const updateDate = (): number => {
	const date = new Date();
	return date.getFullYear();
};

const Footer = () => {
	return (
		<div className="text-white flex justify-center h-14 #151312 items-center manrope font-kumbh font-light">
			<div className="flex flex-col items-center justify-center ">
				<h1>&copy; {updateDate()} | Built by Leul Mesfin 😁</h1>
			</div>
		</div>
	);
};

export default Footer;

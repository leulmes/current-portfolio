import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const updateDate = (): number => {
	const date = new Date();
	return date.getFullYear();
};

const Footer = () => {
	return (
		<div className="text-white flex justify-center h-14 #151312 items-center manrope">
			<div className="flex flex-row">&copy; {updateDate()} | Leul Mesfin</div>
		</div>
	);
};

export default Footer;

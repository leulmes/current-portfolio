import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faMastodon,
} from "@fortawesome/free-brands-svg-icons";

type NavLinks = {
	name: string;
	href: string;
};

const links: NavLinks[] = [
	{ name: "Home", href: "#first-section" },
	{ name: "Experience", href: "#second-section" },
	{ name: "Projects", href: "#third-section" },
	{ name: "About", href: "#fourth-section" },
];

const Navbar = () => {
	return (
		<div className="sticky top-0 z-50">
			<div className="flex justify-center items-center h-16 px-4 font-kumbh rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 ">
				<div className="flex flex-row gap-8 cursor-pointer text-white">
					{links.map((link, i) => (
						<Link
							href={link.href}
							key={i}
							className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

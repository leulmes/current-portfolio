import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Download } from "lucide-react";
const ProfileCard = () => {
	return (
		<div className="bg-[#151312] border-2 border-zinc-50 h-96 w-80 rounded-lg flex flex-col items-center justify-center gap-4">
			<h1 className="font-kumbh text-3xl font-light text-white">Leul Mesfin</h1>
			<Image
				className="rounded-full border-2 border-zinc-50 "
				src="/brooklynProfile.png"
				width={200}
				height={200}
				alt="Picture of Leul"
			/>
			<div className="flex gap-4">
				<Link
					href={"https://github.com/leulmes"}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-white "
				>
					<FontAwesomeIcon icon={faGithub} className="size-10 cursor-pointer" />
				</Link>
				<Link
					href={"https://www.linkedin.com/in/leul-mesfin/"}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-white"
				>
					<FontAwesomeIcon icon={faLinkedin} className="size-10 cursor-pointer" />
				</Link>

				<Link
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center"
				>
					<button className="cursor-pointer text-base border-2 rounded-3xl border-[#CFC9C9] hover:border-white h-10 px-4 flex items-center gap-2 font-thin text-white">
						Resume
						<Download className="size-5 text-white" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ProfileCard;

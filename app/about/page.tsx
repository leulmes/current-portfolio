import React from "react";
import Navbar from "../components/Navbar/page";
import Image from "next/image";
import Footer from "../components/Footer/page";

const About = () => {
	return (
		<div className="bg-[#333333]">
			<Navbar />
			<div className="h-screen flex items-center justify-center flex-col gap-4 manrope">
				<h1>About Me</h1>
				<Image
					className="rounded-full"
					src="/nyc.jpg"
					width={300}
					height={300}
					alt="Picture of Leul"
				/>
				<div className="flex text-white flex-col text-center ">
                    <h2>My name is Leul Mesfin. In Amharic: ልዑል መስፍን</h2>
                    <h2>Phonetic pronunciation: Lih-uhl</h2>
					<h2>I have a passion for tinkering with things and helping others learn.</h2>
                    <h2>Outside of my professional career, I enjoy long runs and lifting.</h2>
				</div>
			</div>
            <Footer />
		</div>
	);
};

export default About;

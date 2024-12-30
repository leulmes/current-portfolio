
import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Download } from "lucide-react";
import Timeline from "./components/Timeline/page";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
	// const phrases = ["Software Engineer", "Coding Instructor"];

	return (
		<div className="bg-[#151312]">
			<Navbar />

			<div
				id="first-section"
				className="h-screen flex items-center justify-center gap-14"
			>
				<div className="flex flex-col">
					<div className="flex gap-2">
						<h1 className="text-[#CFC9C9] font-kumbh font-normal text-[32px]">
							Selam
						</h1>
						<h1 className="font-normal text-[32px]">👋🏾</h1>
					</div>
					<div className="flex gap-3">
						<h1 className="text-[#CFC9C9] font-kumbh font-bold text-7xl">
							I&apos;m
						</h1>
						{/* <h1 className="text-[#AAA7A7] font-kumbh font-bold text-7xl">
							Leul Mesfin
						</h1> */}
						<h1 className="to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text font-bold text-7xl text-transparent">
							Leul Mesfin
						</h1>
					</div>

					<h1 className="text-white font-kumbh font-bold text-7xl flex flex-col gap-10">
						a Software Engineer
						{/* <span id="cursor" className="text-white animate-blink">
							|
						</span> */}
						<div className="text-[#CFC9C9] font-kumbh font-normal text-xl">
							(Passionate Full-Stack Developer)
						</div>
						<div className="flex flex-row gap-3  text-[#CFC9C9] justify-center">
							<Link
								href={"https://github.com/leulmes"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center hover:text-white "
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="size-10 cursor-pointer"
								/>
							</Link>
							<Link
								href={"https://www.linkedin.com/in/leul-mesfin/"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center hover:text-white cursor-pointer"
							>
								<FontAwesomeIcon icon={faLinkedin} className="size-10" />
							</Link>

							<Link
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center"
							>
								<button className="cursor-pointer text-base border-2 rounded-3xl border-[#CFC9C9] hover:border-white h-10 px-4 flex items-center gap-2 font-thin">
									Resume
									<Download className="size-5" />
								</button>
							</Link>
						</div>
					</h1>
				</div>
				<Image
					className="rounded-3xl"
					src="/nyc.JPG"
					width={300}
					height={300}
					alt="Picture of Leul"
				/>
			</div>

			<div id="second-section">
				<h1 className="text-white font-kumbh font-bold text-7xl flex justify-center mb-10 pt-14">
					Experience
				</h1>
				<Timeline />
			</div>

			<div id="third-section">
				<h1 className="text-white font-kumbh font-bold text-7xl flex justify-center mb-10 pt-14">
					Projects
				</h1>
				<div className="flex flex-col items-center gap-4">
					<ProjectCard
						imageSrc={"/gainz.png"}
						title={"GAINZ"}
						languages={["React Native", "TypeScript", "Python", "AWS", "Clerk"]}
						description={
							"Co-developed a React Native/Expo mobile app for fitness tracking and social networking. Designed a RESTful API on AWS using API Gateway and Lambda functions to manage and process data with DynamoDB. Integrated Clerk for user authentication and built the frontend using TypeScript and Tamagui."
						}
						githubLink={"https://github.com/kushaldevv/gainzApp"}
						demoLink={"https://www.youtube.com/watch?v=iAC8FYCfB2A"}
					/>
					<ProjectCard
						imageSrc={"/musicTransfer.png"}
						title={"Music Transfer"}
						languages={[
							"Java",
							"TypeScript",
							"Python",
							"React",
							"Spring Boot",
							"JWT Web Token",
							"Tailwind CSS",
						]}
						description={
							"Built a React web application that transfers Spotify playlists to Apple Music. Constructed a Restful API with Spring Boot to handle authentication and calls to the Spotify Web API. Utilized Java to process Spotify API data into a usable format for the client-side."
						}
						githubLink={"https://github.com/leulmes/playlist-transfer"}
						demoLink={"https://www.youtube.com/watch?v=wukNB-JNbXw"}
					/>
					<ProjectCard
						imageSrc={"/assembly.png"}
						title={"Mini-Compiler for Bindings"}
						languages={["Racket", "x86 Assembly"]}
						description={
							"Extended a Compiler and assembled an interpreter with binding forms and primitives, that can take any number of arguments. Implemented error checking and mimicked Racket functionality for expressions such as let, let*, cond, case, etc."
						}
						githubLink={"https://github.com/leulmes/"}
						demoLink={"https://github.com/leulmes/"}
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
}

import React from "react";
import Image from "next/image";

const Timeline = () => {
	return (
		<div>
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
				<li>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end">
						<time className="font-mono italic">2024</time>
						<div className="flex justify-end gap-3 mb-5">
							<Image
								className="rounded-2xl"
								src="/panda.jpg"
								width={100}
								height={100}
								alt="Picture of Leul"
							></Image>
							<div className="flex justify-end flex-col items-end font-kumbh">
								<div className="text-3xl font-bold">Coding Instructor</div>
								<div className="text-md font-bold to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
									Panda Programmer
								</div>
								<div className="text-md font-normal text-[#CFC9C9]">
									Nov. 2024 - Present
								</div>
							</div>
						</div>
						<ul className="list-disc list-inside flex flex-col justify-start font-kumbh to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
							<li className="text-md ">
								- Inspiring a love of{" "}
								<b className="text-white">Computer Science</b> and{" "}
								<b className="text-white">coding</b> to K-8 students through{" "}
								<b className="text-white">Python</b>,{" "}
								<b className="text-white">JavaScript</b>, and Scratch lessons.
							</li>
							<li className="text-md">
								- Helping students develop foundational skills in{" "}
								<b className="text-white">problem-solving</b>,{" "}
								<b className="text-white">logical thinking</b>, and{" "}
								<b className="text-white">teamwork</b>.
							</li>
							<li className="text-md">
								- Designing lesson plans, managing classrooms, and ensuring a
								safe, yet exciting learning environment.
							</li>
						</ul>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end mb-10">
						<div className="text-3xl font-bold">Open Source Contributor</div>
						<div className="text-md font-bold to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
							TLDR
						</div>
						<div className="text-md font-normal text-[#CFC9C9] mb-3">
							Nov. 2024 - Present
						</div>
						<ul className="font-kumbh to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
							<li>
								Contributing to documentation for Pulumi: a modern
								infrastructure as a code platform that allows you to use
								familiar programming languages and tools to build, deploy, and
								manage cloud infrastructure.
							</li>
						</ul>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end">
						<div className="text-3xl font-bold">
							Full-Stack Software Engineer (freelance)
						</div>
						<div className="text-md font-bold to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
							Second Bloom
						</div>
						<div className="text-md font-normal text-[#CFC9C9] mb-3">
							Oct. 2024 - Present
						</div>
						<ul className="font-kumbh to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
                            <li>
                                Currently implementing an <b className="text-white">e-commerce website</b> for a client who <b className="text-white">sells vintage/thrifted clothing</b>.
                            </li>
                            <li>
                                <b className="text-white">Front-end:</b> TypeScript, Tailwind CSS, and HTML
                            </li>
                            <li>
                                <b className="text-white">Back-end:</b> MongoDB, Clerk Auth, Stripe API
                            </li>
                        </ul>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end mb-10">
						<div className="text-3xl font-bold">Web Developer (freelance)</div>
						<div className="text-md font-bold to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
							Moe Cuts
						</div>
						<div className="text-md font-normal text-[#CFC9C9] mb-3">
							Sept. 2024 - Present
						</div>
						<ul className="font-kumbh to-accent bg-gradient-to-bl from-[#AAA7A7] bg-clip-text text-transparent">
                            <li>
                                Implementing a <b className="text-white">website</b> for a client who runs a <b className="text-white">family-owned barbershop</b>.
                            </li>
                            <li>
                                <b className="text-white">Front-end:</b> TypeScript, Tailwind CSS, and HTML
                            </li>
                            <li>
                                <b className="text-white">Back-end:</b> Square (for appointment scheduling)
                            </li>
                        </ul>
					</div>
					<hr />
				</li>
			</ul>
		</div>
	);
};

export default Timeline;

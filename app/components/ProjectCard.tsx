import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faGithub,
// 	faInstagram,
// 	faLinkedin,
// 	faMastodon,
// } from "@fortawesome/free-brands-svg-icons";
// import Link from "next/link";

interface ProjectCardProps {
	imageSrc: string;
	title: string;
	languages: string[];
	description: string;
	githubLink: string;
}
export default function ProjectCard({
	imageSrc,
	title,
	languages,
	description,
	githubLink,
}: ProjectCardProps) {
	return (
		<Card
			isBlurred
			className="border-none from-[#AAA7A7]  max-w-[65%] max-h-[50%]"
			shadow="sm"
		>
			<CardBody>
				<div className="flex flex-row gap-4">
					<Image
						alt="Project cover"
						className="object-cover"
						height={200}
						shadow="md"
						src={imageSrc}
						width="100%"
					/>
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold whitespace-nowrap font-kumbh">
							{title}
						</h3>
						<p className="text-sm whitespace-nowrap font-kumbh">
							{languages.join(", ")}
						</p>
						<p className="text-sm font-kumbh">
							{description}
						</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}

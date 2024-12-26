import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
	imageSrc: string;
	title: string;
	languages: string[];
	description: string;
	githubLink: string;
	demoLink: string;
}
export default function ProjectCard({
	imageSrc,
	title,
	languages,
	description,
	githubLink,
	demoLink,
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
						<p className="text-sm font-kumbh">{description}</p>
					</div>
				</div>
				<div className="flex justify-center gap-4">
					<Link
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className=""
					>
						<Button className="font-kumbh font-medium">
							Github <FontAwesomeIcon className="size-5" icon={faGithub} />
						</Button>
					</Link>

					<Link href={demoLink} target="_blank" rel="noopener noreferrer">
						<Button className="font-kumbh font-medium">
							Demo <ExternalLink className="size-5" />
						</Button>
					</Link>
				</div>
			</CardBody>
		</Card>
	);
}

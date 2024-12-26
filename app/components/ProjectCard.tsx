import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ProjectCard() {
	const [liked, setLiked] = React.useState(false);

	return (
		<Card
			isBlurred
			className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
			shadow="sm"
		>
			<CardBody>
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
					<div className="relative col-span-6 md:col-span-4">
						<Image
							alt="Album cover"
							className="object-cover"
							height={200}
							shadow="md"
							src="https://nextui.org/images/album-cover.png"
							width="100%"
						/>
					</div>

					<div className="flex flex-col col-span-6 md:col-span-8">
						<div className="flex justify-between items-start">
							<div className="flex flex-col gap-0">
								<h3 className="font-semibold text-foreground/90">GAINZ</h3>
								<p className="text-small text-foreground/80">
									React Native, TypeScript, Python, AWS DynamoDB, AWS Lambda,
									Clerk
								</p>
								<button>Learn More</button>
								<Link
									href={"https://github.com/kushaldevv/gainzApp"}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center"
								>
									<FontAwesomeIcon icon={faGithub} className="size-10" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}

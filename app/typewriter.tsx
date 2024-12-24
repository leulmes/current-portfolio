import React from "react";
import useTypewriter from "./typewriterHook";

interface TypewriterProps {
	text: string[];
	speed: number;
}
const Typewriter = ({ text, speed }: TypewriterProps) => {
	const displayText = useTypewriter(text, speed);
	return <p>{displayText}</p>;
};

export default Typewriter;

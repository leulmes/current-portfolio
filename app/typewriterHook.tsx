// import { useState, useEffect } from "react";

// const useTypewriter = (text: string[], speed: number) => {
// 	const [displayText, setDisplayText] = useState("");
// 	const [currentIdx, setCurrentIdx] = useState(0);

// 	useEffect(() => {
// 		let i = 0;
// 		const typingInterval = setInterval(() => {
// 			let currWord = text[currentIdx];
// 			if (currWord === undefined) {
// 				setCurrentIdx(0);
// 			}
// 			if (currWord != undefined && i < currWord.length) {
// 				setDisplayText(currWord.substring(0, i + 1));
// 				i++;
// 			} else {
// 				setCurrentIdx((prevIdx) => prevIdx + 1);
// 				clearInterval(typingInterval);
// 			}
// 		}, speed);

// 		return () => {
// 			clearInterval(typingInterval);
// 		};
// 	}, [text, speed, currentIdx]);

// 	return displayText;
// };

// export default useTypewriter;

import React from "react";

export interface LinkItem {
	href: string;
	text: string;
}

const linkMaker = (linksArray: LinkItem[]): JSX.Element[] => {
	return linksArray.map((item) => {
		const { href, text } = item;
		return (
			<a target="_blank" rel="noreferrer" href={href} key={text}>
				{text}
			</a>
		);
	});
};

export default linkMaker;

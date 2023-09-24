// useDarkMode.ts
import { useEffect, useState } from "react";

const useDarkMode = (): [
	boolean,
	React.Dispatch<React.SetStateAction<boolean>>
] => {
	const key = "isDarkMode";
	const [isDark, setIsDark] = useState<boolean>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : false;
		} catch (error) {
			return false;
		}
	});

	useEffect(() => {
		const className = "dark";
		const pokeCards = window.document.querySelectorAll(".pokemon-card");

		if (isDark) {
			window.document.body.classList.add(className);
			pokeCards.forEach((item) => {
				item.classList.add(className);
			});
		} else {
			window.document.body.classList.remove(className);
			pokeCards.forEach((item) => {
				item.classList.remove(className);
			});
		}

		try {
			window.localStorage.setItem(key, JSON.stringify(isDark));
		} catch (e) {
			console.error("Error in setting preference");
		}
	}, [isDark]);

	return [isDark, setIsDark];
};

export default useDarkMode;

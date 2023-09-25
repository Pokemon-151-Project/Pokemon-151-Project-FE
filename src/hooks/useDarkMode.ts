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
			console.error("Error reading from local storage:", error);
			return false;
		}
	});

	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(isDark));
		} catch (e) {
			console.error("Error in setting preference:", e);
		}
	}, [isDark]);

	return [isDark, setIsDark];
};

export default useDarkMode;

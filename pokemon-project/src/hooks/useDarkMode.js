import { useEffect, useState } from "react";

const useDarkMode = () => {
  const key = "isDarkMode";
  const [isDark, setIsDark] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    const className = "dark";

    const pokeCards = window.document.querySelectorAll(".pokemon-card");
    // console.log(pokeCards);

    if (isDark) {
      window.document.body.classList.add(className);
      pokeCards.forEach((item) => {
        item.classList.add(className);
        // console.log(item.classList);
      });
    } else {
      window.document.body.classList.remove(className);
      pokeCards.forEach((item) => {
        item.classList.remove(className);
        // console.log(item.classList);
      });
    }
    try {
      window.localStorage.setItem(key, isDark);
    } catch (e) {
      console.error("Error in setting preference");
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;

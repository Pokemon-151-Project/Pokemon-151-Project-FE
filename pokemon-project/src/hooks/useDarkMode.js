// This hook allows the user to set Dark Mode preference, and the browser remembers preference across browser visits
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

    //This adds or removes .dark class to both body and each individual pokemon cards
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
      window.localStorage.setItem(key, isDark);
    } catch (e) {
      console.error("Error in setting preference");
    }
  });

  return [isDark, setIsDark];
};

export default useDarkMode;

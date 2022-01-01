import { useEffect, useState } from "react";
//This hook is fairly self-explanatory. Sets dark mode on/off based on the user clicking a header button. Stores user preference across browser visits.

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

    //This will be useful in a minute when we want to
    const pokeCards = window.document.querySelectorAll(".pokemon-card");

    if (isDark) {
      //This adds .dark class to both body and each individual pokemon cards
      window.document.body.classList.add(className);
      pokeCards.forEach((item) => {
        item.classList.add(className);
      });
    } else {
      //this removes .dark class from both body and individual pokemon cards
      window.document.body.classList.remove(className);
      pokeCards.forEach((item) => {
        item.classList.remove(className);
      });
    }
    try {
      //This stores user darkmode preference in local storage
      window.localStorage.setItem(key, isDark);
    } catch (e) {
      //returns an error if setting preference is unsuccessful
      console.error("Error in setting preference");
    }
  });

  return [isDark, setIsDark];
};

export default useDarkMode;

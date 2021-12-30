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

    //This will be useful in a minute when we want to
    const pokeCards = window.document.querySelectorAll(".pokemon-card");

    if (isDark) {
      //This adds .dark class to both body and each individual pokemon card
      window.document.body.classList.add(className);
      pokeCards.forEach((item) => {
        item.classList.add(className);
      });
    } else {
      //this removes .dark class from both body and individual pokemon card
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
    //makes this function call every time someone hits the darkmode button
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;

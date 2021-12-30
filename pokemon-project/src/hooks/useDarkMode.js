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
    if (isDark) {
      window.document.body.classList.add(className);
      //   document.querySelectorAll(".pokemon-card").className.add(className);
    } else {
      window.document.body.classList.remove(className);
      //   document.querySelectorAll(".pokemon-card").classList.remove(className);
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

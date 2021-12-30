import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const className = "dark";
    if (isDark) {
      window.document.body.classList.add(className);
      //   document.querySelectorAll(".pokemon-card").className.add(className);
    } else {
      window.document.body.classList.remove(className);
      //   document.querySelectorAll(".pokemon-card").classList.remove(className);
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;

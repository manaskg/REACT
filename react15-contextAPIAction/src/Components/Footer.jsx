import React, { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className="foot">
      <h1>Footer</h1>
      <h2>{theme}</h2>
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Footer;

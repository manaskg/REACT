import React, { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  const data = "manas";
  const [theme, setTheme] = useState('light')

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      <div>{props.children}</div>
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;

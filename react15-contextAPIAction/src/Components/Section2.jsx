import React, { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Section2 = () => {
  const theme = useContext(ThemeDataContext);
  return (
    <div>
      <h2>Section2</h2>
      <h2>{theme}</h2>
    </div>
  );
};

export default Section2;

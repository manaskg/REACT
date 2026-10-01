import React, { useState } from "react";
import Other from "./Other";

const App = () => {
  const arr = ["mkg", "mg", "sg", "rcg"];
  let [num, setNum] = useState(0);
  return (
    <div className="maindiv">
      <h1>HELLO</h1>
      <Other user="manas" />
      <Other user="manab" />
      <h1>{arr[num]}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        chage user
      </button>
    </div>
  );
};

export default App;

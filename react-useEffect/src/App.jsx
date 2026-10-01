import React, { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [inputtext, setInputtext] = useState("");

  useEffect(
    function () {
      console.log("use effect is running");
    },
    [number1]
  );

  return (
    <div>
      <input
        type="text"
        value={inputtext}
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
      />
      <br />
      <h1>{number1}</h1>
      <button
        onClick={() => {
          setNumber1(Math.floor(Math.random() * 100));
        }}
      >
        change number1
      </button>

      <br />
      <br />

      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        change number2
      </button>
    </div>
  );
};

export default App;
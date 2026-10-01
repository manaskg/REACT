import React, { useState } from "react";

const App = () => {

  const [userName, setUserName] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    setUserName("")
    console.log("form submmited");
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap justify-center"
      >
        <input
          value={userName}
          onChange={(e)=>{
            setUserName(e.target.value)  
          }}
          className="border-2 text-xl font-semibold px-2 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="enter your name "
        />
        <input
          className="border-2 text-xl font-semibold px-2 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="image url"
        />
        <input
          className="border-2 text-xl font-semibold px-2 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="enter role"
        />
        <input
          className="border-2 text-xl font-semibold px-2 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="enter description"
        />

        <button className="px-5 py-2 text-xl active:scale-95 font-semibold bg-emerald-700 cursor-pointer rounded m-2 w-[45%]">
          create user
        </button>
      </form>
    </div>
  );
};

export default App;

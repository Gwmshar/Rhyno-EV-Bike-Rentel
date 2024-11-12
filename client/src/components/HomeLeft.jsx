import React from "react";
export default function HomeLeft({ bike1, children, name }) {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="flex flex-col justify-center items-center h-full md:w-2/4">
        <div className="w-full h-3/4">
          <img
            className="md:ml-10 md:h-[80%] h-full md:w-3/4 w-full"
            src={bike1}
            alt=""
          />
          <h2 className="mt-5 text-center text-white font-bold text-2xl">
            {name}
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full md:w-2/4 text-white gap-10">
        {children}
      </div>
    </div>
  );
}

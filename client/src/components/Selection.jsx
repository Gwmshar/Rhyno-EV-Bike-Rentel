import React, { useState } from "react";
import bike1 from "../assets/bike 1.png";
import bike2 from "../assets/bike 2.png";
import bike3 from "../assets/bike 3.png";

export default function Selection({ name }) {
  const [mainImg, setMainImg] = useState(bike1);
  const [color, setColor] = useState("RED");
  const handleSelect = (a) => {
    setMainImg(a);
    if (a == bike1) {
      setColor("RED");
    } else if (a == bike2) {
      setColor("BLUE");
    } else if (a == bike3) {
      setColor("BLACK");
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-2 md:gap-0">
        <div className="w-2/4 flex flex-col justify-center items-center">
          <div>
            <img className="h-96 w-96" src={mainImg} alt="" />
          </div>
          <div className="bg-white h-12 md:h-24 w-96 flex justify-around items-center">
            <button
              className="h-10 w-10 md:h-16 md:w-16 rounded-[50%] bg-red-500"
              onClick={() => handleSelect(bike1)}
            ></button>
            <button
              className="h-10 w-10 md:h-16 md:w-16 rounded-[50%] bg-blue-500"
              onClick={() => handleSelect(bike2)}
            ></button>
            <button
              className="h-10 w-10 md:h-16 md:w-16 rounded-[50%] bg-black"
              onClick={() => handleSelect(bike3)}
            ></button>
          </div>
        </div>
        <div className="text-white w-2/4 flex flex-col items-center gap-10">
          <div className="text-3xl">{name}</div>
          <div className="text-xl">Color: {color}</div>
          <div>
            <button className="bg-[#fff225] px-8 py-2 text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

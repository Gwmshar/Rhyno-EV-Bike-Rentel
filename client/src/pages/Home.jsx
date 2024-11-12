import React from "react";
import { Typewriter } from "react-simple-typewriter";
import grp from "../assets/grp.png";
import HomeLeft from "../components/HomeLeft";
import bike1 from "../assets/bike 1.png";
import Footer from "../components/Footer";
import Usp from "../components/Usp";
import { Link } from "react-router-dom";
export default function Home() {
  const bikes = ["SE03 LITE", "SE03", "SE03 MAX"];
  return (
    <>
      <button className="bg-[#F9ED32] fixed bottom-5 left-5 py-2 px-4">
        <Link to="/prebook">Pre Book</Link>
      </button>
      <div className="flex flex-col justify-center items-center h-[38rem]">
        <div className="text-white text-4xl text-center">
          Lets Elavate Your Ride Expreience <br /> With Rhyno - Where
          Superiority <br /> meets{" "}
          <Typewriter
            words={["style", "Elegance", "Minimalism", "Comfort"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            loop={false}
          />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-3/4 md:w-auto h-96" src={grp} alt="" />
        </div>
      </div>
      <div>
        <HomeLeft bike1={bike1} name={bikes[0]}>
          <div className="text-3xl md:text-4xl">Specification</div>
          <div className="flex flex-col gap-3 text-lg">
            <div>Max Speed : 50 km/h</div>
            <div>Motor : 1500W</div>
            <div>Charging Time : 3 hours(12A)</div>
          </div>
          <div>
            <button className="bg-white text-black font-semibold px-12 py-4">
              Check Out
            </button>
          </div>
        </HomeLeft>
        <HomeLeft bike1={bike1} name={bikes[1]}>
          <div className="text-3xl md:text-4xl">Specification</div>
          <div className="flex flex-col gap-3 text-lg">
            <div>Max Speed : 55 km/h</div>
            <div>Motor : 1500W</div>
            <div>Charging Time : 4 hours(12A)</div>
          </div>
          <div>
            <button className="bg-white text-black font-semibold px-12 py-4">
              Check Out
            </button>
          </div>
        </HomeLeft>
        <HomeLeft bike1={bike1} name={bikes[2]}>
          <div className="text-3xl md:text-4xl">Specification</div>
          <div className="flex flex-col gap-3 text-lg">
            <div>Max Speed : 55 km/h</div>
            <div>Motor : 1500W</div>
            <div>Charging Time : 4 hours(12A)</div>
          </div>
          <div>
            <button className="bg-white text-black font-semibold px-12 py-4">
              Check Out
            </button>
          </div>
        </HomeLeft>
      </div>
      <div>
        <Usp />
      </div>
    </>
  );
}

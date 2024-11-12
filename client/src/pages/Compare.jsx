import React from "react";
import bike1 from "../assets/bike 1.png";
import bike2 from "../assets/bike 2.png";
import bike3 from "../assets/bike 3.png";
export default function Compare() {
  return (
    <div className="mb-16">
      <div className="text-white text-xl md:text-3xl md:my-5 md:mx-10">
        Comparison Table
      </div>
      <div className="flex justify-center items-center">
        <table className="flex justify-center items-center bg-white border-separate md:border-spacing-x-10 flex-col border-spacing-y-24 md:border-spacing-y-24">
          <tbody className="text-sm md:text-lg">
            <tr>
              <td>
                <div className="text-xl md:text-2xl">Specification</div>
              </td>
              <td>
                <div>
                  <BikeImg bike={bike1} name={"SE03 LITE"} />
                </div>
              </td>
              <td>
                <div>
                  <BikeImg bike={bike2} name={"SE03"} />
                </div>
              </td>
              <td>
                <div>
                  <BikeImg bike={bike3} name={"SE03 MAX"} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>1.8 kwh</td>
              <td>2.7 kwh</td>
              <td>2.7 kwh</td>
            </tr>
            <tr>
              <td>Battery Features</td>
              <td>
                <p>LFP with 1500 cycles</p>
                <p>Active Balancing</p>
                <p>Waterproof (IP7)</p>
              </td>
              <td>
                <p>LFP with 1500 cycles</p>
                <p>Active Balancing</p>
                <p>Waterproof (IP7)</p>
              </td>
              <td>
                <p>LFP with 1500 cycles</p>
                <p>Active Balancing</p>
                <p>Waterproof (IP7)</p>
              </td>
            </tr>
            <tr>
              <td>Battery Warranty</td>
              <td>3 Years</td>
              <td>3 Years</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <td>Charging Time</td>
              <td>3 hours (12 A)</td>
              <td>4 hours (12 A)</td>
              <td>4 hours (12 A)</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>1500W</td>
              <td>!500W</td>
              <td>2000W</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>55 km/h</td>
              <td>55 km/h</td>
              <td>5 km/h</td>
            </tr>
            <tr>
              <td>Warranty on Electronics</td>
              <td>1 year</td>
              <td>1 year</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>Max Range (@30 km/h)</td>
              <td>100 km</td>
              <td>150 km</td>
              <td>120 km</td>
            </tr>
            <tr>
              <td>Max Range (@45 km/h)</td>
              <td>90 km</td>
              <td>110 km</td>
              <td>100 km</td>
            </tr>
            <tr>
              <td>Max Range (@full speed)</td>
              <td>60 km</td>
              <td>90 km</td>
              <td>80 km</td>
            </tr>
            <tr>
              <td>Other Key Benefits</td>
              <td>
                <p>Fire-safe battery</p>
                <p>Range prediction</p>
                <p>Comfortable ride and safe</p>
                <p>Stable and safe</p>
              </td>
              <td>
                <p>Fire-safe battery</p>
                <p>Range prediction</p>
                <p>Comfortable ride and safe</p>
                <p>Stable and safe</p>
              </td>
              <td>
                <p>Fire-safe battery</p>
                <p>Range prediction</p>
                <p>Comfortable ride and safe</p>
                <p>Stable and safe</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const BikeImg = ({ bike, name }) => {
  return (
    <div className="flex flex-col text-white">
      <div>
        <img className="w-36 h-36 md:w-52 md:h-52" src={bike} alt="" />
      </div>
      <div className="text-black text-center">{name}</div>
    </div>
  );
};

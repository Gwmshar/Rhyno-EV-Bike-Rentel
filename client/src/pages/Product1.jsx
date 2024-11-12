import React, { useState } from "react";
import Selection from "../components/Selection";
export default function Product1() {
  return (
    <>
      <Selection name={"SE03 LITE"} />
      <div className="text-white mx-10 my-10 flex flex-col gap-5">
        <div className="text-3xl font-bold">Description</div>
        <div>
          Indulge perfect harmony of power and range with this Rhyno. Offering
          an exhilarating experience with its robust 2000W motor, it ensures a
          thrilling ride while still delivering an Stable 80-100 km range on a
          single charge. Like its counterparts, this machine features the safety
          assurance of a fire-safe advanced LFP battery, along with the
          comprehensive benefits of owning a Rhino. Boasting a formidable
          combination of a 2000W motor and a 2.7kWh battery, this beast is ready
          to roar on the roads, providing an electrifying journey at every turn.
          Check out the other details below!
        </div>
      </div>
      <div className="mb-10">
        <div className="text-white text-3xl mx-10 my-10">Specification</div>
        <div className="flex justify-center items-center">
          <table className="bg-white w-3/4 text-xl border-separate border-spacing-3 text-center">
            <tbody>
              <tr>
                <td className="border w-2/4 border-black">
                  Warranty on Electronics
                </td>
                <td className="border w-2/4 border-black">1 year</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">Battery</td>
                <td className="border w-2/4 border-black">1.8 Kwh</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">
                  Max Range (@30km/h)
                </td>
                <td className="border w-2/4 border-black">100 km</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">Charging Time</td>
                <td className="border w-2/4 border-black">3 hours (12A)</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">Battery Warranty</td>
                <td className="border w-2/4 border-black">3 years</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">Max Speed</td>
                <td className="border w-2/4 border-black">50 km/h</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">
                  Max Range (@full speed)
                </td>
                <td className="border w-2/4 border-black">70 km</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">
                  Max Range (@45 km/h)
                </td>
                <td className="border w-2/4 border-black">90 km</td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">
                  Other Key Benefits
                </td>
                <td className="border w-2/4 border-black">
                  <p>Fire-safe battery</p>
                  <p>Range prediction</p>
                  <p>Comfortable ride and safe</p>
                </td>
              </tr>
              <tr>
                <td className="border w-2/4 border-black">Battery Features</td>
                <td className="border w-2/4 border-black">
                  <p>LFP with 1500 cycles</p>
                  <p>Active Balancing</p>
                  <p>Waterproof (IP67)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

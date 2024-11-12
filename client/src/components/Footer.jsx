import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-white">
      <div className="w-[80%] h-[70%] flex justify-between mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center w-full">
          <div className="text-black flex flex-col gap-3">
            <div className="text-xl">Consumer Policy</div>
            <div className="text-sm flex flex-col gap-2 items-center">
              <div>Privacy Policy</div>
              <div>Return Policy</div>
              <div>Website Policy</div>
            </div>
          </div>
          <div className="text-black flex flex-col gap-3">
            <div className="text-xl">Products</div>
            <div className="text-sm flex flex-col gap-2 items-center">
              <div>SE03 LITE</div>
              <div>SE03</div>
              <div>SE03 MAX</div>
            </div>
          </div>
          <div className="text-black flex flex-col gap-3">
            <div className="text-xl">About</div>
            <div className="text-sm flex flex-col gap-2 items-center">
              <div>Contact Us</div>
              <div>Career</div>
              <div>
                <Link to="/rentels">Rentels</Link>
              </div>
            </div>
          </div>
          <div className="text-black flex flex-col gap-3">
            <div className="text-xl">Connect with us</div>
            <div className="text-sm flex flex-col gap-2 items-center">
              <div>Linkedin</div>
              <div>Instagram</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[1px] w-[80%] my-3"></div>
      <div className="text-black mt-5 mb-2">
        Copyright © 2024 Rhyno. All rights reserved.
      </div>
    </div>
  );
}

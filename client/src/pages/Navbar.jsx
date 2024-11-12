import { useState } from "react";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setMenu((e) => !e);
  };
  const handleChange = (e) => {
    const path = e.target.value;
    navigate(path);
  };
  return (
    <>
      <div className="md:hidden">
        <button
          className="absolute top-10 right-2"
          onClick={() => handleMenu()}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
        </button>
      </div>
      <div className="h-28 flex flex-col  justify-between items-start md:items-center md:flex-row">
        <div>
          <Link to="/">
            <img
              className="md:ml-5 h-28 w-36 md:h-36 md:w-52"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div
          className={`flex justify-center md:justify-around md:w-2/4 gap-5 flex-col md:flex-row bg-[#252525] z-10 w-screen items-center ${
            menu ? "block" : "hidden"
          } md:flex`}
        >
          <div className="text-white cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="text-white cursor-pointer">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className=" cursor-pointer">
            <select
              defaultValue=""
              className="bg-[#252525] text-white"
              onChange={handleChange}
            >
              <option value="" disabled className="text-[10px] md:text-sm">
                Products
              </option>
              <option value="/product1" className="text-[10px] md:text-sm">
                SE03 Lite
              </option>
              <option value="/product2" className="text-[10px] md:text-sm">
                SE03
              </option>
              <option value="/product3" className="text-[10px] md:text-sm">
                SE03 Max
              </option>
              <option value="/compare" className="text-[10px] md:text-sm">
                Compare All
              </option>
            </select>
          </div>
          <div className="text-white cursor-pointer">
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className="text-white cursor-pointer mb-5 md:mb-0">
            <Link to="/prebook">Pre Book</Link>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

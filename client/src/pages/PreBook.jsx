import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function PreBook() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const data = async () => {
    try {
      if (
        firstName != "" &&
        lastName != "" &&
        email != "" &&
        model != "" &&
        city != "" &&
        state != "" &&
        phone != ""
      ) {
        const res = await axios.post("http://localhost:3000/people", {
          firstName,
          lastName,
          email,
          model,
          city,
          state,
          phone,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setCity("");
        setState("");
        setPhone("");
        toast.success("PreBook Succesfull");
      } else {
        toast.error("Fill Up all the details");
      }
    } catch (e) {
      console.log("error 2");
    }
  };
  const onEnter = (e) => {
    e.preventDefault();
    data();
  };
  return (
    <div className="h-screen">
      <div className="text-3xl text-white mx-10 my-10">Pre Book</div>
      <div className="w-full h-3/4 flex justify-center items-center">
        <form
          action=""
          className="w-3/4 h-3/4 flex flex-col gap-3 items-center "
          onSubmit={(e) => onEnter(e)}
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className="w-3/4 h-full flex justify-center items-center bg-[#fff]">
            <select
              value={model}
              className="bg-[#fff] text-[#9ca3af] outline-none w-2/4 md:w-full text-center"
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="" disabled className="text-[10px] md:text-sm">
                Products
              </option>
              <option value="SE03 Lite" className="text-[10px] md:text-sm">
                SE03 Lite
              </option>
              <option value="SE03" className="text-[10px] md:text-sm">
                SE03
              </option>
              <option value="SE03 Max" className="text-[10px] md:text-sm">
                SE03 Max
              </option>
            </select>
          </div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
          />
          <input
            type="Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
          <button className="bg-[#F9ED32] py-2 px-4">Pre Book</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Usp() {
  const data = [
    {
      name: "LFP Battery",
      text: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!",
    },
    {
      name: "Wider tyres",
      text: "Now, say goodbye to skidding and embrace the leaning turns!Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.",
    },
    {
      name: "Range prediction",
      text: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
    },
    {
      name: "Extraordinery Experience",
      text: " Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!",
    },
    {
      name: "Rugged and simple Design",
      text: " We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-3/4">
        <div className="text-white text-2xl mb-10 font-bold">OUR USP</div>
        <div className="">
          <Slider {...settings}>
            {data.map((a, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white w-64 md:w-96 h-[32rem] rounded-3xl"
                >
                  <div className="text-xl font-semibold my-5 mx-3">
                    {a.name}
                  </div>
                  <div className="text-sm my-5 mx-3">{a.text}</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

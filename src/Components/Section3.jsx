import React from "react";

function Section3() {
  return (
    <div className="bg-black text-white py-10">
      <Banner />
      <Banner />

      {/* Cards  */}
      <div className="flex flex-col gap-y-5 md:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between w-full ">
      <div className="mx-4">
        <h2 className="font-bold text-3xl">
          We’ve all heard of instant groceries, now say hello to instant credit.
        </h2>
        <h3>0% hassle, 100% paperless. Get your Uni Card instantly.</h3>
      </div>
      <img src="app_screen_1.webp" alt="" className="w-[500px] md:w-[300px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="flex items-center mx-10 gap-x-5 md:flex-col">
      <div className="flex-1 ">
        <img src="whatsapp_bubble.webp" alt="" className=" w-[120px] mx-auto" />
      </div>

      <div className="flex-1 md:text-center">
        <div className="font-bold text-xl">
          Help, just a WhatsApp away. Anytime, Anyday.
        </div>
        <div className="text-gray-400">
          During hectic work hours. On lazy sunday mornings. In the thick of
          night. Anytime.
        </div>
      </div>
    </div>
  );
}

export default Section3;

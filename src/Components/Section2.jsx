import React from "react";

function Section2() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 py-10 gap-y-5">
      <div className="text-3xl ">
        Earn 1% assured cashback on your spends. Get 5X more value than cashback
        at the Uni Store. Enjoy round the clock Whatsapp support. And it's
        lifetime free; no joining fee, no annual charges
      </div>

      <div className="flex flex-col gap-y-10">
        <Comp
          text="1% assured cashback on your spends.The more you spend, the more you earn."
          image="one_percent_cashback.png"
        />
        <Comp
          text="1% assured cashback on your spends.The more you spend, the more you earn."
          image="one_percent_cashback.png"
        />
        <Comp
          text="1% assured cashback on your spends.The more you spend, the more you earn."
          image="one_percent_cashback.png"
        />
      </div>

      <div className="font-bold text-2xl text-center w-1/2">
        Lifetime free. No joining fee. No annual charges.
      </div>
    </div>
  );
}

function Comp(props) {
  const { image, text } = props;
  return (
    <div className="flex flex-col justify-center items-center md:flex-row-reverse">
      <div>
        <img src={image} alt="" className="w-[250px] md:w-[450px] " />
      </div>
      <div className="text-3xl font-bold">{text}</div>
    </div>
  );
}

export default Section2;

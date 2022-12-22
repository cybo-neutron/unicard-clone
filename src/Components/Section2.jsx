import React from "react";

function Section2() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 py-10 gap-y-5">
      <div className="text-3xl font-semibold">
        Earn 1% assured cashback{" "}
        <span className="text-zinc-400"> on your spends. Get </span> 5X more
        value than cashback
        <span className="text-zinc-400">
          {" "}
          at the Uni Store. Enjoy round the clock{" "}
        </span>
        Whatsapp support. And it's lifetime free;
        <span className="text-zinc-400">
          no joining fee, no annual charges.
        </span>
      </div>

      <div className="flex flex-col gap-y-10">
        <Comp
          text="1% assured cashback on your spends."
          lighttext="The more you spend, the more you earn."
          image="one_percent_cashback.png"
        />
        <Comp
          text="1% assured cashback on your spends."
          lighttext="The more you spend, the more you earn."
          image="one_percent_cashback.png"
          rev={true}
        />
        <Comp
          text="1% assured cashback on your spends."
          lighttext="The more you spend, the more you earn."
          image="one_percent_cashback.png"
        />
      </div>

      <div className="font-bold text-2xl text-center w-1/2">
        Lifetime <span className="text-cyan-400">free.</span> No joining fee. No
        annual charges.
      </div>
    </div>
  );
}

function Comp(props) {
  const { image, text, rev, lighttext } = props;
  return (
    <div
      className={`flex flex-col justify-center items-center md:${
        rev ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div>
        <img src={image} alt="" className="w-[250px] md:w-[450px] " />
      </div>
      <div className="text-3xl font-bold">
        {text} <span className="text-zinc-500">{lighttext}</span>
      </div>
    </div>
  );
}

export default Section2;

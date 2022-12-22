import React from "react";

function Section1() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="bg-white h-full w-full absolute z-[-1]">
        <video autoPlay muted loop playsInline>
          <source src="nxt_wave_bg.mp4" type="video/mp4" />
        </video>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-[-1] h-full w-full object-cover"
      >
        <source src="nxt_wave_bg.mp4" type="video/mp4" />
      </video>

      {/* top logo */}
      <div className=" w-20 ml-5 z-10">
        <svg
          className="Logo_logo_white__zowGB"
          viewBox="0 0 85 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
            fill="black"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
            fill="black"
          ></path>
        </svg>
      </div>

      <section className="flex flex-col sm:flex-row-reverse my-auto mx-5">
        {/* image */}
        <div className="w-[200px] sm:w-full self-start sm:self-center">
          <img src="nx_wave_hero.png" alt="" className="" />
        </div>

        <div className="my-auto  w-full">
          <div className="text-3xl font-semibold sm:text-6xl w-[400px] sm:w-full">
            <span className="font-extrabold">NX Wave.</span> The next-gen credit
            card for those who love rewards.
          </div>

          <div className="mt-4">
            1% Cashback + 5x RewardsZero + Forex Markup
          </div>

          <form className="justify-self-end mt-4">
            <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
              <div className="flex items-center">
                <input
                  className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                  placeholder="Enter Phone Number"
                  value=""
                />
                <span className="w-6 flex items-center justify-end h-full"></span>
              </div>
              <button
                type="submit"
                className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-400 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                <span>Apply Now</span>
              </button>
            </div>
          </form>

          <div className="text-sm">
            <input type="checkbox" name="" id="" />
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;

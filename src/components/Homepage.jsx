import React from 'react'

function Homepage() {
  return (
    <div className="w-screen h-[91vh] flex items-center gap-80 py-10 px-12 bg-gradient-to-t from-[#FFDEE9] to-[#B5FFFC]">
      <div className="title w-1/2 flex flex-col items-start">
        <img
          className="-ml-14 -mt-24 pb-10"
          src="./src/assets/logo.png"
          alt=""
        />
        <h1 className="text-6xl font-[GB]">
          Experience{" "}
          <span className="text-blue-500">
            <div className=" inline-block relative z-[1]">
              <img
                className="absolute -z-[1] -top-2"
                src="./src/assets/white-paper.jpg"
                alt=""
              />
              <span className='z-[1] text-black'>Pure,</span>
            </div>
            Powerful Sound
          </span>{" "}
          with Rarebeat<span className="text-gradient">.</span>
        </h1>
      </div>
      <div className="hero-img w-1/2">
        <img className="w-96 object-cover" src="./src/assets/home.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage
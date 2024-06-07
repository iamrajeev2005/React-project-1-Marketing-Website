import React from "react";
import Featurecard from "./Featurecard";

function Features() {
  return (
    <div className="w-screen h-screen text-center py-12">
      <h1 className="text-5xl pb-5 font-[GB]">We have all time best features.</h1>
      <div className="flex flex-wrap items-center justify-center gap-20 mt-12">
        <Featurecard />
        <Featurecard />
        <Featurecard />
      </div>
    </div>
  );
}

export default Features;

import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Features from "./components/Features";

function App() {
  return (
    <div className="w-screen h-screen bg-white font-[GL] overflow-x-hidden">
      <Navbar />
      <Homepage />
      <Features />
    </div>
  );
}

export default App;

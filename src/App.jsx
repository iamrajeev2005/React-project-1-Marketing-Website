import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-screen bg-white font-[GL] overflow-x-hidden">
      <Navbar />
      <Homepage />
      <Features />
      <Footer/> 
    </div>
  );
}

export default App;

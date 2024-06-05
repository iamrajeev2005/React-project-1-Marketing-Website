import React from "react";

function Navbar() {
  return (
    <div className="w-screen sticky h-fit px-4 py-3 flex items-center justify-between shadow-md">
      <div className="logo w-28">
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <div className="links tracking-wide flex items-center gap-4">
        <a href="#">Features</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        <button className=" bg-blue-500 px-2 py-1 rounded-md text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

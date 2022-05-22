import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import StateSelect from "./StateSelect";
import Link from "next/link";

import { AiFillHome } from "react-icons/ai";

function NavBar(props) {
  const [showDrawer, setShowDrawer] = useState(false);

  function toggleDrawer() {
    console.log("CLICK");
    setShowDrawer((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <nav className="w-full h-20 bg-orange-400 flex justify-between items-center px-5">
        <Link href="http://localhost:3000">
          <AiFillHome size={50} style={{ cursor: "pointer" }} />
        </Link>
        <div
          className="w-[50px] space-y-1.5 cursor-pointer"
          onClick={toggleDrawer}
        >
          <div className="w-full bg-black h-[8px]"></div>
          <div className="w-full bg-black h-[8px]"></div>
          <div className="w-full bg-black h-[8px]"></div>
        </div>
      </nav>
      <Drawer
        open={showDrawer}
        onClose={toggleDrawer}
        direction="right"
        className=" w-[600px] bg-white flex flex-col justify-center items-center"
      >
        <Link href="http://localhost:3000">
          <h1 className="text-orange-400 font-open-sans font-extrabold text-3xl cursor-pointer">
            Park Hopper
          </h1>
        </Link>
        <StateSelect></StateSelect>
      </Drawer>
    </>
  );
}

export default NavBar;

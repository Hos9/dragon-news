import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className=" mb-5 font-semibold text-xl">Login With</h2>
      <div className="flex flex-col gap-3 rounded-md">
        <button className="flex gap-3 items-center justify-center py-3 btn shadow-md">
          <FaGoogle />
          Login With Google
        </button>
        <button className="flex gap-3 items-center justify-center  py-3 btn shadow-md">
          <FaGithub />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;

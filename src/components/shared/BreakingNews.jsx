import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container my-5 mx-auto flex gap-4 p-5 bg-base-300">
      <button className="btn btn-error">Latest News</button>
      <Marquee pauseOnHover>
        <div className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          veniam?
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

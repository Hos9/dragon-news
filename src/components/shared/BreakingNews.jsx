import { getNewsByCategoryId } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const news = await getNewsByCategoryId("03");

const BreakingNews = () => {
  return (
    <div className="container my-5 mx-auto flex gap-4 p-5 bg-base-300">
      <button className="btn btn-error">Latest News</button>
      <Marquee pauseOnHover>
        <div className="font-bold">
          {news.map((e, ind) => {
            return (
              <div className="flex flex-col gap-4 " key={ind}>
                {e.title}
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

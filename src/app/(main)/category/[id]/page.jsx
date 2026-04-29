import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 mt-4">
      <div className="col-span-1">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="bg-gray-100 col-span-2">
        <h2 className=" mb-5 font-semibold text-xl">Dragon News Home</h2>
        <div className="space-y-4 text-2xl font-semibold text-justify">
          {news.length > 0 ? (
            news.map((e) => {
              return (
                <div
                  className="p-4 rounded-md border-2 border-gray-400"
                  key={e._id}
                >
                  {e.title}
                </div>
              );
            })
          ) : (
            <h2 className="text-3xl text-center h-[45vh] items-center flex justify-center">
              No News available in this Category
            </h2>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;

import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};

export default async function Home() {
  const categories = await getCategories();
  console.log(categories, "categories");

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 mt-4">
      <div className="col-span-1">
        <LeftSideBar categories={categories} activeId={"01"} />
      </div>
      <div className="bg-gray-100 col-span-2">
        <h2 className=" mb-5 font-semibold text-xl">Dragon News Home</h2>
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
}

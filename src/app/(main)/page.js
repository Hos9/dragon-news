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
    <div className="container mx-auto grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <h2 className=" mb-5 font-semibold text-xl">All Categories</h2>
        <ul className="flex flex-col gap-3">
          {categories.map((category) => {
            return (
              <li
                key={category.category_id}
                className="bg-gray-200 rounded-md text-xl py-4 px-10"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-gray-100 col-span-2">
        <h2 className=" mb-5 font-semibold text-xl">Dragon News Home</h2>
      </div>
      <div className="bg-green-100 col-span-1">
        <h2 className=" mb-5 font-semibold text-xl">Login With</h2>
      </div>
    </div>
  );
}

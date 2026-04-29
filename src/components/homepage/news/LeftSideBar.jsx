import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className=" mb-5 font-semibold text-xl">All Categories</h2>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "bg-black/70 border-2 border-black text-white font-bold"} rounded-md border-2 border-gray-300 text-xl py-4 pl-10`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;

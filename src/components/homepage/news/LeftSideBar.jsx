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
              className={`${activeId === category.category_id && "bg-gray-300 font-bold"} rounded-md bg-gray-100 text-xl py-4 px-10`}
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

import Link from "next/link";
import React from "react";

const ListItem = ({ items, isLocation = false }) => {
  return (
    <ul className="mt-8 space-y-4 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className={`text-gray-200 transition hover:text-gray-300 pb-2 hover:transition duration-200  ${
              isLocation ? "flex w-fit " : "inline hover:border-b "
            } ${item.icon && "gap-2"}`}
            href={item.link}
          >
            <span className="text-customBg inline ">{item.icon}</span>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;

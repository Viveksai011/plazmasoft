import React from "react";

const ListItem = ({ items, isLocation = false }) => {
  return (
    <ul className="mt-8 space-y-4 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <a
            className={`text-gray-700 transition hover:text-gray-800 pb-2 hover:transition duration-200  ${
              isLocation ? "flex w-fit items-end" : "inline hover:border-b hover:border-customBg"
            }`}
            href={item.link}
          >
            <span className="text-customBg mr-2 inline ">{item.icon}</span>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;

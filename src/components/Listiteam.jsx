import React from 'react';

const ListItem = ({ items }) => {
  return (
    <ul className="mt-8 space-y-4 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <a
            className="text-gray-700 transition hover:text-gray-800 pb-2 hover:transtion-200 hover:border-b hover:border-customBg"
            href={item.link}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;

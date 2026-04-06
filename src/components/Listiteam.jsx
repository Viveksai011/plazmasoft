import Link from "next/link";

const ListItem = ({ items, isLocation = false }) => {
  return (
    <ul className="mt-8 space-y-4 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className={`pb-2 text-gray-200 transition duration-200 hover:text-gray-300 hover:transition ${
              isLocation ? "flex w-fit " : "inline hover:border-b "
            } ${item.icon && "gap-2"}`}
            href={item.link}
          >
            <span className="inline text-customBg">{item.icon}</span>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;

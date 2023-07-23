import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const CategoryTile = ({ categoryData }) => {
  const { id, name, image, theme } = categoryData;
  return (
    <div
      style={{ backgroundColor: theme }}
      className="mt-8 w-2/5 h-[30vh] rounded-md shadow-md"
    >
      <p className="text-xs font-bold p-2 h-1/5">
        {name}
        <BiChevronRight className="inline" size={20} />
      </p>
      <div className="h-2/3 mt-4 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width="50"
          height="50"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryTile;

import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const CategoryTile = ({ categoryData }) => {
  const {
    attributes: {
      name,
      theme,
      slug,
      thumbnail: {
        data: {
          attributes: { url },
        },
      },
    },
  } = categoryData;

  return (
    <Link
      href={`/categories/${slug}`}
      style={{ backgroundColor: theme }}
      className="mt-8 w-2/5 h-[30vh] rounded-md shadow-md"
    >
      <p className="text-xs font-bold p-2 h-1/5">
        {name}
        <BiChevronRight className="inline" size={20} />
      </p>
      <div className="h-2/3 mt-4 flex items-center justify-center">
        <Image
          src={url}
          alt={name}
          width="50"
          height="50"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  );
};

export default CategoryTile;

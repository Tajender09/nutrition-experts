import Image from "next/image";

const RecommendationCard = ({ itemData = {} }) => {
  return (
    <div className="mt-5 w-2/5 xs:w-1/3 lg:w-1/4 mx-4 flex-shrink-0 border-2">
      <div className="w-full p-5 h-40 bg-dim_grey">
        <Image
          src={itemData?.thumbnail?.url}
          alt="Whey Protein"
          width={50}
          height={50}
          className="mx-auto h-full w-full object-contain saturate-150 brightness-105 mix-blend-multiply"
        />
      </div>
      <div className="p-2">
        <p className="text-xs text-center font-semibold truncate">
          {itemData?.name}
        </p>
        <p className="text-xs text-center">{itemData?.brand}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;

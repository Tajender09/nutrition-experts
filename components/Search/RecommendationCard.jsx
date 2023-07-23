import Image from "next/image";

const RecommendationCard = ({ image, name }) => {
  return (
    <div className="mt-5 w-2/5 xs:w-1/3 lg:w-1/4 mx-4 flex-shrink-0 border-2">
      <div className="w-full p-5 h-40 bg-dim_grey">
        <Image
          src={image}
          alt="Whey Protein"
          width={50}
          height={50}
          className="mx-auto h-full w-full object-contain"
        />
      </div>
      <div className="py-2">
        <p className="text-xs text-center font-semibold">Optimum Nutrition</p>
        <p className="text-xs text-center">{name}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;

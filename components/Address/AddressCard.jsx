const AddressCard = () => {
  return (
    <div className="bg-white flex items-center mt-4 p-2 border-[1px] h-36 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
      <div className="h-full flex flex-col justify-evenly md:p-3">
        <p className="text-sm font-semibold mt-2 md:text-sm md:w-11/12">
          Tajender Batra
        </p>
        <p className="text-xs md:text-sm md:w-11/12">2 THA 25 Jawahar Nagar</p>
        <p className="text-xs md:text-sm md:w-11/12">Jaipur, Rajasthan</p>
        <p className="text-xs md:text-sm md:w-11/12">302004</p>
        <p className="text-xs md:text-sm md:w-11/12">
          Mobile: <span className="font-semibold">9116511522</span>
        </p>
      </div>
    </div>
  );
};

export default AddressCard;

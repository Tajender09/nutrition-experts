import Wrapper from "./Wrapper";
import { FaRegUser, FaChevronRight } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiUser, BiCategory } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import Link from "next/link";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <aside
      className={`absolute ${
        showMobileMenu ? "left-0" : "-left-full"
      } top-0 h-full w-full max-w-lg bg-white z-10 transition-[left] duration-500`}
    >
      <div className="bg-primary text-white h-1/5">
        <Wrapper className="h-full flex flex-col justify-center">
          <div className="mb-2 flex justify-between items-center">
            <span className="bg-white p-2 rounded-md text-black">
              <FaRegUser size={20} />
            </span>
            <HiX
              onClick={() => setShowMobileMenu(false)}
              className="text-[25px]"
            />
          </div>
          <div className="flex items-center mt-1">
            <p className="font-semibold">Tajender Batra</p>&nbsp;
            <RxDotFilled />
            &nbsp;
            <p className="text-sm font-medium">Male (22 years)</p>
          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <Link href="/" className="flex justify-between items-center mt-6">
            <span className="flex items-center font-bold text-sm">
              <BiCategory size={25} />
              &nbsp;Categories
            </span>
            <FaChevronRight />
          </Link>
          <Link href="/" className="flex justify-between items-center mt-6">
            <span className="flex items-center font-bold text-sm">
              <FiTag size={22} />
              &nbsp;Offers Zone
            </span>
            <FaChevronRight />
          </Link>
        </Wrapper>
        <hr className="mt-6" />
      </div>
      <div>
        <Wrapper>
          <Link href="/" className="flex justify-between items-center mt-6">
            <span className="flex items-center font-bold text-sm">
              <AiOutlineFileText size={25} />
              &nbsp;Order History
            </span>
            <FaChevronRight />
          </Link>
          <Link href="/" className="flex justify-between items-center mt-6">
            <span className="flex items-center font-bold text-sm">
              <IoLocationOutline size={25} />
              &nbsp;Saved Addresses
            </span>
            <FaChevronRight />
          </Link>
          <Link href="/" className="flex justify-between items-center mt-6">
            <span className="flex items-center font-bold text-sm">
              <BiUser size={25} />
              &nbsp;Profile Details
            </span>
            <FaChevronRight />
          </Link>
        </Wrapper>
        <hr className="mt-6" />
      </div>
      <Wrapper className="absolute bottom-8">
        <button className="w-full border-primary border-2 text-primary py-2 bg-white uppercase font-bold hover:bg-primary hover:text-white">
          Logout
        </button>
      </Wrapper>
    </aside>
  );
};

export default MobileMenu;
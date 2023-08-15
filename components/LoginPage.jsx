import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { BsPatchCheck } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { useRouter } from "next/router";

const LoginPage = ({ children }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div className="lg:h-screen flex items-center justify-center lg:justify-between">
        <div className="w-full xs:w-3/4 md:w-1/2 lg:w-1/3 lg:mx-auto">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Nutrition Experts"
              priority
              width={150}
              height={50}
              className="mt-5 mx-auto"
            />
          </Link>
          {router.pathname === "/signup" ? (
            <>
              <h2 className="text-2xl font-semibold text-center mt-5">
                Create your account
              </h2>
              <p className="font-medium text-disabled text-center mt-1">
                Lets get started with your fitness journey
              </p>
            </>
          ) : (
            <></>
          )}
          <button className="flex gap-2 items-center justify-center border-[1px] w-full py-2 rounded-full mt-4">
            <Image
              src="/google_icon.png"
              width={20}
              height={20}
              alt="Google Icon"
            />
            <span className="font-semibold">Login with Google</span>
          </button>
          <p className="relative text-center text-disabled font-semibold my-2 before:absolute before:h-[1px] before:w-[45%] before:bg-dim_grey before:left-0 before:top-1/2 before:translate-y-1/2  after:absolute after:h-[1px] after:w-[45%] after:bg-dim_grey after:right-0 after:top-1/2 after:translate-y-1/2">
            or
          </p>
          {children}
          {router.pathname === "/signup" ? (
            <p className="text-sm">
              Already have an account?{" "}
              <Link className="font-semibold text-primary" href="/login">
                Log in
              </Link>
            </p>
          ) : (
            <p className="text-sm">
              New to Nutrition Experts?{" "}
              <Link className="font-semibold text-primary" href="/signup">
                Sign up
              </Link>
            </p>
          )}
        </div>
        <div className="hidden lg:block w-1/2 rounded-md relative after:absolute after:w-full after:h-full after:bg-black/[0.6] after:top-0 after:left-0 after:rounded-md">
          <img
            src="/login-banner.webp"
            className="h-full object-contain rounded-md"
          />
          <div className="absolute text-white bottom-8 z-10 text-center">
            <h1 className="text-2xl font-semibold">
              Fuel Your Fitness Journey with Top-Notch Health Supplements!
            </h1>
            <p className="my-3">
              Discover the Best Health Supplements for Optimal Results and
              Recovery!
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="inline-flex items-center gap-2 border-[1px] border-white rounded-full px-4 py-1">
                <BsPatchCheck />{" "}
                <span className=" text-sm">100% Genuine Products</span>
              </p>
              <p className="inline-flex items-center gap-2 border-[1px] border-white rounded-full px-4 py-1">
                <FiTruck />{" "}
                <span className=" text-sm">
                  Two Day Delivery in Jaipur Area
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;

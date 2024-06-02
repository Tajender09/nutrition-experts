import LoginPage from "@/components/LoginPage";
import { RiLoader4Fill } from "react-icons/ri";
import { submitDataToApi } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserData } from "@/store/userSlice";
import { notifyError } from "@/utils/notify";
import { useDispatch } from "react-redux";

const Signup = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleValueChange = ({ target }) => {
    const { name, value } = target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await submitDataToApi({
        endpoint: `/api/auth/local/register`,
        body: user,
      });
      setLoader(false);
      if (`${response.statusCode}`.startsWith("2")) {
        const user = {
          id: response.data.user.id,
          username: response.data.user.username,
          phone: response.data.user.phone,
          token: response.data.jwt,
          previousOrders: [],
          savedAddresses: [],
          wishlist: [],
        };
        dispatch(addUserData(user));
        router.push("/");
      } else {
        notifyError(response?.data?.error?.message);
      }
    } catch (err) {
      notifyError();
    }
  };

  return (
    <LoginPage>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          className="font-medium px-3 relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full"
        >
          Name
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4"
          type="text"
          placeholder="Enter your name"
          name="username"
          id="username"
          value={user.username}
          onChange={handleValueChange}
          required
        />
        <br />
        <label
          htmlFor="email"
          className="mt-4 px-3 font-medium relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full"
        >
          Email
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4"
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleValueChange}
          required
        />
        <br />
        <label
          htmlFor="phone"
          className="mt-4 px-3 font-medium relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full"
        >
          Mobile Number
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4"
          type="tel"
          maxLength="10"
          placeholder="Enter your mobile number"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={handleValueChange}
          required
        />
        <br />
        <label
          htmlFor="password"
          className="mt-4 px-3 font-medium relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full"
        >
          Password
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4 font-[caption] placeholder:font-['Urbanist']"
          type="password"
          placeholder="Enter your password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleValueChange}
          required
        />
        <br />
        <button
          type="submit"
          className="bg-primary text-white font-semibold p-2 rounded-full w-full transition-transform active:scale-95 mt-2 mb-1 hover:brightness-90 outline-none flex items-center justify-center gap-1"
        >
          Sign Up
          {loader ? <RiLoader4Fill className="animate-spin" /> : <></>}
        </button>
      </form>
      <ToastContainer />
    </LoginPage>
  );
};

export default Signup;

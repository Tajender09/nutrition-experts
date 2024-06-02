import LoginPage from "@/components/LoginPage";
import { submitDataToApi } from "@/utils/api";
import { useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addUserData } from "@/store/userSlice";
import { notifyError } from "@/utils/notify";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  //---------- States ---------//
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);

  //---------- Functions ---------//
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
        endpoint: `/api/auth/local`,
        body: user,
      });
      setLoader(false);
      if (`${response.statusCode}`.startsWith("2")) {
        const user = {
          id: response.data.user.id,
          username: response.data.user.username,
          phone: response.data.user.phone,
          token: response.data.jwt,
          previousOrders: response.data.user.previousOrders || [],
          savedAddresses: response.data.user.savedAddresses || [],
        };
        dispatch(addUserData(user));
        router.push("/");
      } else {
        notifyError(response?.data?.error?.message);
      }
    } catch (err) {
      setLoader(false);
      notifyError();
    }
  };

  return (
    <LoginPage>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="identifier"
          className="font-medium px-3 relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full"
        >
          Enter mobile phone number or email
        </label>
        <br />

        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4"
          type="text"
          placeholder="Enter your mobile number or email"
          required
          pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
          name="identifier"
          id="identifier"
          value={user.identifier}
          onChange={handleValueChange}
        />
        <br />
        <label className="mt-4 font-medium px-3 relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full">
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
          className="bg-primary text-white font-semibold p-2 outline-none rounded-full w-full transition-transform active:scale-95 mt-2 mb-1 hover:brightness-90 flex items-center justify-center gap-1"
        >
          Login
          {loader ? <RiLoader4Fill className="animate-spin" /> : <></>}
        </button>
      </form>
      <ToastContainer />
    </LoginPage>
  );
};

export default Login;

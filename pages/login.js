import LoginPage from "@/components/LoginPage";

const Login = () => {
  return (
    <LoginPage>
      <form>
        <label className="font-medium relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full">
          Email
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <label className="mt-4 font-medium relative after:content-['*'] after:text-lg after:text-red-600 after:top-0 after:left-full">
          Password
        </label>
        <br />
        <input
          className="outline-none border-[1px] px-4 py-2 rounded-full w-full mb-4 font-[caption] placeholder:font-['Urbanist']"
          type="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <button
          type="submit"
          className="bg-primary text-white font-semibold p-2 rounded-full w-full transition-transform active:scale-95 mt-2 mb-1 hover:brightness-90"
        >
          Login
        </button>
      </form>
    </LoginPage>
  );
};

export default Login;

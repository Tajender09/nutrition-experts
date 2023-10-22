import { useSelector } from "react-redux";

export const useGetUserInfo = () => {
  const userInfo = useSelector(({ userSlice }) => userSlice.userData);
  const isLoggedIn = Boolean(Object.keys(userInfo).length);

  return {
    userInfo,
    isLoggedIn,
  };
};

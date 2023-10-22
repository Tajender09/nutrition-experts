import { useSelector } from "react-redux";

export const getDiscountPercent = (price, mrp) => {
  const discount = mrp - price;

  const discountPercentage = (discount / mrp) * 100;
  return discountPercentage.toFixed();
};

export const amount = (number = 0) => {
  return `₹ ${parseInt(number).toLocaleString("en-In")}`;
};

export const capitalize = (string = "") => {
  let brokenString = string?.split(" ") || [];
  const capitalizedArray = brokenString.map(
    (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)
  );

  return capitalizedArray.join(" ");
};

export const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  // Month is zero-based in JavaScript, so we subtract 1 from the month.
  const date = new Date(year, month - 1, day);

  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

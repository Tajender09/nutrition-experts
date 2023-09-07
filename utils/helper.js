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

export const storeUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const isLoggedIn = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const logUserOut = () => {
  localStorage.clear();
};

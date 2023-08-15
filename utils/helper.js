export const getDiscountPercent = (price, mrp) => {
  const discount = mrp - price;

  const discountPercentage = (discount / mrp) * 100;
  return discountPercentage.toFixed();
};

export const getCartData = (cartItems, cartProducts) => {
  let totalDiscount = 0;

  const totalPrice = cartItems?.reduce((acc, cartItem) => {
    let currentProduct =
      cartProducts?.find((product) => product?.id === cartItem?.productId) ||
      {};

    let currentSize = currentProduct?.hasFlavour
      ? currentProduct?.sizes?.find(
          (variant) =>
            +variant?.size === cartItem?.selectedSize &&
            variant?.flavour === cartItem?.selectedFlavour
        )
      : currentProduct?.sizes?.find(
          (variant) => +variant?.size === cartItem?.selectedSize
        );

    acc = +currentSize?.mrp * cartItem?.quantity + acc;
    totalDiscount =
      totalDiscount +
      (+currentSize?.mrp * cartItem?.quantity -
        +currentSize?.price * cartItem?.quantity);
    return acc;
  }, 0);

  return { totalDiscount, totalPrice };
};

export const getProductPrice = (productData) => {
  let productMrp = 0;
  let productPrice = 0;
  let productSize = productData?.hasFlavour
    ? productData?.sizes?.find(
        (variant) =>
          +variant?.size === productData?.selectedSize &&
          variant?.flavour === productData?.selectedFlavour
      )
    : productData?.sizes?.find(
        (variant) => +variant?.size === productData?.selectedSize
      );

  productPrice = productSize?.price * productData?.quantity;
  productMrp = productSize?.mrp * productData?.quantity;

  return { productPrice, productMrp };
};

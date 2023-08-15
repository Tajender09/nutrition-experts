import Link from "next/link";
import Image from "next/image";
// import { getDiscountPercent } from "@/utils/helper";

// const ProductCard = ({ data: { attributes: product, id } }) => {
const ProductCard = ({ link }) => {
  return (
    // <Link href={`/product/${product.slug}`} className="cursor-pointer">
    <Link href={`/product/1`} className="cursor-pointer">
      <div className="bg-dim_grey w-full h-80 flex items-center justify-center rounded-md">
        <img
          // width={500}
          // height={500}
          className="h-3/4 object-contain saturate-150 brightness-105 mix-blend-multiply"
          src={link}
          // src={product.thumbnail.data.attributes.url}
          alt="Product"
        />
      </div>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-semibold">Product name</h2>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-black/[0.9]">
            {/* ₹{product.price} */}₹ 7,000
          </p>
          <p className="text-base font-medium line-through text-black/[0.5]">
            {/* ₹{product.mrp} */}₹ 12,000
          </p>
          <p className="ml-auto text-base font-medium text-primary">
            {/* {getDiscountPercent(product.price, product.mrp)}% Off */}
            20% Off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

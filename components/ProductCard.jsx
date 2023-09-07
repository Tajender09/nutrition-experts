import Link from "next/link";
import Image from "next/image";
import { amount, getDiscountPercent } from "@/utils/helper";

const ProductCard = ({ data: { attributes: product } }) => {
  return (
    <Link href={`/product/${product.slug}`} className="cursor-pointer">
      <div className="bg-dim_grey w-full h-80 flex items-center justify-center rounded-md">
        <Image
          width={500}
          height={500}
          className="h-3/4 object-contain saturate-150 brightness-105 mix-blend-multiply"
          src={product?.thumbnail?.data?.attributes?.url}
          alt={product?.name}
        />
      </div>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-semibold truncate">{product?.name}</h2>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-black/[0.9]">
            {amount(product?.price)}
          </p>
          <p className="text-base font-medium line-through text-black/[0.5]">
            {amount(product?.mrp)}
          </p>
          <p className="ml-auto text-base font-medium text-primary">
            {getDiscountPercent(product?.price, product?.mrp)}% Off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

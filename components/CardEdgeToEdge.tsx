"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useAddToCartAnimation } from "@/components/useAddToCartAnimation";
import SpotlightCard from "@/components/SpotlightCart";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

type CardEdgeToEdgeprops = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export function CardEdgeToEdge({
  id,
  title,
  description,
  image,
  price,
}: CardEdgeToEdgeprops) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = useAddToCartAnimation();

  return (

<SpotlightCard>
  <Card className="flex h-full w-full flex-col overflow-hidden border border-violet-100/70 bg-site-card shadow-sm transition-shadow duration-300 hover:shadow-lg">

    {/* Title */}
    <CardHeader className="h-24 justify-center px-6">
      <CardTitle className="line-clamp-2 text-lg font-semibold text-slate-700">
        {title}
      </CardTitle>
    </CardHeader>

    {/* Image */}
    <div className="h-56 w-full overflow-hidden px-6">
      <img
        src={image}
        alt={title}
        data-product-image={id}
        className="h-full w-full object-contain transition-transform duration-500"
      />
    </div>

    {/* Separator */}
    <div className="mx-6 border-t border-violet-200/60" />

    {/* Buttons */}
    <CardFooter className="h-20 justify-end gap-3 px-6">

      <MagneticButton
       className="rounded-full bg-pink-100 px-5 py-2 text-sm font-medium text-pink-500 shadow-sm transition-all duration-300 hover:shadow-md"
        onClick={() =>
          handleAddToCart({
            id,
            title,
            price,
            image,
          })
        }
      >
        Add to cart
      </MagneticButton>

      <Button
        onClick={() => {
          router.push(`/serverreq/${id}`);
        }}
        className="rounded-full bg-violet-500 px-5 text-white shadow-sm transition-all duration-300 hover:bg-violet-600 hover:shadow-md"
      >
        View
      </Button>

    </CardFooter>

  </Card>
</SpotlightCard>
  );
}

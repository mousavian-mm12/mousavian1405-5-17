"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";


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


const handleAddToCart = () => {
  const product = {
    id,
    title,
    price,
    image,
    quantity: 1,
  };

  console.log("ADD TO CART:", product);

  dispatch(addToCart(product));
};

  return (
    <Card className="flex h-full w-full flex-col bg-slate-200">

      {/* Title */}
      <CardHeader className="h-24">
        <CardTitle className="line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Image */}
      <div className="h-56 w-full overflow-hidden px-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Description */}
      {/* <CardContent className="flex-1">
        <div className="h-40 overflow-y-auto border-t bg-muted/50 p-4 text-sm leading-relaxed">
          <p>{description}</p>
        </div>
      </CardContent> */}

      {/* Buttons */}
      <CardFooter className="h-16 justify-end gap-2">
        <Button variant="outline" onClick={handleAddToCart}>Add To Cart</Button>
        <Button 
        onClick={()=> {router.push(`/serverreq/${id}`)}}
        >view
        </Button>
      </CardFooter>

    </Card>
  );
}
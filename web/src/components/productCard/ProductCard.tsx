import { FormatValue } from "@/utils/formatPrice";
import { Card } from "./style";
import { useRouter } from "next/navigation";

interface ProductCard {
  image: string;
  title: string;
  price: number;
  id: string;
}

export function ProductCard(props: ProductCard) {
  const router = useRouter();
  const price = FormatValue(props.price);

  const handleNavigate = () => {
    router.push("/product?id=" + props.id);
  };
  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}

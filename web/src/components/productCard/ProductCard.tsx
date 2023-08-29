import { FormatValue } from "@/utils/formatPrice";
import { Card } from "./style";

interface ProductCard {
  image: string;
  title: string;
  price: number;
}

export function ProductCard(props: ProductCard) {
  const price = FormatValue(props.price);
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}

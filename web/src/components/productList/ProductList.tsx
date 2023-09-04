"use client";

import { UseProducts } from "@/hooks/useProducts";
import { ProductCard } from "../productCard/ProductCard";
import { ListContainer } from "./style";

interface ProducListProps {}

export function ProducList(props: ProducListProps) {
  const { data } = UseProducts();
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
}

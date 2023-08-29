"use client";

import { UseProducts } from "@/hooks/useProducts";

interface ProducListProps {}

export function ProducList(props: ProducListProps) {
  const { data } = UseProducts();
  console.log(data);
  return <></>;
}

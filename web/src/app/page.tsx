"use client";

import { FilterBar } from "@/components/filterBar/FilterBar";
import { ProducList } from "@/components/productList/ProductList";
import { PageWrapper } from "./style";

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProducList />
    </PageWrapper>
  );
}

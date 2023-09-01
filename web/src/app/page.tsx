"use client";

import { FilterBar } from "@/components/filterBar/FilterBar";
import { ProducList } from "@/components/productList/ProductList";
import { PageWrapper } from "./style";
import { DefaultPageLayout } from "@/components/defaultPageLayout/DefaultPageLayout";

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProducList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}

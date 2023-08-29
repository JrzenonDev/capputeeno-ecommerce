"use client";

import { FilterBar } from "@/components/filterBar/FilterBar";
import styles from "./page.module.css";
import { ProducList } from "@/components/productList/ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProducList />
      </main>
    </QueryClientProvider>
  );
}

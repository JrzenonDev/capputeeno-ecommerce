"use client";

import { FilterBar } from "@/components/filterBar/FilterBar";
import styles from "./page.module.css";
import { ProducList } from "@/components/productList/ProductList";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProducList />
    </main>
  );
}

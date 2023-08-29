"use client";
import { FilterList, FilterItem } from "./style";

interface FilterByTypeProps {}

export function FilterByType(props: FilterByTypeProps) {
  return (
    <FilterList>
      <FilterItem selected>Todos os produtos</FilterItem>
      <FilterItem selected={false}>Camisetas</FilterItem>
      <FilterItem selected={false}>Canecas</FilterItem>
    </FilterList>
  );
}

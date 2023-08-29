"use client";
import { FilterByType } from "../filterByType/FilterByType";
import { FilterBarProps } from "./style";

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterBarProps>
      <FilterByType />
    </FilterBarProps>
  );
}

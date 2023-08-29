"use client";
import { useFilter } from "@/hooks/useFilter";
import { FilterList, FilterItem } from "./style";
import { FilterType } from "@/types/filterTypes";

interface FilterByTypeProps {}

export function FilterByType(props: FilterByTypeProps) {
  const { type, setType } = useFilter();
  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}

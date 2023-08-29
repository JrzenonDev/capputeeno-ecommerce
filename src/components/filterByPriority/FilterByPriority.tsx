import { useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import { FilterContainer, PriorityFilter } from "./style";

interface FilterByPriorityProps {}

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - Maior</li>
          <li>Mais vendidos</li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}

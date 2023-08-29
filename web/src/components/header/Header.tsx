"use client";
import { PrimaryInput } from "../primaryInput/PrimaryInput";
import { TagHeader, Logo, sairaStencil } from "./style";
import { CartControl } from "../cartControl/CartControl";
import { useFilter } from "@/hooks/useFilter";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInput
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}

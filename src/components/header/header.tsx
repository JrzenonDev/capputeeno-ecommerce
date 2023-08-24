"use client";
import { PrimaryInput } from "../primaryInput/PrimaryInput";
import { TagHeader, Logo, sairaStencil } from "./style";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInput placeholder="Procurando por algo específico?" />
      </div>
    </TagHeader>
  );
}

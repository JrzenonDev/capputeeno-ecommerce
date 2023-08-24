"use client";
import { TagHeader, Logo, sairaStencil } from "./style";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div></div>
    </TagHeader>
  );
}

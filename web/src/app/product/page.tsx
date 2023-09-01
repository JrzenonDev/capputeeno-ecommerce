"use client";

import { DefaultPageLayout } from "@/components/defaultPageLayout/DefaultPageLayout";
import { Container } from "./style";
import { BackButton } from "@/components/backButton/BackButton";

interface ProductsProps {}

export default function Products(props: ProductsProps) {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>Informações do produto</section>
      </Container>
    </DefaultPageLayout>
  );
}

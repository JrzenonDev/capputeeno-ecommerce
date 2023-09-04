"use client";

import { DefaultPageLayout } from "@/components/defaultPageLayout/DefaultPageLayout";
import { Container, ProductInfo } from "./style";
import { BackButton } from "@/components/backButton/BackButton";
import { useProduct } from "@/hooks/useProduct";
import { FormatValue } from "@/utils/formatPrice";
import { ShoppingBagIcon } from "@/components/icons/ShoppingBagIcon";

interface ProductsProps {}

export default function Products({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id });
      }
      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, quantity: 1, id: searchParams.id }];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{FormatValue(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <ShoppingBagIcon /> Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}

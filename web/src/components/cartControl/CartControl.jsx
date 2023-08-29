import { CartIcon } from "../icons/CartIcon";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Container, CartCount } from "./style";

export function CartControl() {
  const { value } = useLocalStorage("cart-items");
  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}

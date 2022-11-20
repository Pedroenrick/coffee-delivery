import {
  CardCoffeeContainer,
  ContainerImage,
  TagContainer,
  Tag,
  CoffeeTitle,
  CoffeeDescription,
  ContainerCheckout,
  ContainerQuantity,
  ButtonAddToCart,
} from "./CardCoffee.styles";
import traditionalCoffee from "../../assets/coffees/expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

export function CardCoffee() {
  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <CardCoffeeContainer>
      <ContainerImage>
        <img src={traditionalCoffee} alt="expresso" />
      </ContainerImage>

      <TagContainer>
        <Tag>TRADICIONAL</Tag>
      </TagContainer>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <ContainerCheckout>
        <p>
          R$<span>9,90</span>
        </p>
        <ContainerQuantity>
          <button onClick={handleRemoveQuantity}>
            <Minus size={20} weight="fill" />
          </button>
          <span>{quantity}</span>
          <button onClick={handleAddQuantity}>
            <Plus size={20} weight="fill" />
          </button>
        </ContainerQuantity>
        <ButtonAddToCart>
          <ShoppingCart size={20} weight="fill" />
        </ButtonAddToCart>
      </ContainerCheckout>
    </CardCoffeeContainer>
  );
}

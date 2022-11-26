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
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeProps } from "./CardCoffee.types";

export function CardCoffee({name, description, price, tags, image, altImg}: CoffeeProps) {
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
        <img src={image} alt={altImg} />
      </ContainerImage>

      <TagContainer>
        {tags.map((tag) => (
        <Tag>{tag}</Tag>
        ))}
      </TagContainer>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>
       {description}
      </CoffeeDescription>

      <ContainerCheckout>
        <p>
          R$<span>{new Intl.NumberFormat('pt-BR').format(price)}</span>
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

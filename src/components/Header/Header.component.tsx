import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  StyledHeader,
  Location,
  ContainerButtons,
  ContainerShoppingCart,
} from "./Header.styles";

export function Header(): JSX.Element {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo coffee delivery" />
      </div>
      <ContainerButtons>
        <Location>
          <MapPin size={32} weight="fill" />
          Porto Alegre, RS
        </Location>
        <ContainerShoppingCart>
          <ShoppingCart size={32} weight="fill" />
        </ContainerShoppingCart>
      </ContainerButtons>
    </StyledHeader>
  );
}

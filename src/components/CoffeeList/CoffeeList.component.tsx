import { CardCoffee } from "../CardCoffee/CardCoffee.component";
import { CoffeeListContainer, GridCoffee } from "./CoffeeList.styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <GridCoffee>
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
      </GridCoffee>
    </CoffeeListContainer>
  );
}

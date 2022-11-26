import { CardCoffee } from "../CardCoffee/CardCoffee.component";
import { CoffeeListContainer, GridCoffee } from "./CoffeeList.styles";
import {coffees} from "../../utils/coffees";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <GridCoffee>
        {coffees.map((coffee) => (
          <CardCoffee 
            key={coffee.id} 
            name={coffee.name} 
            description={coffee.description} 
            image={coffee.image} 
            altImg={coffee.altImg} 
            price={coffee.price} 
            tags={coffee.tags }
          />
        ))}
      </GridCoffee>
    </CoffeeListContainer>
  );
}

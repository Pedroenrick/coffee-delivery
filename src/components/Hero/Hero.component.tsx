import {
  ContainerImage,
  ContainerTextHero,
  Grid,
  StyledHero,
  TextHero,
  CartIcon,
  TimerIcon,
  PackageIcon,
  CupIcon,
} from "./Hero.styles";
import hero from "../../assets/hero.png";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export function Hero() {
  return (
    <StyledHero>
      <ContainerTextHero>
        <TextHero>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextHero>

        <Grid>
          <div>
            <p>
              <CartIcon>
                <ShoppingCart size={22} weight="fill" />
              </CartIcon>
              Compra simples e segura
            </p>
            <p>
              <PackageIcon>
                <Package size={22} weight="fill" />
              </PackageIcon>
              Embalagem mantém o café intacto
            </p>
          </div>
          <div>
            <p>
              <TimerIcon>
                <Timer size={22} weight="fill" />
              </TimerIcon>
              Entrega rapida e rastreada
            </p>
            <p>
              <CupIcon>
                <Coffee size={22} weight="fill" />
              </CupIcon>
              O café chega fresquinho até você
            </p>
          </div>
        </Grid>
      </ContainerTextHero>
      <ContainerImage>
        <img src={hero} alt="hero" width={476} height={360} />
      </ContainerImage>
    </StyledHero>
  );
}

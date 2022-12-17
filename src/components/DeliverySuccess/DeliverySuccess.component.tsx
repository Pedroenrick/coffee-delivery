import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  ContainerImg,
  ContainerInfos,
  Content,
  DeliverySuccessContainer,
  DollarIcon,
  InfosDelivery,
  Paragraph,
  PinIcon,
  TimerIcon,
} from "./DeliverySuccess.styles";
import illustration from "../../assets/Illustration.png";

export function DeliverySuccess() {
  return (
    <DeliverySuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <Paragraph>
          Agora é só aguardar que logo o café chegará até você
        </Paragraph>
      </div>

      <Content>
        <ContainerInfos>
          <InfosDelivery>
            <PinIcon>
              <MapPin size={24} fill="white" color="white" weight="fill" />
            </PinIcon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
              </p>
              <p> Farrapos - Porto Alegre, RS</p>
            </div>
          </InfosDelivery>
          <InfosDelivery>
            <TimerIcon>
              <Timer size={24} fill="white" color="white" weight="fill" />
            </TimerIcon>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfosDelivery>
          <InfosDelivery>
            <DollarIcon>
              <CurrencyDollar
                size={24}
                fill="white"
                color="white"
                weight="fill"
              />
            </DollarIcon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfosDelivery>
        </ContainerInfos>
        <ContainerImg>
          <img src={illustration} alt="" />
        </ContainerImg>
      </Content>
    </DeliverySuccessContainer>
  );
}

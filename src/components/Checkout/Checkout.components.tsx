import {
  CardAddress,
  CardTotalCoffee,
  CheckoutContainer,
  ContainerInput,
  ContainerTitle,
  PaymentConditions,
  PaymentConditionsButton,
  PaymentConditionsButtons,
  StyledForm,
  StyledInput,
} from "./Checkout.styles";

import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CardAddress>
        <h2>Complete seu pedido</h2>
        <StyledForm action="">
          <ContainerTitle>
            <MapPin size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </ContainerTitle>

          <StyledInput name="cep" inputWidth="37%" placeholder="CEP" />
          <StyledInput name="street" placeholder="Rua" />

          <ContainerInput>
            <StyledInput name="number" inputWidth="60%" placeholder="Número" />
            <StyledInput name="complement" placeholder="Complemento" />
          </ContainerInput>

          <ContainerInput>
            <StyledInput
              name="district"
              inputWidth="75%"
              placeholder="Bairro"
            />
            <StyledInput name="city" placeholder="Cidade" />
            <StyledInput name="state" inputWidth="20%" placeholder="UF" />
          </ContainerInput>
        </StyledForm>
        <PaymentConditions>
          <ContainerTitle>
          <CurrencyDollar size={24} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma de pagamento que
                deseja pagar
              </p>
            </div>
          </ContainerTitle>
          <PaymentConditionsButtons>
            <PaymentConditionsButton>
              <CreditCard size={24} />
              CARTÃO DE CRÉDITO
            </PaymentConditionsButton>
            <PaymentConditionsButton>
              <Bank size={24} />
              CARTÃO DE DÉBITO
            </PaymentConditionsButton>
            <PaymentConditionsButton>
              <Money size={24} />
              DINHEIRO
            </PaymentConditionsButton>
          </PaymentConditionsButtons>
        </PaymentConditions>
      </CardAddress>
      <CardTotalCoffee>
        <h2>Cafés selecionados</h2>
      </CardTotalCoffee>
    </CheckoutContainer>
  );
}

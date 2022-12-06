import {
  ButtonCheckout,
  CardAddress,
  CardBody,
  CardCheckoutContainer,
  CardFooter,
  CardTotalCoffee,
  CheckoutContainer,
  ContainerInput,
  ContainerQuantity,
  ContainerTitle,
  PaymentConditions,
  PaymentConditionsButton,
  PaymentConditionsButtons,
  RemoveButton,
  StyledForm,
  StyledInput,
  ButtonsContainer,
  InfosCoffee,
  ListCoffee,
  InfosCoffeeTitle,
  CardFooterTotal,
} from "./Checkout.styles";

import tradicional from "../../assets/coffees/americano.png";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CardAddress>
        <h2>Complete seu pedido</h2>
        <StyledForm action="">
          <ContainerTitle>
            <MapPinLine size={24} color="#C47F14"/>
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
            <CurrencyDollar size={24} color="#8047f8"/>
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
              <CreditCard size={24} color="#8047f8"/>
              CARTÃO DE CRÉDITO
            </PaymentConditionsButton>
            <PaymentConditionsButton>
              <Bank size={24} color="#8047f8"/>
              CARTÃO DE DÉBITO
            </PaymentConditionsButton>
            <PaymentConditionsButton>
              <Money size={24} color="#8047f8"/>
              DINHEIRO
            </PaymentConditionsButton>
          </PaymentConditionsButtons>
        </PaymentConditions>
      </CardAddress>

      <CardTotalCoffee>
        <h2>Cafés selecionados</h2>
        <CardCheckoutContainer>
          <CardBody>
            <ListCoffee>
              <img src={tradicional} alt="" />
              <InfosCoffee>
                <InfosCoffeeTitle>
                  <span>Expresso Tradicional</span>
                  <span>R$ 9,90</span>
                </InfosCoffeeTitle>

                <ButtonsContainer>
                  <ContainerQuantity>
                    <button>
                      <Minus size={20} weight="fill" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={20} weight="fill" />
                    </button>
                  </ContainerQuantity>

                  <RemoveButton>
                    <Trash size={24} color="#8047f8" />
                    <span>Remover</span>
                  </RemoveButton>
                </ButtonsContainer>
              </InfosCoffee>
            </ListCoffee>
          </CardBody>

          <CardFooter>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <CardFooterTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
            </CardFooterTotal>
            <ButtonCheckout>CONFIRMAR PEDIDO</ButtonCheckout>
          </CardFooter>
        </CardCheckoutContainer>
      </CardTotalCoffee>
    </CheckoutContainer>
  );
}

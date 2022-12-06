import styled from "styled-components";
import { FormProps } from "./Checkout.types";

export const CheckoutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding-bottom: 2rem;

  & > svg {
    background: transparent;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    fill: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  div {
    margin-left: 0.5rem;
    background: transparent;
    line-height: 1.8;

    h3 {
      font-family: "Roboto", sans-serif;
      font-weight: normal;
      background: transparent;
    }

    p {
      background: transparent;
      font-family: "Roboto", sans-serif;
      font-weight: normal;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const StyledInput = styled.input<FormProps>`
  padding: 10px;
  background: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-hover"]};
  border-radius: 8px;
  font-size: 1rem;

  width: ${({ inputWidth }) => inputWidth || "100%"};
`;

export const ContainerInput = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors["base-input"]};
  gap: 10px;
`;

export const CardAddress = styled.div`
  max-width: 60%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaymentConditions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const PaymentConditionsButtons = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const PaymentConditionsButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 250px;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  gap: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  & > svg {
    background: transparent;
    fill: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const CardTotalCoffee = styled.div`
  max-width: 40%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 1rem;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
`;

export const CardBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const ListCoffee = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-hover"]};
  background: ${({ theme }) => theme.colors["base-card"]};
  gap: 2rem;

  & > img {
    background: transparent;
    width: 90px;
  }
`;

export const InfosCoffee = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const InfosCoffeeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors["base-card"]};

  span {
    background: ${({ theme }) => theme.colors["base-card"]};
    font-size: 1.4rem;

    &:last-child {
      font-weight: bold;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors["base-button"]};

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    & > svg {
      background: transparent;
      fill: ${({ theme }) => theme.colors.purple};
    }
  }

  span {
    background: ${({ theme }) => theme.colors["base-button"]};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.25rem;
    margin: 0 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 8px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors["base-button"]};

  & > svg {
    background: transparent;
    fill: ${({ theme }) => theme.colors.purple};
  }

  span {
    background: ${({ theme }) => theme.colors["base-button"]};
    font-size: 1.2rem;
    padding: 0.25rem;
  }
`;

export const CardFooter = styled.div`
  padding: 1rem 0;
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["base-card"]};
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors["base-card"]};

    span {
      background: ${({ theme }) => theme.colors["base-card"]};
    }
  }
`;

export const CardFooterTotal = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ButtonCheckout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;

import styled from "styled-components";
import { FormProps } from "./Checkout.types";

export const CheckoutContainer = styled.section`
  display: flex;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
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

export const StyledInput = styled.input<FormProps>`
  padding: 10px;
  background: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-hover"]};
  border-radius: 5px;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const PaymentConditions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
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
    border: 0;
    gap: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors["base-button"]};

    & > svg {
        background: transparent;
        fill: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.purple};
    }
`;

export const CardTotalCoffee = styled.div`
  max-width: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

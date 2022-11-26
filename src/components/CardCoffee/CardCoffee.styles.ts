import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 284px;
  height: 331px;
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 1rem;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  margin: 3rem 0 3rem 0;
`;

export const ContainerImage = styled.div`
  margin-top: -3rem;
  border-radius: 99999999px;
  background: ${({ theme }) => theme.colors["base-card"]};

  img {
    width: 100%;
    height: 100%;
    background: transparent;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  max-width: 100%;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  font-size: 0.75rem;
  padding: 0.2rem .7rem;
  font-weight: bold;
  border-radius: 16px;
`;

export const CoffeeTitle = styled.h3`
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const CoffeeDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const ContainerCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors["base-card"]};
  gap: 1rem;

  p {
    background: ${({ theme }) => theme.colors["base-card"]};
    font-size: 0.9rem;

    span {
      background: ${({ theme }) => theme.colors["base-card"]};
      margin-left: 0.2rem;
      font-family: "Baloo 2", cursive;
      font-size: 1.6rem;
    }
  }
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

export const ButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors["purple-dark"]};
  border-radius: 8px;
  padding: 0.8rem;
  border: 0;
  transition: 0.2s;

  & > svg {
    background: transparent;
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`;

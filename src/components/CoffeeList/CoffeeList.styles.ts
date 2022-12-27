import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  h2 {
    padding: 0.4rem;
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 1.3;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      font-size: 2.5rem;
    }
  }
`;

export const GridCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

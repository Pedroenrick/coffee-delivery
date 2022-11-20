import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  h2 {
    padding: .4rem;
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 1.3;
  }
`;

export const GridCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

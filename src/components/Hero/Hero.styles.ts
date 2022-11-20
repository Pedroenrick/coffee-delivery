import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 6rem 0 0 0;
  max-width: 80%;
  line-height: 1.3;
`;

export const ContainerTextHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 4.5rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  p {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  max-width: 40%;
  justify-content: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    p {
      display: flex;
      align-items: center;
      width: 50%;
      font-size: 1.2rem;
      padding: 0.5rem;
      margin: 0.2rem;
    }
  }
`;

const BaseIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  margin-right: 1rem;

  border-radius: 999999px;

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const CartIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};

  & > svg {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const TimerIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors.yellow};

  & > svg {
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

export const PackageIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors["base-text"]};

  & > svg {
    background: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const CupIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors.purple};

  & > svg {
    background: ${({ theme }) => theme.colors.purple};
  }
`;

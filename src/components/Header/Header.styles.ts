import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  padding: 1rem 0rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerButtons = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
`;

const BaseButtonsHeader = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  border: 0;
  font-size: 1rem;
`;

export const Location = styled(BaseButtonsHeader)`
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};

  & > svg {
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    fill: ${({ theme }) => theme.colors["purple-dark"]};
  }
`;

export const ContainerShoppingCart = styled(BaseButtonsHeader)`
  background: ${({ theme }) => theme.colors["yellow-light"]};

  & > svg {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    fill: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

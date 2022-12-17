import styled from "styled-components";

export const DeliverySuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
  gap: 2rem;

  h1 {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const BaseIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  margin-right: 1rem;

  border-radius: 999999px;
 
  & > svg {
    background-color: transparent;
  }
`;

export const PinIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TimerIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const DollarIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme.colors['yellow-dark']};
`;

export const ContainerInfos = styled.div`
  width: 50%;
  padding: 1.8rem;
  background: linear-gradient(${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.background}) padding-box,
  linear-gradient(to right, ${({ theme }) => theme.colors.yellow}, ${({ theme }) => theme.colors.purple}) border-box;
  border: 1px solid transparent;
  border-top-right-radius: 3rem;
  border-top-left-radius: .5rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: .5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfosDelivery = styled.div`
  display: flex;
  padding: 1.5rem;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;

  img{
    width: 100%;
  }
`;

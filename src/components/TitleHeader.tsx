import styled from "styled-components";

const TitleHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.XL};
  color: ${({ theme }) => theme.veryLightBlue};
  width: 100%;
  @media screen and (min-width: 1600px) {
    font-size: calc(${({ theme }) => theme.fontSizes.XXL} - 2rem);
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
  }

  @media screen and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fontSizes.L} - 0.5rem);
  }
  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
  }

  span {
    color: ${({ theme }) => theme.orange};
    margin-right: 10px;
  }
`;

export default TitleHeader;

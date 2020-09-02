import styled from "styled-components";
import { BackgroundImageUrl } from "../utils/interfaces";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 120px;
  min-width: 560px;
  height: 280px;
  background-image: url(${(props: BackgroundImageUrl) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 50%;

  @media screen and (min-width: 1600px) {
    min-width: 700px;
    margin: 0 0 0 12vw;
  }

  @media screen and (max-width: 1280px) {
    min-width: 480px;
  }

  @media screen and (max-width: 960px) {
    min-width: 300px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 0 70px;
    min-width: 270px;
  }
  @media screen and (max-width: 560px) {
    min-width: 320px;
    margin: 0 0 20px 8vw;
  }
`;

export default HeaderWrapper;

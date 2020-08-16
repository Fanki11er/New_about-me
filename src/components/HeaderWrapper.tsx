import styled from "styled-components";
import { BackgroundImageUrl } from "../utils/interfaces";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0 120px;
  width: 500px;
  height: 250px;
  background-image: url(${(props: BackgroundImageUrl) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 50%;
`;

export default HeaderWrapper;

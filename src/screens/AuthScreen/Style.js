import styled from "styled-components";
import { IsPhone, Theme } from "../../utils";

export const Main = styled.div`
  width: 60%;
  margin-top: 135px;
  margin-left: 20%;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  h2 {
    font-size: 18px;
    color: ${Theme.lightBody};
  }
`;

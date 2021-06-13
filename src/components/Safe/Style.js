import styled from "styled-components";
import { Theme } from "../../utils";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items; flex-end;
  margin-top: 30px;
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  h1 {
    margin-top: 0px;
    margin-left: 13px;
    font-size: 12px !important;
    line-height: 15px;
    color: ${Theme.lightBody}
  }
`;

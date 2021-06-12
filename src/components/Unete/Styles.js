import styled from "styled-components";
import { Theme } from "../../utils";

export const Box = styled.div`
  width: 426px;
  height: 108px;
  border-radius: 6px;
  margin-top: 28px;
  border: 1px solid ${Theme.white};
  background: ${Theme.white};
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  &:hover {
    background: ${Theme.lightPrimary};
    cursor: pointer;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    border: 1px solid ${Theme.primary};
  }
  div {
    display: flex;
    flex-direction: column;
    h1 {
      margin-top: 26px;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
    }
    h2 {
      margin-top: 4px;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

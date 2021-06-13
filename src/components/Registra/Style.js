import styled from "styled-components";
import { Theme } from "../../utils";

export const Square = styled.div`
  user-select: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid ${Theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.white};
  background: ${(props) => (props.clicked ? Theme.primary : Theme.white)};
  cursor: pointer;
`;

export const Acepto = styled.div`
  display: flex;
  width: 70%;
  min-width: 300px;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 24px;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
    color: ${Theme.middleBody};
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 19px;
  }
`;

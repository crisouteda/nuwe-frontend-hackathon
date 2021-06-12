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

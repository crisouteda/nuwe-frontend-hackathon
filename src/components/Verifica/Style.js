import styled from "styled-components";
import { Theme } from "../../utils";

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.white};
  background: ${Theme.primary};
`;

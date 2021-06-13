import styled from "styled-components";
import { IsPhone, Theme } from "../../utils";

export const Box = styled.div`
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  margin-top: 30px;
  height: 108px;
  border-radius: 6px;
  border: 1px solid ${Theme.white};
  background: ${Theme.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  &:hover {
    background: ${Theme.lightPrimary};
    cursor: pointer;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    border: 1px solid ${Theme.primary};
  }
  div {
    padding-left: 25px;
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
  svg,
  p {
    position: absolute;
    transform: translate(-50%);
  }
`;

export const HideableSvg = styled.p`
  padding-bottom: 13px;
  @media (max-width: ${IsPhone}) {
    opacity: 0;
  }
`;

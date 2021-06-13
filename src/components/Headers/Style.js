import styled from "styled-components";
import { IsPhone, Theme } from "../../utils";

export const Login = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  h2 {
    color: ${Theme.middleBody};
    font-size: 18px;
  }
  h3 {
    color: ${Theme.primary};
    margin-right: 81px;
    margin-left: 10px;
    font-size: 18px;
  }
  @media (max-width: ${IsPhone}) {
    position: fixed;
    bottom: 100px;
    width: 300px;
    text-align: center;
    left: calc(50% - 150px);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin-left: 5%;
  height: 30px;
  margin-top: 70px;
  @media (max-width: ${IsPhone}) {
  }
`;

export const Volver = styled.div`
  color: ${Theme.middleBody};
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${IsPhone}) {
  }
  h1 {
    font-size: 14px;
    color: ${Theme.lightBody};
    margin: 0px;
  }
  h2 {
    font-size: 16px;
    color: ${Theme.middleBody};
    margin: 0px;
  }
`;

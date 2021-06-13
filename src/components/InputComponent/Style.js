import styled from "styled-components";
import { IsPhone } from "../../utils";
import { Theme } from "../../utils/Colors";

export const InputBox = styled.div`
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  height: 100px;
  margin-top: 30px;
`;

export const Input = styled.input`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  background: #ffffff;
  outline: none;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  height: 64px;
  margin-top: 14px;
  color: ${Theme.darkBody};
  padding-left: ${(props) => (props.isPhone ? "150px" : "20px")};
  font-size: 16px;
  width: 100% !important;
  max-width: 70vw;
  transition: all 0.1s ease-in-out;
  &:focus {
    border: 1px solid ${Theme.primary};
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }
  &:hover {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }
`;

export const Label = styled.label`
  width: 100%;
  align-self: flex-start;
  color: ${(props) => (props.focus ? Theme.primary : Theme.label)};
`;

export const ShowPassword = styled.div`
  color: ${Theme.black};
  position: absolute;
  right: 20px;
  bottom: 22.5px;
  cursor: pointer;
`;

export const FlagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 350px;
  @media (max-width: ${IsPhone}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FlagPicker = styled.div`
  color: ${Theme.black};
  position: absolute;
  ${(props) => (props.isCountry ? "right: 30px;" : "left: 30px;")}
  align-items: center;
  bottom: 22.5px;
  cursor: pointer;
  display: flex;
`;

export const CountryContainer = styled.div`
  display: flex;
  cursor: pointer;
  height: 70px;
  width: 80px;
  flex-direction: column;
  border-radius: 5px;
  padding: 15px;
  align-items: center;
  justify-content: space-around;
  margin: 10px 20px;
  &:hover {
    background: rgba(79, 147, 74, 0.4);
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => !props.success && "0"};
  color: ${Theme.white};
  background: ${Theme.primary};
`;

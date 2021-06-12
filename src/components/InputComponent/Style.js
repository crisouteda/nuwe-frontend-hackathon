import styled from "styled-components";
import { Theme } from "../../utils/Colors";

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  height: 64px;
  margin-top: 14px;
  padding-left: ${(props) => (props.isPhone ? "140px" : "30px")};
  padding-right: ${(props) => (props.isPhone ? "0px" : "110px")};
  color: ${Theme.darkBody};
  font-size: 16px;
  width: 100%;
  transition: all 0.1s ease-in-out;
  &:focus {
    border: 1px solid ${Theme.primary};
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }
  &:hover {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }
  &:disabled {
    box-shadow: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`;

export const Label = styled.label`
  width: 100%;
  align-self: flex-start;
  color: ${(props) => (props.focus ? Theme.primary : Theme.label)};
`;

export const InputBox = styled.div`
  max-width: 300px;
  width: 100%;
  position: relative;
  height: 100px;
  margin-top: 30px;
`;

export const ShowPassword = styled.div`
  color: ${Theme.black};
  position: absolute;
  right: -80px;
  bottom: 20px;
  cursor: pointer;
`;

export const FlagPicker = styled.div`
  color: ${Theme.black};
  position: absolute;
  left: 30px;
  align-items: center;
  bottom: 20px;
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

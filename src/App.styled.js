import styled from "styled-components";
import { IsPhone, Theme } from "./utils";

export const AppLayout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 46.25% 53.75%;
  @media (max-width: ${IsPhone}) {
    grid-template-columns: 100%;
  }
`;

export const AuthArt = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.9;
`;

export const AuthImage = styled.img`
  margin-top: 10%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: ${Theme.primary};
  opacity: 0.9;
  width: 46.25vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AuthIntro = styled.div`
  width: 71%;
  display: flex;
  flex-direction: column;
`;

export const ArtContainer = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: ${IsPhone}) {
    display: none;
  }
`;

export const DescriptionText = styled.div`
  color: ${Theme.white};
  font-size: 20px;
  line-height: 38px;
  align-self: center;
  margin: 70px 0 40px 0;
`;

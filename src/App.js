import {
  AppLayout,
  ArtContainer,
  AuthArt,
  AuthImage,
  AuthIntro,
  DescriptionText,
  Overlay,
} from "./App.styled";
import Building from "./assets/Background.png";
import { ReverseL, Quotes } from "./assets/Icons";
import { AuthScreen } from "./screens";

function App() {
  return (
    <>
      <AppLayout>
        <ArtContainer>
          <Overlay>
            <AuthIntro>
              <Quotes />
              <DescriptionText>
                Nuwe es la platforma que convierte el desarrollo profesional, la
                búsquda de trabajo y la conexiones de personas y empresas en un
                juego. Haciendo que puedas centrarte en lo que te gusta,
                programar, diseñar, crear, planear...
              </DescriptionText>
              <div style={{ alignSelf: "flex-end" }}>
                <ReverseL />
              </div>
            </AuthIntro>
          </Overlay>
          <AuthArt>
            <AuthImage src={Building} />
          </AuthArt>
        </ArtContainer>
        <AuthScreen />
      </AppLayout>
    </>
  );
}

export default App;

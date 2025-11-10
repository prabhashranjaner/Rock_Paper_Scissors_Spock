import styled from "styled-components";

import Header from "./ui/Header";
import Game from "./ui/Game";

import GlobalStyles from "./styles/GlobalStyles";
import GameContextProvider from "./contexts/GameContextProvider";
import Rules from "./ui/Rules";

const Container = styled.div`
  margin: 0 auto;
  max-width: 90dvw;
  position: relative;
  height: 100dvh;

  @media (min-width: 786px) {
    max-width: 90%;
  }

  @media (min-width: 1080px) {
    max-width: 80%;
  }

  @media (min-width: 1440px) {
    max-width: 950px;
  }
`;

function App() {
  return (
    <GameContextProvider>
      <Container>
        <GlobalStyles />
        <Header />
        <Game />
        <Rules />
      </Container>
    </GameContextProvider>
  );
}

export default App;

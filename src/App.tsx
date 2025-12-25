import styled from "styled-components";
import Header from "./ui/Header";
import Game from "./ui/Game";
import GlobalStyles from "./styles/GlobalStyles";
import Rules from "./ui/Rules";
import media from "./styles/media";

const Container = styled.div`
  margin: 0 auto;
  max-width: 90dvw;
  position: relative;
  height: 100dvh;

  ${media.tablet} {
    max-width: 90%;
  }

  ${media.desktop} {
    max-width: 80%;
  }

  ${media.large} {
    max-width: 950px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Game />
      <Rules />
    </Container>
  );
}

export default App;

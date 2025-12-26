import styled from "styled-components";
import Header from "./ui/Header/Header";
import Game from "./ui/Game";
import GlobalStyles from "./styles/GlobalStyles";
import media from "./styles/media";
import Footer from "./ui/Footer/Footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 90dvw;
  min-height: 95dvh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

const MainStyle = styled.main`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <MainStyle>
        <Game />
      </MainStyle>
      <Footer />
    </Container>
  );
}

export default App;

import styled from "styled-components";
import { LabelSpan } from "../styles/styles";
import { useGameState } from "../contexts/useGameState";
import media from "../styles/media";

const StyledHeader = styled.header`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 5px solid var(--col-gray);
  border-radius: 10px;
  padding: 0.8rem 0.5rem;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 90%;
    padding: 0.8rem 0.8rem;
  }

  ${media.desktop} {
    max-width: 650px;
  }
`;

const LogoWrapper = styled.div`
  height: 70px;

  ${media.tablet} {
    height: 80px;
  }

  ${media.desktop} {
    height: 90px;
  }

  img {
    object-fit: contain;
  }
`;
const Scorecard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  background-color: white;
  text-align: center;
`;

const Label = styled(LabelSpan)`
  color: var(--col-blue-dark);

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.desktop} {
    font-size: 20px;
  }
`;

const Score = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--col-text);

  ${media.tablet} {
    font-size: 2.8rem;
  }

  ${media.desktop} {
    font-size: 3rem;
  }
`;

const Header = () => {
  const state = useGameState()!;
  return (
    <StyledHeader>
      <LogoWrapper>
        <img alt="logo" src="/images/logo-bonus.svg" />
      </LogoWrapper>

      <Scorecard>
        <Label>Score</Label>
        <Score>{state.points}</Score>
      </Scorecard>
    </StyledHeader>
  );
};

export default Header;

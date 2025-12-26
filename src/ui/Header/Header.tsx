import { useGameState } from "../../contexts/useGameState";
import {
  LabelStyle,
  LogoWrapperStyle,
  ScorecardStyle,
  ScoreStyle,
  StyledHeader,
} from "./Header.style";

const Header = () => {
  const state = useGameState()!;
  return (
    <StyledHeader>
      <LogoWrapperStyle>
        {state.mode === "classic" ? (
          <img alt="logo" src="/images/logo.svg" />
        ) : (
          <img alt="logo" src="/images/logo-bonus.svg" />
        )}
      </LogoWrapperStyle>

      <ScorecardStyle>
        <LabelStyle>Score</LabelStyle>
        <ScoreStyle>{state.points}</ScoreStyle>
      </ScorecardStyle>
    </StyledHeader>
  );
};

export default Header;

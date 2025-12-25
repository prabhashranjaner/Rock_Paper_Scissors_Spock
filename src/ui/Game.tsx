import styled from "styled-components";

import { useGameState } from "../contexts/useGameState";
import ReadyScreen from "./ReadyScreen";
import PlayerChoiceScreen from "./PlayerChoiceScreen";
import ChoiceRevealScreen from "./ChoiceRevealScreen";
import ResultScreen from "./ResultScreen";

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Game = () => {
  const state = useGameState();

  const { status } = state;

  return (
    <StyledGame>
      {status === "ready" && <ReadyScreen />}
      {status === "playerSelected" && <PlayerChoiceScreen />}
      {status === "computerRevealed" && <ChoiceRevealScreen />}
      {status === "result" && <ResultScreen />}
    </StyledGame>
  );
};

export default Game;

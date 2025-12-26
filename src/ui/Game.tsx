import { useGameState } from "../contexts/useGameState";
import PlayerChoiceScreen from "./PlayerChoiceScreen";
import ChoiceRevealScreen from "./ChoiceRevealScreen";
import ResultScreen from "./ResultScreen";
import ExtendedReadyScreen from "./ExtendedReadyScreen";
import ClassicReadyScreen from "./ClassicReadyScreen";

const Game = () => {
  const state = useGameState();

  const { status, mode } = state;

  return (
    <>
      {status === "ready" && mode === "classic" && <ClassicReadyScreen />}
      {status === "ready" && mode === "extended" && <ExtendedReadyScreen />}
      {status === "playerSelected" && <PlayerChoiceScreen />}
      {status === "computerRevealed" && <ChoiceRevealScreen />}
      {status === "result" && <ResultScreen />}
    </>
  );
};

export default Game;

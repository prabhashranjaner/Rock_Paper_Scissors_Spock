import styled from "styled-components";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { useGameState } from "../contexts/useGameState";

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Game = () => {
  const state = useGameState();

  const { step } = state;

  return (
    <StyledGame>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
    </StyledGame>
  );
};

export default Game;

import styled from "styled-components";
import { useGameDispatch } from "../contexts/useGameDospatch";
import Paper from "../components/Capsule/Paper";
import Scissors from "../components/Capsule/Scissors";
import Rock from "../components/Capsule/Rock";
import type { ClassicOptionType } from "../types/gamesTypes";

const StyledStepOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(/images/bg-triangle.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  gap: 9rem;
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 9.5rem;
`;

const Bottom = styled.div`
  margin: 0 auto;
`;

const ClassicReadyScreen = () => {
  const dispatch = useGameDispatch();

  const select = (choice: ClassicOptionType) =>
    dispatch({
      type: "player/select",
      mode: "classic",
      payload: choice,
    });

  return (
    <StyledStepOne>
      <Top>
        <Paper handleClick={() => select("paper")} />
        <Scissors handleClick={() => select("scissors")} />
      </Top>
      <Bottom>
        <Rock handleClick={() => select("rock")} />
      </Bottom>
    </StyledStepOne>
  );
};

export default ClassicReadyScreen;

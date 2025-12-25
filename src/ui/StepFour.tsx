import styled from "styled-components";
import { LabelSpan } from "../styles/styles";
import ElementSelect from "./ElementSelect";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";

const StyledStepFour = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (min-width: 1080px) {
    justify-content: space-around;
  }
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  align-items: center;

  @media (min-width: 786px) {
    gap: 2.5rem;
  }

  @media (min-width: 1080px) {
    gap: 3rem;
  }
`;

const Middle = styled.div`
  text-align: center;
`;

const Result = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 786px) {
    font-size: 2.8rem;
  }

  @media (min-width: 1080px) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--col-red-dark);
  font-weight: 600;
  outline: none;
  transition: transform 5000 ease-in-out;
  font-size: 0.6rem;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 500px) {
    font-size: 0.7rem;
    padding: 0.8rem 2rem;
  }

  @media (min-width: 786px) {
    font-size: 1rem;
    padding: 0.8rem 3rem;
  }

  @media (min-width: 1080px) {
    font-size: 1.2rem;
    padding: 1rem 3.2rem;
  }
`;

const StepFour = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

  return (
    <StyledStepFour>
      <ChoiceWrapper>
        <ElementSelect option={state.playerChoice} />

        <LabelSpan>You Picked</LabelSpan>
      </ChoiceWrapper>
      <Middle>
        <Result>
          {state.finalResult === "win"
            ? "You Win"
            : state.finalResult === "lose"
            ? "You Lose"
            : "Draw"}
        </Result>
        <Button onClick={() => dispatch({ type: "reset" })}>Play Again</Button>
      </Middle>
      <ChoiceWrapper>
        <ElementSelect option={state.computerChoice} />
        <LabelSpan>The House Picked</LabelSpan>
      </ChoiceWrapper>
    </StyledStepFour>
  );
};

export default StepFour;

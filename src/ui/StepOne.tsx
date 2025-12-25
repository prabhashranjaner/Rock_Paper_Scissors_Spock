import styled from "styled-components";
import Paper from "../components/Capsule/Paper";
import Scissors from "../components/Capsule/Scissors";
import Rock from "../components/Capsule/Rock";
import Lizard from "../components/Capsule/Lizard";
import Spock from "../components/Capsule/Spock";
import { useGameDispatch } from "../contexts/useGameDospatch";
import media from "../styles/media";

const StyledStepOne = styled.div`
  display: flex;
  align-items: center;
  background-image: url(/images/bg-pentagon.svg);
  background-size: 280px;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;

  ${media.tablet} {
    background-size: 450px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div``;

const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  ${media.tablet} {
    gap: 18rem;
  }

  ${media.desktop} {
    gap: 20rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;

  ${media.tablet} {
    gap: 5rem;
    margin-top: 8rem;
  }
`;

const StepOne = () => {
  const dispatch = useGameDispatch()!;

  return (
    <StyledStepOne>
      <Wrapper>
        <Top>
          <Scissors
            handleClick={() =>
              dispatch({ type: "playerChoice/add", payload: "scissors" })
            }
          />
        </Top>
        <Middle>
          <Spock
            handleClick={() =>
              dispatch({ type: "playerChoice/add", payload: "spock" })
            }
          />
          <Paper
            handleClick={() =>
              dispatch({ type: "playerChoice/add", payload: "paper" })
            }
          />
        </Middle>
        <Bottom>
          <Lizard
            handleClick={() =>
              dispatch({ type: "playerChoice/add", payload: "lizard" })
            }
          />
          <Rock
            handleClick={() =>
              dispatch({ type: "playerChoice/add", payload: "rock" })
            }
          />
        </Bottom>
      </Wrapper>
    </StyledStepOne>
  );
};

export default StepOne;

import styled from "styled-components";
import { Center } from "../styles/styles";
import type { ReactNode } from "react";
import { useGameState } from "../contexts/useGameState";

const StyledCapsule = styled.button`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: transform 5000 ease-in-out;

  background-image: radial-gradient(
    var(--col-${(props) => props.color}-light),
    var(--col-${(props) => props.color}-dark)
  );

  @media (min-width: 786px) {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: 1080px) {
    width: 9rem;
    height: 9rem;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);

    @media (min-width: 1080px) {
      width: 75%;
      height: 75%;
    }
  }

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1);
  }

  &:disabled {
    pointer-events: none;
  }
`;

const ImageWrapper = styled(Center)`
  width: 40%;
  height: 40%;
  z-index: 50;
  img {
    object-fit: contain;
  }
`;

const Capsule = ({ children, color, handleClick }: PropsType) => {
  const state = useGameState()!;
  return (
    <StyledCapsule
      color={color}
      disabled={state.step !== 1}
      onClick={handleClick}
    >
      <ImageWrapper>{children}</ImageWrapper>
    </StyledCapsule>
  );
};

export default Capsule;

type PropsType = {
  children: ReactNode;
  color: string;
  handleClick?: () => void | null;
};

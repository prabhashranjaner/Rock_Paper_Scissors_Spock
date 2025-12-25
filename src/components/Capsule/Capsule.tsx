import type { ReactNode } from "react";
import { useGameState } from "../../contexts/useGameState";
import { ImageWrapper, StyledCapsule } from "./Capsule.style";

type PropsType = {
  children: ReactNode;
  color: string;
  handleClick?: () => void | null;
};

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

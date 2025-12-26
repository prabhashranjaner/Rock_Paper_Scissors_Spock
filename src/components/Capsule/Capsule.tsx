import type { ReactNode } from "react";
import { useGameState } from "../../contexts/useGameState";
import { ImageWrapper, StyledCapsule } from "./Capsule.style";

type PropsType = {
  children: ReactNode;
  color: string;
  handleClick?: () => void | null;
  size?: "normal" | "large";
};

const Capsule = ({
  children,
  color,
  handleClick,
  size = "normal",
}: PropsType) => {
  const state = useGameState()!;
  return (
    <StyledCapsule
      color={color}
      disabled={state.status !== "ready"}
      onClick={handleClick}
      $size={size}
    >
      <ImageWrapper>{children}</ImageWrapper>
    </StyledCapsule>
  );
};

export default Capsule;

import ModalPortal from "./ModalPortal";
import useControllableState from "../../hooks/useControllableState";
import {
  CloseBtnStyle,
  HeadingStyled,
  ImageWrapperStyle,
  ModalStyle,
  OverlayStyle,
} from "./Modal.style";
import { useGameState } from "../../contexts/useGameState";

type PropsType = {
  defaultOpen?: boolean;
  open?: boolean;
  onClose?: () => void;
};

const Modal = ({ defaultOpen, open, onClose }: PropsType) => {
  const state = useGameState();
  const [isOpen, setIsOpen] = useControllableState({
    open,
    defaultOpen,
    onChange: (v) => !v && onClose?.(),
  });

  if (!isOpen) return null;

  return (
    <ModalPortal>
      <OverlayStyle
        role="dialog"
        aria-modal="true"
        onClick={() => setIsOpen(false)}
      >
        <ModalStyle onClick={(e) => e.stopPropagation()}>
          <CloseBtnStyle onClick={() => setIsOpen(false)}>❌</CloseBtnStyle>
          <HeadingStyled>RULES</HeadingStyled>
          <ImageWrapperStyle>
            {state.mode === "classic" ? (
              <img alt="classic rules" src="/images/image-rules.svg" />
            ) : (
              <img alt="bonus rules" src="/images/image-rules-bonus.svg" />
            )}
          </ImageWrapperStyle>
        </ModalStyle>
      </OverlayStyle>
    </ModalPortal>
  );
};

export default Modal;

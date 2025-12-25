import styled from "styled-components";
import { Center } from "../styles/styles";
import media from "../styles/media";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: white;
  backdrop-filter: blur(3px);
  z-index: 1000;
  transition: all 0.5s;

  ${media.desktop} {
    background-color: black;
    opacity: 50%;
  }
`;

const StyledModal = styled(Center)`
  position: fixed;
  padding: 3rem 2rem;
  z-index: 2000;
  width: 90%;
  height: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  ${media.desktop} {
    background-color: white;
    height: 60%;
    border-radius: 12px;
    gap: 2rem;
  }

  p {
    color: var(--col-text);
    font-size: 2rem;
    font-weight: 700;

    ${media.desktop} {
      margin-right: auto;
      font-size: 2.5rem;
    }
  }

  button {
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 0);
    border: none;
    outline: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: var(--col-gray);
    cursor: pointer;
    transition: transform 0.5s;
    transform: scale(1);

    &:hover {
      transform: scale(1.02);
    }

    ${media.mobile} {
      bottom: 30px;
    }

    ${media.desktop} {
      top: 50px;
      right: 50px;
      left: auto;
      bottom: auto;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 700px;

  ${media.desktop} {
    max-width: 450px;
  }
`;

const Modal = ({ handleClose }: PropsType) => {
  return (
    <>
      <StyledModal>
        <p>RULES</p>
        <ImageWrapper>
          <img alt="rules" src="/images/image-rules-bonus.svg" />
        </ImageWrapper>
        <button onClick={handleClose}>❌</button>
      </StyledModal>
      <Overlay />
    </>
  );
};

export default Modal;

type PropsType = {
  handleClose: () => void;
};

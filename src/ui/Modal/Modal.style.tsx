import styled from "styled-components";
import media from "../../styles/media";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: white;
  z-index: 100;
  transition: all 0.5s;

  ${media.tablet} {
    background-color: rgb(0 0 0 /0.5);

    display: grid;
    place-items: center;
  }
`;

export const CloseBtnStyle = styled.button`
  position: absolute;
  bottom: 50px;
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

  ${media.tablet} {
    top: 50px;
    right: 50px;
    left: auto;
    bottom: auto;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;
  inset: 0;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  z-index: 200;

  ${media.tablet} {
    position: relative;
    background-color: white;
    height: 80%;
    border-radius: 12px;
    width: 700px;
    gap: 2rem;
  }
`;

export const HeadingStyled = styled.p`
  color: var(--col-text);
  font-size: 2rem;
  font-weight: 700;

  ${media.tablet} {
    margin-right: auto;
    font-size: 2.5rem;
  }
`;

export const ImageWrapperStyle = styled.div`
  width: 100%;
  max-width: 700px;

  ${media.tablet} {
    max-width: 450px;
  }
`;

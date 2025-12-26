import styled, { css } from "styled-components";
import media from "../../styles/media";
import { Center } from "../../styles/styles";

const sizes = {
  normal: css`
    width: 5rem;
    height: 5rem;

    ${media.tablet} {
      width: 7rem;
      height: 7rem;
    }
  `,
  large: css`
    width: 8rem;
    height: 8rem;

    ${media.tablet} {
      width: 9rem;
      height: 9rem;
    }
  `,
};

export const StyledCapsule = styled.button<{ $size: "normal" | "large" }>`
  ${({ $size }) => sizes[$size]}
  position: relative;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: transform 5000 ease-in-out;

  background-image: radial-gradient(
    var(--col-${(props) => props.color}-light),
    var(--col-${(props) => props.color}-dark)
  );

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

    ${media.desktop} {
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

export const ImageWrapper = styled(Center)`
  width: 40%;
  height: 40%;
  z-index: 50;
  img {
    object-fit: contain;
  }
`;

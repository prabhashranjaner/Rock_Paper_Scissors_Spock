import styled from "styled-components";
import media from "../../styles/media";

export const FooterStyle = styled.footer`
  position: "fixed";
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ButtonStyle = styled.button`
  padding: 0.8rem;
  font-size: 12px;
  background-color: transparent;
  border: 2px solid var(--col-gray);
  border-radius: 8px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 5000 ease-in-out;
  white-space: nowrap;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }

  ${media.tablet} {
    font-size: 14px;
  }
`;

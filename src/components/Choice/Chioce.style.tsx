import styled from "styled-components";
import media from "../../styles/media";

export const StyledChoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5rem;

  ${media.tablet} {
    gap: 6rem;
  }

  ${media.desktop} {
    gap: 8rem;
  }
`;

export const SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
`;

export const BoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;

  ${media.mobile} {
    width: 9rem;
    height: 9rem;
  }

  ${media.tablet} {
    width: 12rem;
    height: 12rem;
  }

  ${media.desktop} {
    width: 13rem;
    height: 13rem;
  }
`;

export const CircleStyle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--col-grad-dark);

  @media (min-width: 786px) {
    width: 7rem;
    height: 7rem;
  }

  @media (min-width: 1080px) {
    width: 8rem;
    height: 8rem;
  }
`;

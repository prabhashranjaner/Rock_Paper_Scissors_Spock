import type { ReactNode } from "react";
import styled from "styled-components";

import { LabelSpan } from "../styles/styles";

const StyledChoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5rem;

  @media (min-width: 786px) {
    gap: 6rem;
  }

  @media (min-width: 1080px) {
    gap: 8rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;

  @media (min-width: 500px) {
    width: 9rem;
    height: 9rem;
  }

  @media (min-width: 786px) {
    width: 12rem;
    height: 12rem;
  }

  @media (min-width: 1080px) {
    width: 13rem;
    height: 13rem;
  }
`;

const Circle = styled.div`
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

const Choice = ({ elementOne, elementTwo }: PropsType) => {
  return (
    <StyledChoice>
      <Section>
        <Box>{elementOne || <Circle />}</Box>
        <LabelSpan>You Picked</LabelSpan>
      </Section>
      <Section>
        <Box>{elementTwo || <Circle />}</Box>
        <LabelSpan>The House Picked</LabelSpan>
      </Section>
    </StyledChoice>
  );
};

export default Choice;

type PropsType = {
  elementOne: ReactNode | null;
  elementTwo: ReactNode | null;
};

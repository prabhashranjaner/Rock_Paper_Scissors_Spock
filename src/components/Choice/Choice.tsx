import type { ReactNode } from "react";
import { LabelSpan } from "../../styles/styles";
import {
  BoxStyle,
  CircleStyle,
  SectionStyle,
  StyledChoice,
} from "./Chioce.style";

type PropsType = {
  elementOne: ReactNode | null;
  elementTwo: ReactNode | null;
};

const Choice = ({ elementOne, elementTwo }: PropsType) => {
  return (
    <StyledChoice>
      <SectionStyle>
        <BoxStyle>{elementOne || <CircleStyle />}</BoxStyle>
        <LabelSpan>You Picked</LabelSpan>
      </SectionStyle>
      <SectionStyle>
        <BoxStyle>{elementTwo || <CircleStyle />}</BoxStyle>
        <LabelSpan>The House Picked</LabelSpan>
      </SectionStyle>
    </StyledChoice>
  );
};

export default Choice;

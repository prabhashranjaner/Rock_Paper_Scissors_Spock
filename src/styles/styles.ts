import styled from "styled-components";

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LabelSpan = styled.span`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.8rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 786px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1080px) {
    font-size: 1.5rem;
  }
`;

export const StepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

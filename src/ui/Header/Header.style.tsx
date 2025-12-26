import styled from "styled-components";
import media from "../../styles/media";
import { LabelSpan } from "../../styles/styles";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 5px solid var(--col-gray);
  border-radius: 10px;
  padding: 0.8rem 0.5rem;
  margin: 0 auto;
  width: 100%;

  ${media.tablet} {
    max-width: 90%;
    padding: 0.8rem 0.8rem;
  }

  ${media.desktop} {
    max-width: 650px;
  }
`;

export const LogoWrapperStyle = styled.div`
  height: 70px;

  ${media.tablet} {
    height: 80px;
  }

  ${media.desktop} {
    height: 90px;
  }

  img {
    object-fit: contain;
  }
`;

export const ScorecardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  background-color: white;
  text-align: center;
`;

export const LabelStyle = styled(LabelSpan)`
  color: var(--col-blue-dark);

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.desktop} {
    font-size: 20px;
  }
`;

export const ScoreStyle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--col-text);

  ${media.tablet} {
    font-size: 2.8rem;
  }

  ${media.desktop} {
    font-size: 3rem;
  }
`;

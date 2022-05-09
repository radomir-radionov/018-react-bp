import styled from "styled-components";
import { colors, typography } from "styles";

export const QuestionsAndAnswersStyled = styled.div`
  padding: 160px 120px;

  @media (max-width: 970px) {
    padding: 120px 48px;
  }

  @media (max-width: 590px) {
    padding: 48px 16px;
  }
`;

export const Title = styled.p`
  margin-bottom: 64px;
  ${typography.H2};
`;

export const QuestionsWrapper = styled.div`
  & > div {
    border-bottom: 1px solid ${colors.NIGHT_4};
  }
`;

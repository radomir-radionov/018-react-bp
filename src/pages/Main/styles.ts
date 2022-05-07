import styled from "styled-components";
import { colors, typography } from "styles";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TypesOfWorkWrapper = styled.div`
  padding: 160px 120px;

  @media (max-width: 1070px) {
    padding: 120px 48px;
  }

  @media (max-width: 600px) {
    padding: 48px 16px;
  }
`;

export const TypesOfWorkTitle = styled.div`
  margin-bottom: 64px;
  ${typography.H2};
  color: ${colors.NIGHT_1};

  @media (max-width: 670px) {
    ${typography.H4};
  }
`;

export const ReviewsWrapper = styled.div`
  padding: 0 120px 160px;

  @media (max-width: 1100px) {
    padding: 0 48px 120px;
  }

  @media (max-width: 670px) {
    text-align: center;
  }
`;

export const ReviewsTitle = styled.div`
  margin-bottom: 64px;
  ${typography.H2};
  color: ${colors.NIGHT_1};

  @media (max-width: 670px) {
    ${typography.H4};
  }
`;

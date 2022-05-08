import styled from "styled-components";
import { colors, typography } from "styles";

export const WorkAdvantagesCardsStyled = styled.div`
  padding: 160px 120px;

  @media (max-width: 1070px) {
    padding: 120px 48px;
  }

  @media (max-width: 980px) {
    padding: 48px 16px;
    text-align: center;
  }
`;

export const Title = styled.p`
  margin-bottom: 64px;
  ${typography.H2};
  color: ${colors.NIGHT_1};

  @media (max-width: 670px) {
    ${typography.H4};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2);
  gap: 68px;

  @media (max-width: 1420px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6);
    gap: 48px;
  }
`;

export const CardWrapper = styled.div`
  @media (max-width: 980px) {
    & > div {
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: 20px;
      }

      & > div:last-of-type {
        margin-left: 0;
      }
    }
  }
`;

import styled from "styled-components";
import { colors, typography } from "styles";

export const ReviewStyled = styled.div``;

export const Title = styled.p`
  margin-bottom: 20px;
  ${typography.H3};
  color: ${colors.AUTUMN_2};

  @media (max-width: 670px) {
    ${typography.H4};
  }
`;

export const Description = styled.p`
  margin-bottom: 32px;
  ${typography.BODY2};
  color: ${colors.NIGHT_1};
`;

export const Client = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 670px) {
    justify-content: center;
  }
`;

export const Info = styled.div`
  margin-left: 23px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  ${typography.BODY1};
  font-weight: bold;
  color: ${colors.NIGHT_1};
`;

export const Location = styled.p`
  ${typography.BODY2};
  color: ${colors.NIGHT_1};
`;

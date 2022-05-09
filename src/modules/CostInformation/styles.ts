import styled from "styled-components";
import { colors, typography } from "styles";

export const CostInformationStyled = styled.div`
  padding-top: 32px;
  border-top: 1px solid ${colors.NIGHT_2};
`;

export const Description = styled.p`
  max-width: 812px;
  margin-bottom: 20px;
  ${typography.BODY3};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  ${typography.BODY1};
`;

export const Cost = styled.span`
  margin-left: 32px;
  ${typography.H4};
`;

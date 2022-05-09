import styled from "styled-components";
import { colors, typography } from "styles";

export const AttentionStyled = styled.div`
  display: flex;
  align-items: center;
  max-width: 870px;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: ${colors.AUTUMN_4};
`;

export const Description = styled.p`
  margin-left: 8px;
  ${typography.BODY3};
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

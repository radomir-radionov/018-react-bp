import styled from "styled-components";
import { colors, typography } from "styles";

export const DescriptionCatdStyled = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div``;

export const Information = styled.div`
  margin-left: 23px;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  ${typography.H4};
  color: ${colors.AUTUMN_2};
`;

export const Description = styled.p`
  ${typography.BODY2};
`;

export const ImplementationDate = styled.p`
  margin-bottom: 8px;
  ${typography.BODY3};
  color: ${colors.AUTUMN_2};
`;

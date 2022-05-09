import { RightArrowSVG } from "assets";
import styled from "styled-components";
import { colors, typography } from "styles";

export const BreadcrumbsStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const PrevCrumb = styled.span`
  ${typography.BODY2};
  ${colors.NIGHT_1};
  cursor: pointer;
`;

export const CurCrumb = styled.span`
  ${typography.BODY2};
  color: ${colors.AUTUMN_2};
`;

export const RightArrowIcon = styled(RightArrowSVG)`
  margin: 0 8px;
`;

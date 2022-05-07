import { LogoSVG } from "assets";
import styled from "styled-components";
import { colors, typography } from "styles";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 152px;
  padding: 0 120px;
  background-color: ${colors.NIGHT_1};

  @media (max-width: 900px) {
    padding: 0 27px;
  }

  @media (max-width: 505px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const LogoIcon = styled(LogoSVG)`
  cursor: pointer;
`;

export const Text = styled.p`
  ${typography.BODY2};
  color: ${colors.DAY};
`;

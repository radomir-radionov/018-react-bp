import styled from "styled-components";
import { CloseSVG, LogoSVG, MenuSVG } from "assets";
import { colors, typography } from "styles";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88px;
  padding: 0 120px;
  box-shadow: 0px 4px 20px ${colors.BOX_SHADOW_FOR_WHITE};

  @media (max-width: 900px) {
    padding: 0 27px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoIcon = styled(LogoSVG)`
  cursor: pointer;
`;

export const MenuIcon = styled(MenuSVG)`
  display: none;
  margin-right: 23px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const CloseIcon = styled(CloseSVG)`
  display: none;
  margin-right: 23px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-right: 48px;
  }

  & button:last-of-type {
    margin-right: 0px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-top: 32px;
  background-color: ${colors.NIGHT_1};
  text-align: center;

  & > * {
    width: 288px;
    margin-bottom: 32px;
  }

  & > p {
    color: ${colors.DAY};
  }
`;

export const MyApplicationText = styled.p`
  ${typography.BUTTON};
`;

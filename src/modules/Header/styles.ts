import styled from "styled-components";
import { LogoSVG } from "assets";
import { typography } from "styles";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88px;
  padding: 0 120px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoIcon = styled(LogoSVG)``;

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
`;

export const MyApplicationText = styled.p`
  ${typography.BUTTON};
`;

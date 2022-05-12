import { SIGN_BG_1 } from "assets";
import styled from "styled-components";

export const VerifyStyled = styled.div`
  flex: 1;
  background-image: url(${SIGN_BG_1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;

  @media (max-width: 550px) {
    padding-top: 0;
  }
`;

import styled from "styled-components";
import { BG_404 } from "assets";
import { typography } from "styles";

export const NotFoundErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  padding: 680px 24px 0;
  background-image: url(${BG_404});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;

  @media (max-width: 600px) {
    padding-top: 630px;
  }
`;

export const Title = styled.p`
  max-width: 600px;
  margin: 0 auto 48px;
  ${typography.BODY1};
  font-weight: 600;

  @media (max-width: 600px) {
    ${typography.BODY2};
    font-weight: 600;
  }
`;

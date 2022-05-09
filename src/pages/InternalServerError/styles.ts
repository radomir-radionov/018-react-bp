import { BG_500 } from "assets";
import styled from "styled-components";
import { typography } from "styles";

export const InternalServerErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  padding-top: 192px;
  padding-left: 120px;
  background-image: url(${BG_500});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1200px) {
    padding: 188px 24px 0;
  }

  @media (max-width: 600px) {
    padding: 48px 24px 0;
    text-align: center;
  }
`;

export const Title = styled.p`
  max-width: 600px;
  margin-bottom: 48px;
  ${typography.BODY1};
  font-weight: 600;

  @media (max-width: 600px) {
    ${typography.BODY2};
    font-weight: 600;
  }
`;

import styled from "styled-components";
import { colors, typography } from "styles";

interface IProps {
  $bgImage: string;
  $textColor: colors;
}

export const SubmitApplicationInfoStyled = styled.div<IProps>`
  padding: 86px 16px;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  p {
    color: ${({ $textColor }) => $textColor};
  }

  @media (max-width: 450px) {
    button {
      width: 100%;
    }
  }
`;

export const Title = styled.p`
  margin-bottom: 32px;
  ${typography.H2}

  @media (max-width: 1250px) {
    ${typography.H3}
  }

  @media (max-width: 850px) {
    ${typography.H4}
  }
`;

export const Description = styled.p`
  margin-bottom: 48px;
  ${typography.BODY2};

  @media (max-width: 850px) {
    ${typography.BODY_MOBILE}
  }
`;

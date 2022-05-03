import styled from "styled-components";
import { typography } from "styles";

export const PresentationStyled = styled.div`
  margin: 8px;
`;

export const ButtonWrapper = styled.div`
  button {
    margin-top: 12px;
    margin-right: 8px;
  }
`;

export const InputsWrapper = styled.div`
  input {
    margin-top: 12px;
    margin-right: 8px;
  }
`;

export const Header1 = styled.p`
  ${typography.H1};
`;

export const Header2 = styled.p`
  ${typography.H2};
`;

export const Header3 = styled.p`
  ${typography.H3};
`;

export const Header4 = styled.p`
  ${typography.H4};
`;

export const Body1 = styled.p`
  ${typography.BODY1};
`;

export const Body2 = styled.p`
  ${typography.BODY2};
`;

export const Body3 = styled.p`
  ${typography.BODY3};
`;

export const BodyMobile = styled.p`
  ${typography.BODY_MOBILE};
`;

export const ButtonTitle = styled.p`
  ${typography.BUTTON};
`;

export const LinkTitle = styled.p`
  ${typography.LINK};
`;

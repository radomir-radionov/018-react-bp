import { Button } from "components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, typography } from "styles";

export const SignUpFormStyled = styled.div`
  max-width: 600px;
  padding: 64px 120px 48px;
  border-radius: 16px;
  background-color: ${colors.NIGHT_1};
`;

export const Form = styled.form`
  input[type="text"],
  input[type="password"] {
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  margin-bottom: 48px;
  text-align: center;
  ${typography.H3};
  color: ${colors.DAY};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${typography.BODY3};
  color: ${colors.DAY};

  & input {
    margin-right: 15px;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 28px;
  margin-bottom: 48px;
`;

export const BottomText = styled.p`
  text-align: center;
  ${typography.BODY2};
  color: ${colors.DAY};
`;

export const InternalLink = styled(Link)`
  ${typography.BODY2};
  color: ${colors.AUTUMN_2};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckboxContent = styled.div``;

export const InternalLinkWhite = styled(Link)`
  ${typography.BODY3};
  color: ${colors.DAY};
  text-decoration: underline;
`;

import { Button } from "components";
import styled from "styled-components";
import { colors, typography } from "styles";

export const VerifyFormStyled = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 64px 120px 48px;
  border-radius: 16px;
  background-color: ${colors.NIGHT_1};

  @media (max-width: 550px) {
    padding: 32px 16px 20px;
  }
`;

export const Form = styled.form`
  & > input {
    margin-bottom: 8px;
  }
`;

export const Title = styled.p`
  margin-bottom: 48px;
  text-align: center;
  ${typography.H4};
  color: ${colors.DAY};

  @media (max-width: 550px) {
    margin-bottom: 32px;
  }
`;

export const Description = styled.p`
  margin-bottom: 32px;
  ${typography.BODY2};
  color: ${colors.DAY};
`;

export const TimerText = styled.p`
  margin-bottom: 32px;
  ${typography.BODY3};
  color: ${colors.DAY};
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 28px;
  margin-bottom: 48px;
`;

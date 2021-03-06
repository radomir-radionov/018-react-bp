import styled from "styled-components";
import { colors, typography } from "styles";

export const ExampleModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 600px;
  min-height: 300px;
  margin-right: -50%;
  padding: 64px 111px;
  border-radius: 16px;
  background-color: ${colors.NIGHT_1};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h3`
  margin-bottom: 48px;
  text-align: center;
  ${typography.H3};
  color: ${colors.DAY};
`;

export const Form = styled.form`
  button {
    width: 100%;
    margin-top: 32px;
  }
`;

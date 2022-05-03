import styled from "styled-components";
import { colors, typography } from "styles";

interface IProps {
  disabled: boolean;
  ref?: any;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  margin-bottom: 8px;
  ${typography.BODY2};
  color: ${colors.DAY};
`;

export const InputTextStyled = styled.input<IProps>`
  max-height: 48px;
  padding: 14px 20px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${colors.NIGHT_1};
  ${typography.BODY3};
  color: ${colors.NIGHT_2};
  cursor: ${({ disabled }: IProps) => (disabled ? "default" : "text")};

  &::placeholder {
    ${typography.BODY3};
    color: ${colors.NIGHT_2};
  }

  &:hover {
    border-color: ${colors.AUTUMN_2};
  }

  &:focus-visible {
    outline: 2px solid ${colors.AUTUMN_2};
    color: ${colors.NIGHT_1};
  }

  &:focus {
    border-color: ${colors.AUTUMN_2};
    color: ${colors.NIGHT_1};
  }

  &:disabled {
    border-color: ${colors.NIGHT_4};
    color: ${colors.NIGHT_4};
  }
`;

export const ErrorMessage = styled.small`
  ${typography.BODY3};
  color: ${colors.ERROR};
`;

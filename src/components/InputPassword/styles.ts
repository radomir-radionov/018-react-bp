import styled from "styled-components";
import { colors, typography } from "styles";

interface IProps {
  disabled: boolean;
  maxLength?: string | number;
  ref?: any;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > svg {
    position: absolute;
    top: 40px;
    right: 14px;
    cursor: pointer;
  }
`;

export const LabelStyled = styled.label`
  margin-bottom: 8px;
  ${typography.BODY2};
  color: ${colors.DAY};
`;

export const InputStyled = styled.input.attrs(({ maxLength }) => ({
  maxLength: maxLength,
}))<IProps>`
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
    outline: ${({ disabled }: IProps) =>
      !disabled && `2px solid ${colors.AUTUMN_2}`};
    border-color: ${colors.AUTUMN_2};
  }

  &:focus {
    outline: none;
    border-color: ${colors.AUTUMN_2};
    color: ${colors.NIGHT_1};
  }

  &:disabled {
    border-color: ${colors.NIGHT_4};
    color: ${colors.NIGHT_4};
  }
`;

export const ErrorMessage = styled.small`
  margin-top: 3px;
  ${typography.BODY3};
  color: ${colors.ERROR};
`;

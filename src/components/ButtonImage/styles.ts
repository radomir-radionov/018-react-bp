import { BUTTON_VARIANTS } from "components/Button/types";
import styled, { css } from "styled-components";
import { colors, typography } from "styles";

interface IProps {
  disabled: boolean;
  $variant: BUTTON_VARIANTS;
}

export const ButtonImageStyled = styled.button<IProps>`
  display: flex;
  align-items: center;
  max-height: 48px;
  padding: 12px 24px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${colors.AUTUMN_2};
  background-color: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? colors.AUTUMN_2 : colors.DAY};
  ${typography.BUTTON};
  color: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? colors.DAY : colors.AUTUMN_2};
  cursor: ${({ disabled }: IProps) => (disabled ? "default" : "pointer")};
  transition-duration: 0.3s;

  &:hover {
    & svg path {
      fill: ${colors.AUTUMN_1};
    }

    ${({ disabled }: IProps) =>
      !disabled &&
      css`
        border-color: ${colors.AUTUMN_1};
        background-color: ${colors.DAY};
        box-shadow: 2px 4px 8px ${colors.BOX_SHADOW_FOR_BUTTON};
        color: ${colors.AUTUMN_1};
      `};
  }

  &:active {
    border-color: ${colors.AUTUMN_1};
    background-color: ${colors.AUTUMN_1};
    color: ${colors.DAY};
  }

  &:disabled {
    border-color: ${colors.AUTUMN_4};
    background-color: ${colors.AUTUMN_4};
    color: ${colors.DAY};
  }
`;

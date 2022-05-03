import styled from "styled-components";
import { colors, typography } from "styles";
import { BUTTON_VARIANTS } from "./types";

interface IProps {
  disabled: boolean;
  $variant: BUTTON_VARIANTS;
}

export const ButtonStyled = styled.button<IProps>`
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

  &:hover {
    border-color: ${colors.AUTUMN_1};
    background-color: ${colors.DAY};
    color: ${colors.AUTUMN_1};
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

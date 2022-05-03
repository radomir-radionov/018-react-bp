import { ReactNode, MouseEvent } from "react";
import { ButtonStyled } from "./styles";
import { BUTTON_VARIANTS } from "./types";

interface IProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  variant?: BUTTON_VARIANTS;
}

const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  type = "button",
  variant = BUTTON_VARIANTS.PRIMARY,
}: IProps) => {
  return (
    <ButtonStyled
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      $variant={variant}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

import { BUTTON_VARIANTS } from "components/Button/types";
import { ReactNode, MouseEvent } from "react";
import { ButtonImageStyled } from "./styles";

interface IProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  variant?: BUTTON_VARIANTS;
}

const ButtonImage = ({
  children,
  className,
  disabled = false,
  onClick,
  type = "button",
  variant = BUTTON_VARIANTS.PRIMARY,
}: IProps) => {
  return (
    <ButtonImageStyled
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      $variant={variant}
    >
      {children}
    </ButtonImageStyled>
  );
};

export default ButtonImage;

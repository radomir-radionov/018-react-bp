import { forwardRef } from "react";
import { CheckboxStyled } from "./styles";

interface IProps {
  checked?: boolean;
  error?: string;
  ref?: any;
}

const Checkbox = forwardRef(({ checked, error = "", ...rest }: IProps, ref) => {
  return (
    <CheckboxStyled
      type="checkbox"
      checked={checked}
      $error={error}
      ref={ref}
      {...rest}
    />
  );
});

export default Checkbox;

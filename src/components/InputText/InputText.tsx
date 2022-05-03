import { ChangeEvent, forwardRef } from "react";
import {
  ErrorMessage,
  InputTextStyled,
  InputWrapper,
  LabelStyled,
} from "./styles";

interface IProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  htmlFor?: string;
  onChange: (event: ChangeEvent<any>) => void;
  placeholder?: string;
}

const InputText = forwardRef(
  (
    {
      className,
      disabled = false,
      error = "",
      label = "",
      htmlFor = "",
      onChange,
      placeholder = "",
      ...rest
    }: IProps,
    ref
  ) => {
    return (
      <InputWrapper>
        {label && htmlFor && (
          <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>
        )}
        <InputTextStyled
          className={className}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          name={htmlFor}
          type="text"
          ref={ref}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

export default InputText;

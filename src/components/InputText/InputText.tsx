import { ChangeEvent, forwardRef } from "react";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  htmlFor?: string;
  type?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const InputText = forwardRef(
  (
    {
      className,
      disabled = false,
      error = "",
      label = "",
      htmlFor = "",
      type = "text",
      value,
      onChange,
      placeholder = "",
      maxLength,
      ...rest
    }: IProps,
    ref
  ) => {
    return (
      <InputWrapper>
        {label && htmlFor && (
          <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>
        )}
        {label && !htmlFor && <LabelStyled>{label}</LabelStyled>}
        <InputStyled
          className={className}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          name={htmlFor}
          type={type}
          ref={ref}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

export default InputText;

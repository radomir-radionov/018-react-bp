import { EyeCloseSVG, EyeSVG } from "assets";
import { ChangeEvent, forwardRef, useState } from "react";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  htmlFor?: string;
  type?: "password" | "text";
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const InputPassword = forwardRef(
  (
    {
      className,
      disabled = false,
      error = "",
      label = "",
      htmlFor = "",
      type = "password",
      value,
      onChange,
      placeholder = "",
      maxLength,
      ...rest
    }: IProps,
    ref
  ) => {
    const [fieldType, setFieldType] = useState<"password" | "text">(type);

    const toggleShow = () => {
      fieldType === "password"
        ? setFieldType("text")
        : setFieldType("password");
    };

    return (
      <InputWrapper>
        {label && htmlFor && (
          <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>
        )}
        {label && !htmlFor && <LabelStyled>{label}</LabelStyled>}
        {fieldType === "password" ? (
          <EyeCloseSVG onClick={toggleShow} />
        ) : (
          <EyeSVG onClick={toggleShow} />
        )}
        <InputStyled
          className={className}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          name={htmlFor}
          type={fieldType}
          ref={ref}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

export default InputPassword;

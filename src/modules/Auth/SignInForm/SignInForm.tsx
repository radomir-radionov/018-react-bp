import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, InputPassword, InputPhone } from "components";
import pageRoutes from "constants/pageRoutes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import {
  BottomText,
  ButtonStyled,
  CheckboxWrapper,
  Form,
  InternalLink,
  InternalLinkWhite,
  PasswordLabel,
  SignInFormStyled,
  Title,
} from "./styles";

const SignInForm = () => {
  const navigate = useNavigate();
  const [remember, setRemember] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onChangeRemember = () => {
    setRemember(!remember);
  };

  const onSubmit = (data: IFormData) => {
    console.log("SignInFormData", data);
    navigate(pageRoutes.VERIFY, { state: { role: "client" } });
  };

  return (
    <SignInFormStyled>
      <Title>Вход</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputPhone
          mask={"+375 (99) 999-99-99"}
          placeholder="Введите номер телефона"
          label="Номер телефона"
          htmlFor="phone"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <InputPassword
          placeholder="Введите пароль"
          label={
            <PasswordLabel>
              Пароль
              <InternalLinkWhite to={pageRoutes.FORGOT_PASSWORD_PHONE}>
                Забыли пароль?
              </InternalLinkWhite>
            </PasswordLabel>
          }
          htmlFor="password"
          error={errors.password?.message}
          {...register("password")}
        />
        <CheckboxWrapper>
          <Checkbox
            checked={remember}
            error={errors.remember?.message}
            {...register("remember", { onChange: onChangeRemember })}
          />
          Запомнить меня
        </CheckboxWrapper>
        <ButtonStyled type="submit">Войти</ButtonStyled>
      </Form>
      <BottomText>
        Ещё нет аккаунта?!{" "}
        <InternalLink to={pageRoutes.SIGNUP}>Зарегистрироваться</InternalLink>
      </BottomText>
    </SignInFormStyled>
  );
};

export default SignInForm;

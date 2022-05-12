import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, InputPassword, InputPhone, InputText } from "components";
import pageRoutes from "constants/pageRoutes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import {
  BottomText,
  ButtonStyled,
  CheckboxContent,
  CheckboxWrapper,
  Form,
  InternalLink,
  InternalLinkWhite,
  SignUpClientFormStyled,
  Title,
} from "./styles";

const SignUpForm = () => {
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
    console.log("SignUpClientFormData", data);
    navigate(pageRoutes.VERIFY, { state: { role: "client" } });
  };

  return (
    <SignUpClientFormStyled>
      <Title>Регистрация</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          placeholder="Введите ваше имя"
          label="Имя"
          htmlFor="name"
          error={errors.name?.message}
          {...register("name")}
        />
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
          label="Пароль"
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
        <CheckboxWrapper>
          <Checkbox
            error={errors.agreement?.message}
            {...register("agreement")}
          />
          <CheckboxContent>
            Я согласен с{" "}
            <InternalLinkWhite to="">
              политикой конфиденциальности
            </InternalLinkWhite>{" "}
            и принимаю{" "}
            <InternalLinkWhite to="">
              договор публичной оферты
            </InternalLinkWhite>
          </CheckboxContent>
        </CheckboxWrapper>
        <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
      </Form>
      <BottomText>
        Уже есть аккаунт?!{" "}
        <InternalLink to={pageRoutes.SIGNIN}>Войти</InternalLink>
      </BottomText>
    </SignUpClientFormStyled>
  );
};

export default SignUpForm;

import { yupResolver } from "@hookform/resolvers/yup";
import { InputPassword } from "components";
import pageRoutes from "constants/pageRoutes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import { ButtonStyled, Description, Form, StepStyled, Title } from "./styles";

const ConfirmStep = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log("ConfirmStep", data);
    navigate(pageRoutes.MAIN);
  };

  return (
    <StepStyled>
      <Title>Восстановление доступа</Title>
      <Description>
        Придумайте новый пароль, который должен отличаться от предыдущего
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          placeholder="Введите пароль"
          label="Новый пароль"
          htmlFor="password"
          error={errors.password?.message}
          {...register("password")}
        />
        <InputPassword
          placeholder="Введите пароль"
          label="Повторите новый пароль"
          htmlFor="confirmPassword"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        <ButtonStyled type="submit">Подтвердить пароль</ButtonStyled>
      </Form>
    </StepStyled>
  );
};

export default ConfirmStep;

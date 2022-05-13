import { yupResolver } from "@hookform/resolvers/yup";
import { InputCode } from "components";
import pageRoutes from "constants/pageRoutes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import {
  ButtonStyled,
  Description,
  Form,
  StepStyled,
  TimerText,
  Title,
} from "./styles";

const CodeStep = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log("CodeStep", data);
    navigate(pageRoutes.FORGOT_PASSWORD_CONFIRM);
  };

  return (
    <StepStyled>
      <Title>Восстановление доступа</Title>
      <Description>Введите код из SMS для сброса пароля</Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputCode
          mask={"9 9 9 9"}
          placeholder="Введите код"
          htmlFor="code"
          error={errors.code?.message}
          {...register("code")}
        />
        <TimerText>Отправить код повторно можно через 00:30</TimerText>
        <ButtonStyled type="submit">Подтвердить</ButtonStyled>
      </Form>
    </StepStyled>
  );
};

export default CodeStep;

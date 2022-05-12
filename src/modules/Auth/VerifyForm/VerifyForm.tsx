import { yupResolver } from "@hookform/resolvers/yup";
import { InputCode } from "components";
import pageRoutes from "constants/pageRoutes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import {
  ButtonStyled,
  Form,
  VerifyFormStyled,
  Title,
  Description,
  TimerText,
} from "./styles";

interface IProps {
  title: string;
}

const VerifyForm = ({ title }: IProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log("VerifyData", data);
    navigate(pageRoutes.MAIN);
  };

  return (
    <VerifyFormStyled>
      <Title>{title}</Title>
      <Description>
        Мы отправили сообщение с кодом на указанный номер телефона
      </Description>
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
    </VerifyFormStyled>
  );
};

export default VerifyForm;

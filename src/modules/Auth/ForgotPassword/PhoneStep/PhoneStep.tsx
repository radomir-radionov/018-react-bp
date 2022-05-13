import { yupResolver } from "@hookform/resolvers/yup";
import { InputPhone } from "components";
import pageRoutes from "constants/pageRoutes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormData, schema } from "./data";
import { ButtonStyled, Description, Form, StepStyled, Title } from "./styles";

const PhoneStep = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log("PhoneStep", data);
    navigate(pageRoutes.FORGOT_PASSWORD_CODE);
  };

  return (
    <StepStyled>
      <Title>Восстановление доступа</Title>
      <Description>
        Мы вышлем вам код для сброса пароля на указанный номер телефона
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputPhone
          mask={"+375 (99) 999-99-99"}
          placeholder="Введите номер телефона"
          label="Номер телефона"
          htmlFor="phone"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <ButtonStyled type="submit">Выслать код</ButtonStyled>
      </Form>
    </StepStyled>
  );
};

export default PhoneStep;

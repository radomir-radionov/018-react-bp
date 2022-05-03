import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, InputText } from "components";
import { ExampleModalStyled, Form, Title } from "./styles";
import { exampleSchema, IFormInputs } from "./data";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";

interface IProps {
  onClose: () => void;
}

const ExampleModal = ({ onClose }: IProps) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(exampleSchema),
  });

  const onSubmit = () => {
    dispatch(modalActionTypes.exampleRequest());
  };

  return (
    <ExampleModalStyled>
      <Title>Example modal</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          placeholder="Введите ваше имя"
          label="Имя"
          htmlFor="name"
          error={errors.login?.message}
          {...register("login")}
        />
        <Button type="submit">Отправить запрос</Button>
        <Button onClick={onClose}>Закрыть</Button>
      </Form>
    </ExampleModalStyled>
  );
};

export default ExampleModal;

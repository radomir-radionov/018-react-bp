import { InputText } from "components";
import { InputsWrapper } from "./styles";

const Inputs = () => {
  const onChangeHandler = () => {};

  return (
    <InputsWrapper>
      <InputText onChange={onChangeHandler} placeholder="Введите ваше имя" />
      <InputText
        onChange={onChangeHandler}
        placeholder="Введите ваше имя"
        disabled
      />
    </InputsWrapper>
  );
};

export default Inputs;

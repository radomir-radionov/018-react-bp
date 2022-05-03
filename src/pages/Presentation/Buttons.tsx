import { Button } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import { ButtonWrapper } from "./styles";

const Buttons = () => {
  const onClickHandler = () => {};

  return (
    <ButtonWrapper>
      <Button onClick={onClickHandler}>Primary</Button>
      <Button onClick={onClickHandler} variant={BUTTON_VARIANTS.SECONDARY}>
        Secondary
      </Button>
      <Button onClick={onClickHandler} disabled>
        Disabled
      </Button>
    </ButtonWrapper>
  );
};

export default Buttons;

import { useNavigate } from "react-router-dom";
import { Button, Map, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import {
  ButtonsGroup,
  AddressStepStyled,
  StepsLineWrapper,
  WhatText,
} from "./styles";

const AddressStep = () => {
  const navigate = useNavigate();

  // const disabled: boolean = useMemo(
  //   () => defineDisabled(isLastCardChoosed, value),
  //   [isLastCardChoosed, value]
  // );

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_NOTIFICATION);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_DESCRIPTION);
  };

  return (
    <AddressStepStyled>
      <StepsLineWrapper>
        <StepsLine step={5} />
      </StepsLineWrapper>
      <WhatText>Введите адрес</WhatText>
      <Map />
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep} disabled={false}>
          Продолжить
        </Button>
      </ButtonsGroup>
    </AddressStepStyled>
  );
};

export default AddressStep;

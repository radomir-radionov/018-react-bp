import { useNavigate } from "react-router-dom";
import { CostInformation } from "modules";
import { Button, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import {
  ButtonsGroup,
  Description,
  DescriptionStepStyled,
  StepsLineWrapper,
  WhatText,
} from "./styles";

const DescriptionStep = () => {
  const navigate = useNavigate();

  // const disabled: boolean = useMemo(
  //   () => defineDisabled(isLastCardChoosed, value),
  //   [isLastCardChoosed, value]
  // );

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_ADDRESS);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_TIME);
  };

  return (
    <DescriptionStepStyled>
      <StepsLineWrapper>
        <StepsLine step={4} />
      </StepsLineWrapper>
      <WhatText>Добавить описание к заявке</WhatText>
      <Description>
        Вы можете оставить комментарий к заявке, дополнить ее фото или другими
        уточняющими файлами. Это поможет мастеру лучше оценить задачу, а сервису
        указать максимально точную стоимость услуг
      </Description>
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep} disabled={false}>
          Продолжить
        </Button>
      </ButtonsGroup>
      <CostInformation />
    </DescriptionStepStyled>
  );
};

export default DescriptionStep;

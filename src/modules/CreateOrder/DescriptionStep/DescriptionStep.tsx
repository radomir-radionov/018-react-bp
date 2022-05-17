import { ChangeEvent, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CostInformation } from "modules";
import { Button, ImageUploader, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import {
  ButtonsGroup,
  Description,
  DescriptionStepStyled,
  InputComment,
  StepsLineWrapper,
  UploaderWrapper,
  WhatText,
} from "./styles";
import {
  descriptionOrderSelector,
  orderFilesSelector,
} from "redux/createOrder/selectors";
import { createOrderActions } from "redux/createOrder";
import { ICustomFile } from "components/ImageUploader/types";
import { defineDisabled } from "./data";

const DescriptionStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const descriptionOrder: string = useSelector(descriptionOrderSelector);
  const orderFiles: ICustomFile[] = useSelector(orderFilesSelector);

  const onChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(createOrderActions.setDescriptionOrder(event.target.value));
  };

  const setFiles = (files: ICustomFile[]) => {
    dispatch(createOrderActions.setOrderFiles(files));
  };

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_ADDRESS);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_TIME);
  };

  const disabled: boolean = useMemo(
    () => defineDisabled(orderFiles),
    [orderFiles]
  );

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
      <InputComment
        type="text"
        placeholder="Комментарий к заявке"
        maxLength={255}
        value={descriptionOrder}
        onChange={onChangeComment}
      />
      <UploaderWrapper>
        <ImageUploader files={orderFiles} setFiles={setFiles} />
      </UploaderWrapper>
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep} disabled={disabled}>
          Продолжить
        </Button>
      </ButtonsGroup>
      <CostInformation />
    </DescriptionStepStyled>
  );
};

export default DescriptionStep;

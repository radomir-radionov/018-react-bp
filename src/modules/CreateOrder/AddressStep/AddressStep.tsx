import { useDispatch, useSelector } from "react-redux";
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
import { choosedAddressSelector } from "redux/address/selectors";
import { createOrderActions } from "redux/createOrder";

const AddressStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const choosedAddress: string = useSelector(choosedAddressSelector);

  const goToNextStep = () => {
    dispatch(createOrderActions.createOrderRequest());
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
        <Button
          onClick={goToNextStep}
          disabled={Boolean(!choosedAddress.length)}
        >
          Продолжить
        </Button>
      </ButtonsGroup>
    </AddressStepStyled>
  );
};

export default AddressStep;

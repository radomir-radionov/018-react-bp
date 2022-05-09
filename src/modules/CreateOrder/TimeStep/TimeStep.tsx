import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrderActions } from "redux/createOrder";
import { CostInformation, SmallCardCheckbox } from "modules";
import { Button, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import { smallCardsData } from "./data";
import {
  ButtonsGroup,
  CheckboxesWrapper,
  TimeStepStyled,
  StepsLineWrapper,
  WhatText,
} from "./styles";
import { dateSelector } from "redux/createOrder/selectors";

const TimeStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date: string = useSelector(dateSelector);
  const [value, setValue] = useState<string>("");
  const [isLastCardChoosed, setIsLastCardChoosed] = useState<boolean>(false);

  const additionalInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const dateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedDate: string = smallCardsData[+event.target.id].title;

    if (choosedDate !== date) {
      if (smallCardsData[+event.target.id].title === smallCardsData[3].title) {
        setIsLastCardChoosed(true);
        dispatch(createOrderActions.setAdditionalDuration({ duration: value }));
      } else {
        setIsLastCardChoosed(false);
      }

      dispatch(createOrderActions.setDate({ date: choosedDate }));
    }
  };

  // const disabled: boolean = useMemo(
  //   () => defineDisabled(isLastCardChoosed, value),
  //   [isLastCardChoosed, value]
  // );

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_DESCRIPTION);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_EMPLOYEES);
  };

  return (
    <TimeStepStyled>
      <StepsLineWrapper>
        <StepsLine step={3} />
      </StepsLineWrapper>
      <WhatText>Как срочно вам нужны грузчики?</WhatText>
      <CheckboxesWrapper>
        {smallCardsData.map(({ title, insertInput }, index) => (
          <SmallCardCheckbox
            key={index}
            id={`${index}`}
            checked={date === title}
            title={title}
            insertInput={insertInput}
            isLastCardChoosed={isLastCardChoosed && insertInput}
            placeholder={"Укажите на сколько"}
            onChange={additionalInputHandler}
            onChangeInputCard={dateHandler}
          />
        ))}
      </CheckboxesWrapper>
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep} disabled={false}>
          Продолжить
        </Button>
      </ButtonsGroup>
      <CostInformation />
    </TimeStepStyled>
  );
};

export default TimeStep;

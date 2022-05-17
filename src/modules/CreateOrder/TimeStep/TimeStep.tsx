import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrderActions } from "redux/createOrder";
import { CostInformation, SmallCardCheckbox } from "modules";
import { Button, StepsLine, TimePicker } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import { smallCardsData } from "./data";
import {
  ButtonsGroup,
  CheckboxesWrapper,
  TimeStepStyled,
  StepsLineWrapper,
  WhatText,
  TimeTitle,
} from "./styles";
import {
  dateOrderSelector,
  dateTypeSelector,
  startTimeSelector,
} from "redux/createOrder/selectors";

const TimeStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateType: string = useSelector(dateTypeSelector);
  const startTime: Date = useSelector(startTimeSelector);
  const dateOrder: Date = useSelector(dateOrderSelector);
  const [isLastCard, setIsLastCard] = useState<boolean>(
    dateType === smallCardsData[3].title
  );

  const dateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedDate: string = smallCardsData[+event.target.id].title;

    if (choosedDate !== dateType) {
      if (smallCardsData[+event.target.id].title === smallCardsData[2].title) {
        const today: Date = new Date();
        const tomorrow: Date = new Date(today.setDate(today.getDate() + 1));

        setIsLastCard(false);
        dispatch(createOrderActions.setDateOrder(tomorrow));
      }

      if (smallCardsData[+event.target.id].title === smallCardsData[3].title) {
        setIsLastCard(true);
      } else {
        setIsLastCard(false);
        dispatch(createOrderActions.setDateOrder(new Date()));
      }

      dispatch(createOrderActions.setDateType(choosedDate));
    }
  };

  const onChangeTime = (time: Date) => {
    dispatch(createOrderActions.setStartTime(time));
  };

  const onChangeDate = (date: Date) => {
    dispatch(createOrderActions.setDateOrder(date));
  };

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
            checked={dateType === title}
            title={title}
            insertInput={insertInput}
            isLastCard={isLastCard && insertInput}
            datePicker={smallCardsData[3].title === title}
            dateOrder={dateOrder}
            onChangeDate={onChangeDate}
            onChangeInputCard={dateHandler}
          />
        ))}
      </CheckboxesWrapper>
      {dateType !== smallCardsData[0].title && (
        <>
          <TimeTitle>Укажите время</TimeTitle>
          <TimePicker value={startTime} onChange={onChangeTime} />
        </>
      )}
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep}>Продолжить</Button>
      </ButtonsGroup>
      <CostInformation />
    </TimeStepStyled>
  );
};

export default TimeStep;

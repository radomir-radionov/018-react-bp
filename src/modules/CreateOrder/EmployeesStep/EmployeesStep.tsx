import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrderActions } from "redux/createOrder";
import { BigCardCheckbox, CostInformation, SmallCardCheckbox } from "modules";
import { Button, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import { cardsData, defineDisabled, smallCardsData } from "./data";
import {
  ButtonsGroup,
  CheckboxesWrapper,
  EmployeesStepStyled,
  StepsLineWrapper,
  WhatText,
} from "./styles";
import {
  employeeSelector,
  durationSelector,
} from "redux/createOrder/selectors";

const EmployeesStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employee: string = useSelector(employeeSelector);
  const duration: string = useSelector(durationSelector);
  const [isLastCardChoosed, setIsLastCardChoosed] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [isSecondLastCardChoosed, setIsSecondLastCardChoosed] =
    useState<boolean>(false);
  const [durationValue, setDurationValue] = useState<string>("");

  const additionalInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const employeeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedEmployee: string = cardsData[+event.target.id].title;

    if (choosedEmployee !== employee) {
      if (cardsData[+event.target.id].title === cardsData[3].title) {
        setIsLastCardChoosed(true);
        dispatch(createOrderActions.setAdditionalEmployee({ employee: value }));
      } else {
        setIsLastCardChoosed(false);
      }

      dispatch(createOrderActions.setEmployee({ employee: choosedEmployee }));
    }
  };

  const additionalSecondInputHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDurationValue(event.target.value);
  };

  const durationHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedDuration: string = smallCardsData[+event.target.id].title;

    if (choosedDuration !== duration) {
      if (smallCardsData[+event.target.id].title === smallCardsData[3].title) {
        setIsSecondLastCardChoosed(true);
        dispatch(
          createOrderActions.setAdditionalDuration({
            duration: durationValue,
          })
        );
      } else {
        setIsSecondLastCardChoosed(false);
      }

      dispatch(
        createOrderActions.setDuration({
          duration: choosedDuration,
        })
      );
    }
  };

  const disabled: boolean = useMemo(
    () =>
      defineDisabled(
        isLastCardChoosed,
        value,
        isSecondLastCardChoosed,
        durationValue
      ),
    [isLastCardChoosed, value, isSecondLastCardChoosed, durationValue]
  );

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_TIME);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_CHOOSE_WORK);
  };

  return (
    <EmployeesStepStyled>
      <StepsLineWrapper>
        <StepsLine step={2} />
      </StepsLineWrapper>
      <WhatText>Сколько вам нужно человек?</WhatText>
      <CheckboxesWrapper>
        {cardsData.map(({ title, image, insertInput }, index) => (
          <BigCardCheckbox
            key={index}
            id={`${index}`}
            checked={employee === title}
            title={title}
            image={image}
            insertInput={insertInput}
            isLastCardChoosed={isLastCardChoosed && insertInput}
            placeholder={"Тип работ"}
            onChange={additionalInputHandler}
            onChangeInputCard={employeeHandler}
          />
        ))}
      </CheckboxesWrapper>
      <WhatText>
        Сколько времени понадобится грузчикам на выполнение работы?
      </WhatText>
      <CheckboxesWrapper>
        {smallCardsData.map(({ title, insertInput }, index) => (
          <SmallCardCheckbox
            key={index}
            id={`${index}`}
            checked={duration === title}
            title={title}
            insertInput={insertInput}
            isLastCardChoosed={isSecondLastCardChoosed && insertInput}
            placeholder={"Укажите на сколько"}
            onChange={additionalSecondInputHandler}
            onChangeInputCard={durationHandler}
          />
        ))}
      </CheckboxesWrapper>
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          Назад
        </Button>
        <Button onClick={goToNextStep} disabled={disabled}>
          Продолжить
        </Button>
      </ButtonsGroup>
      <CostInformation />
    </EmployeesStepStyled>
  );
};

export default EmployeesStep;

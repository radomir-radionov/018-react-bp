import { ChangeEvent, useEffect, useMemo, useState } from "react";
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
  employeeTypeSelector,
  durationTypeSelector,
  additionalEmployeesSelector,
  additionalDurationSelector,
  numberOfEmployeesSelector,
  numberOfDurationSelector,
} from "redux/createOrder/selectors";
import { getCostOfWork, ICostOfWork } from "utils/getCostOfWork";

const EmployeesStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeType: string = useSelector(employeeTypeSelector);
  const additionalEmployees: string = useSelector(additionalEmployeesSelector);
  const numberOfEmployees: number = useSelector(numberOfEmployeesSelector);
  const durationType: string = useSelector(durationTypeSelector);
  const additionalDuration: string = useSelector(additionalDurationSelector);
  const numberOfDuration: number = useSelector(numberOfDurationSelector);
  const [isLastCard, setIsLastCard] = useState<boolean>(
    employeeType === cardsData[3].title
  );
  const [isSecondLastCard, setIsSecondLastCard] = useState<boolean>(
    durationType === smallCardsData[3].title
  );

  const additionalInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    if (!isNaN(+value) && +value <= 2) {
      dispatch(createOrderActions.setAdditionalEmployees(value));
    }
  };

  const employeeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedEmployee: string = cardsData[+event.target.id].title;

    if (choosedEmployee !== employeeType) {
      if (cardsData[+event.target.id].title === cardsData[3].title) {
        setIsLastCard(true);
      } else {
        const numberOfEmployees: number = +event.target.id + 1;
        setIsLastCard(false);
        dispatch(createOrderActions.setAdditionalEmployees(""));
        dispatch(createOrderActions.setNumberOfEmployees(numberOfEmployees));
      }

      dispatch(createOrderActions.setEmployeeType(choosedEmployee));
    }
  };

  const additionalSecondInputHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!isNaN(+event.target.value)) {
      dispatch(createOrderActions.setAdditionalDuration(event.target.value));
      dispatch(createOrderActions.setNumberOfDuration(0));
    }
  };

  const durationHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const choosedDuration: string = smallCardsData[+event.target.id].title;

    if (choosedDuration !== durationType) {
      if (smallCardsData[+event.target.id].title === smallCardsData[3].title) {
        setIsSecondLastCard(true);
      } else {
        const numberOfDuration: number = +event.target.id + 2;
        setIsSecondLastCard(false);
        dispatch(createOrderActions.setAdditionalDuration(""));
        dispatch(createOrderActions.setNumberOfDuration(numberOfDuration));
      }

      dispatch(createOrderActions.setDurationType(choosedDuration));
    }
  };

  const disabled: boolean = useMemo(
    () =>
      defineDisabled(
        isLastCard,
        additionalEmployees,
        isSecondLastCard,
        additionalDuration
      ),
    [isLastCard, additionalEmployees, isSecondLastCard, additionalDuration]
  );

  const goToNextStep = () => {
    navigate(pageRoutes.CREATE_ORDER_TIME);
  };

  const goToPreviousStep = () => {
    navigate(pageRoutes.CREATE_ORDER_CHOOSE_WORK);
  };

  useEffect(() => {
    const { cost, currency }: ICostOfWork = getCostOfWork(
      numberOfEmployees,
      additionalEmployees,
      numberOfDuration,
      additionalDuration
    );

    dispatch(createOrderActions.setCostOfWork({ cost, currency }));
  }, [
    dispatch,
    numberOfEmployees,
    additionalEmployees,
    numberOfDuration,
    additionalDuration,
  ]);

  return (
    <EmployeesStepStyled>
      <StepsLineWrapper>
        <StepsLine step={2} />
      </StepsLineWrapper>
      <WhatText>?????????????? ?????? ?????????? ???????????????</WhatText>
      <CheckboxesWrapper>
        {cardsData.map(({ title, image, insertInput }, index) => (
          <BigCardCheckbox
            key={index}
            id={`${index}`}
            checked={employeeType === title}
            title={title}
            image={image}
            insertInput={insertInput}
            isLastCard={isLastCard && insertInput}
            placeholder={"???? ???????? ?????????????? ????????????????????????"}
            value={additionalEmployees}
            onChange={additionalInputHandler}
            onChangeInputCard={employeeHandler}
          />
        ))}
      </CheckboxesWrapper>
      <WhatText>
        ?????????????? ?????????????? ?????????????????????? ?????????????????? ???? ???????????????????? ?????????????
      </WhatText>
      <CheckboxesWrapper>
        {smallCardsData.map(({ title, insertInput }, index) => (
          <SmallCardCheckbox
            key={index}
            id={`${index}`}
            checked={durationType === title}
            title={title}
            insertInput={insertInput}
            isLastCard={isSecondLastCard && insertInput}
            placeholder={"?????????????? ???? ??????????????"}
            value={additionalDuration}
            onChange={additionalSecondInputHandler}
            onChangeInputCard={durationHandler}
          />
        ))}
      </CheckboxesWrapper>
      <ButtonsGroup>
        <Button onClick={goToPreviousStep} variant={BUTTON_VARIANTS.SECONDARY}>
          ??????????
        </Button>
        <Button onClick={goToNextStep} disabled={disabled}>
          ????????????????????
        </Button>
      </ButtonsGroup>
      <CostInformation />
    </EmployeesStepStyled>
  );
};

export default EmployeesStep;

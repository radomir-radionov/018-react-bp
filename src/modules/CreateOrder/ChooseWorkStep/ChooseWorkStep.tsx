import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrderActions, workTypesSelector } from "redux/createOrder";
import { Attention, BigCardCheckbox } from "modules";
import { Button, StepsLine } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import pageRoutes from "constants/pageRoutes";
import { checkboxesData, defineDisabled } from "./data";
import {
  ButtonsGroup,
  CheckboxesWrapper,
  ChooseWorkStepStyled,
  Description,
  ErrorMessage,
  ErrorWrapper,
  Remark,
  StepsLineWrapper,
  Title,
  WhatText,
} from "./styles";
import { AttentionOrangeSVG } from "assets";

const ChooseWorkStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workTypes: string[] = useSelector(workTypesSelector);
  const [isLastCardChoosed, setIsLastCardChoosed] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const additionalInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const workTypesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkboxesData[+event.target.id].title !== checkboxesData[3].title) {
      const workType: string = checkboxesData[+event.target.id].title;
      let newWorkTypes: string[] = [...workTypes];

      if (workTypes.includes(workType)) {
        const index: number = workTypes.findIndex((work) => work === workType);
        newWorkTypes.splice(index, 1);
      } else {
        newWorkTypes.push(workType);
      }

      dispatch(createOrderActions.setWorkTypes({ workTypes: newWorkTypes }));
    } else {
      setIsLastCardChoosed(!isLastCardChoosed);
    }
  };

  const disabled: boolean = useMemo(
    () => defineDisabled(isLastCardChoosed, value, workTypes),
    [isLastCardChoosed, value, workTypes]
  );

  const goToNextStep = () => {
    if (isLastCardChoosed) {
      dispatch(createOrderActions.setAdditionalWorkType({ workType: value }));
    }
    navigate(pageRoutes.CREATE_ORDER_EMPLOYEES);
  };

  const goToMainPage = () => {
    navigate(pageRoutes.MAIN);
  };

  return (
    <ChooseWorkStepStyled>
      <Title>Создание заявки</Title>
      <Description>
        Заполните форму как можно подробнее. Это позволит быстрее найти мастера
      </Description>
      <Attention description="На данный момент оплата возможна только наличными, в скором времени мы добавим возможность оплаты картой. Пожалуйста, учитывайте это при формировании заказа. Приносим свои извинения за неудобства!" />
      <StepsLineWrapper>
        <StepsLine step={1} />
      </StepsLineWrapper>
      <WhatText>Зачем вам нужны грузчики?</WhatText>
      {disabled && (
        <ErrorWrapper>
          <AttentionOrangeSVG />
          <ErrorMessage>Выберите минимум один вариант</ErrorMessage>
        </ErrorWrapper>
      )}
      <CheckboxesWrapper>
        {checkboxesData.map(({ title, image, insertInput }, index) => (
          <BigCardCheckbox
            key={index}
            id={`${index}`}
            checked={
              workTypes.includes(title) || (isLastCardChoosed && insertInput)
            }
            title={title}
            image={image}
            insertInput={insertInput}
            isLastCardChoosed={isLastCardChoosed && insertInput}
            placeholder={"Тип работ"}
            onChange={additionalInputHandler}
            onChangeInputCard={workTypesHandler}
          />
        ))}
      </CheckboxesWrapper>
      <Remark>
        *на данный момент наш сервис не предоставляет транспорт, только
        грузчиков
      </Remark>
      <ButtonsGroup>
        <Button onClick={goToMainPage} variant={BUTTON_VARIANTS.SECONDARY}>
          Отменить
        </Button>
        <Button onClick={goToNextStep} disabled={disabled}>
          Продолжить
        </Button>
      </ButtonsGroup>
    </ChooseWorkStepStyled>
  );
};

export default ChooseWorkStep;

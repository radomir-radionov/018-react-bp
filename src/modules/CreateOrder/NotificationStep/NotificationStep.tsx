import { useNavigate } from "react-router-dom";
import { Button } from "components";
import pageRoutes from "constants/pageRoutes";
import {
  ButtonsGroup,
  Description,
  NotificationStepStyled,
  WhatText,
} from "./styles";

const NotificationStep = () => {
  const navigate = useNavigate();
  const isAuth: boolean = true;

  const goToMainPage = () => {
    navigate(pageRoutes.MAIN);
  };

  const goToAuthPage = () => {
    // navigate(pageRoutes.CREATE_ORDER_TIME);
  };

  return (
    <NotificationStepStyled>
      {isAuth ? (
        <>
          <WhatText>Ваша заявка сформирована</WhatText>
          <Description>
            Спасибо за заявку. Мы уже начали подбор исполнителя Мастер свяжется
            с вами и уточнит все детали
          </Description>
          <ButtonsGroup>
            <Button onClick={goToMainPage} disabled={false}>
              Вернуться на главную
            </Button>
          </ButtonsGroup>
        </>
      ) : (
        <>
          <WhatText>Ваша заявка почти готова</WhatText>
          <Description>
            Вам необходимо авторизоваться, чтобы завершить процесс формирования
            заявки, и мы начали подбор исполнителя
          </Description>
          <ButtonsGroup>
            <Button onClick={goToAuthPage} disabled={false}>
              Авторизоваться
            </Button>
          </ButtonsGroup>
        </>
      )}
    </NotificationStepStyled>
  );
};

export default NotificationStep;

import { Button } from "components";
import pageRoutes from "constants/pageRoutes";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "utils/hooks/useWindowSize";
import {
  ApplicationDescription,
  ApplicationInfo,
  Description,
  HandWorkerContainerStyled,
  Information,
  MobileButton,
  Title,
} from "./styles";

const HandWorkerContainer = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isMobile: boolean = Boolean(width && width <= 600);

  const navigateHandler = () => {
    navigate(pageRoutes.CREATE_ORDER);
  };

  return (
    <HandWorkerContainerStyled>
      <Information>
        <Title>Для тех, кто не откладывает на потом</Title>
        <Description>
          Оставьте заявку всего в пару кликов. Грузчики свяжутся с вами всего
          через 15 минут и будут у вас в течение часа!
        </Description>
        {isMobile ? (
          <MobileButton onClick={navigateHandler}>Оставить заявку</MobileButton>
        ) : (
          <ApplicationInfo>
            <ApplicationDescription>Услуги грузчиков</ApplicationDescription>
            <Button onClick={navigateHandler}>Оставить заявку</Button>
          </ApplicationInfo>
        )}
      </Information>
    </HandWorkerContainerStyled>
  );
};

export default HandWorkerContainer;

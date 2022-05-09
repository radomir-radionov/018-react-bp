import { useNavigate } from "react-router-dom";
import { Button } from "components";
import { Header } from "modules";
import { Content, InternalServerErrorStyled, Title } from "./styles";

const InternalServerError = () => {
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1);
  };

  return (
    <InternalServerErrorStyled>
      <Header />
      <Content>
        <Title>
          Уппс... Возможно грузчики уронили страницу, или произошла другая
          ошибка
        </Title>
        <Button onClick={goToPreviousPath}>Вернуться назад</Button>
      </Content>
    </InternalServerErrorStyled>
  );
};

export default InternalServerError;

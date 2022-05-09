import { useNavigate } from "react-router-dom";
import { Button } from "components";
import { Header } from "modules";
import { Content, NotFoundErrorStyled, Title } from "./styles";

const NotFoundError = () => {
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1);
  };

  return (
    <NotFoundErrorStyled>
      <Header />
      <Content>
        <Title>Уппс... Такая страница не найдена либо она была удалена</Title>
        <Button onClick={goToPreviousPath}>Вернуться назад</Button>
      </Content>
    </NotFoundErrorStyled>
  );
};

export default NotFoundError;

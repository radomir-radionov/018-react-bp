import pageRoutes from "constants/pageRoutes";
import { useNavigate } from "react-router-dom";
import { createOrderRoutes } from "routes/data";
import {
  BreadcrumbsStyled,
  CurCrumb,
  PrevCrumb,
  RightArrowIcon,
} from "./styles";

interface IProps {
  curPath: string;
}

const Breadcrumbs = ({ curPath }: IProps) => {
  const navigate = useNavigate();
  const index: number = createOrderRoutes.findIndex((path) => path === curPath);
  const isCreateOrderCrumb = createOrderRoutes[index];

  const goToMainPage = () => {
    navigate(pageRoutes.MAIN);
  };

  return (
    <BreadcrumbsStyled>
      <PrevCrumb onClick={goToMainPage}>Главная страница</PrevCrumb>
      <RightArrowIcon />
      {isCreateOrderCrumb && <CurCrumb>Создание заявки</CurCrumb>}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;

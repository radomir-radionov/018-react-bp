import { useLocation } from "react-router-dom";
import { Content, CreateOrderStyled } from "./styles";
import {
  AddressStep,
  Breadcrumbs,
  ChooseWorkStep,
  DescriptionStep,
  EmployeesStep,
  Header,
  NotificationStep,
  TimeStep,
} from "modules";
import pageRoutes from "constants/pageRoutes";

const CreateOrder = () => {
  const { pathname } = useLocation();

  const getStepToRender = () => {
    switch (true) {
      case pageRoutes.CREATE_ORDER_CHOOSE_WORK === pathname:
        return <ChooseWorkStep />;
      case pageRoutes.CREATE_ORDER_EMPLOYEES === pathname:
        return <EmployeesStep />;
      case pageRoutes.CREATE_ORDER_TIME === pathname:
        return <TimeStep />;
      case pageRoutes.CREATE_ORDER_DESCRIPTION === pathname:
        return <DescriptionStep />;
      case pageRoutes.CREATE_ORDER_ADDRESS === pathname:
        return <AddressStep />;
      case pageRoutes.CREATE_ORDER_NOTIFICATION === pathname:
        return <NotificationStep />;
      default:
        return null;
    }
  };

  return (
    <CreateOrderStyled>
      <Header />
      <Content>
        <Breadcrumbs curPath={pathname} />
        {getStepToRender()}
      </Content>
    </CreateOrderStyled>
  );
};

export default CreateOrder;

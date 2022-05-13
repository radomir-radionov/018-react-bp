import { useLocation } from "react-router-dom";
import { Content, ResetPasswordStyled } from "./styles";
import { CodeStep, ConfirmStep, Header, PhoneStep } from "modules";
import pageRoutes from "constants/pageRoutes";

const ResetPassword = () => {
  const { pathname } = useLocation();

  const getStepToRender = () => {
    switch (true) {
      case pageRoutes.FORGOT_PASSWORD_PHONE === pathname:
        return <PhoneStep />;
      case pageRoutes.FORGOT_PASSWORD_CODE === pathname:
        return <CodeStep />;
      case pageRoutes.FORGOT_PASSWORD_CONFIRM === pathname:
        return <ConfirmStep />;
      default:
        return null;
    }
  };

  return (
    <ResetPasswordStyled>
      <Header />
      <Content>{getStepToRender()}</Content>
    </ResetPasswordStyled>
  );
};

export default ResetPassword;

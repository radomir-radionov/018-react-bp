import { Header, VerifyForm } from "modules";
import { useLocation } from "react-router-dom";
import { Content, VerifyStyled } from "./styles";

interface ICustomizedState {
  role: "client" | "executor";
}

const Verify = () => {
  const location = useLocation();
  const state = location.state as ICustomizedState;

  return (
    <VerifyStyled>
      <Header />
      <Content>
        {state.role === "client" && <VerifyForm title="Регистрация" />}
      </Content>
    </VerifyStyled>
  );
};

export default Verify;

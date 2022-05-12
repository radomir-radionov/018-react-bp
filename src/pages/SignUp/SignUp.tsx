import { Header, SignUpClientForm } from "modules";
import { Content, SignUpStyled } from "./styles";

const SignUp = () => {
  return (
    <SignUpStyled>
      <Header />
      <Content>
        <SignUpClientForm />
      </Content>
    </SignUpStyled>
  );
};

export default SignUp;

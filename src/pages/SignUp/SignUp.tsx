import { Header, SignUpForm } from "modules";
import { Content, SignUpStyled } from "./styles";

const SignUp = () => {
  return (
    <SignUpStyled>
      <Header />
      <Content>
        <SignUpForm />
      </Content>
    </SignUpStyled>
  );
};

export default SignUp;

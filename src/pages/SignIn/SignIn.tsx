import { Header, SignInForm } from "modules";
import { Content, SignInStyled } from "./styles";

const SignIn = () => {
  return (
    <SignInStyled>
      <Header />
      <Content>
        <SignInForm />
      </Content>
    </SignInStyled>
  );
};

export default SignIn;

import { Button } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import {
  HeaderStyled,
  LogoIcon,
  LogoWrapper,
  MyApplicationText,
  Navigation,
} from "./styles";

const Header = () => {
  const onClick = () => {};

  return (
    <HeaderStyled>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Navigation>
        <MyApplicationText onClick={onClick}>Мои заявки</MyApplicationText>
        <Button onClick={onClick} variant={BUTTON_VARIANTS.SECONDARY}>
          Я — мастер
        </Button>
        <Button onClick={onClick}>Войти</Button>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;

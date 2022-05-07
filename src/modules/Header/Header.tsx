import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import {
  CloseIcon,
  HeaderStyled,
  LogoIcon,
  LogoWrapper,
  MenuIcon,
  MobileNavigation,
  MyApplicationText,
  Navigation,
} from "./styles";
import pageRoutes from "constants/pageRoutes";

const Header = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const onClick = () => {};

  const navigateHandler = () => {
    navigate(pageRoutes.MAIN);
  };

  const toggleHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <HeaderStyled>
        <LogoWrapper>
          {isOpenMenu ? (
            <CloseIcon onClick={toggleHandler} />
          ) : (
            <MenuIcon onClick={toggleHandler} />
          )}
          <LogoIcon onClick={navigateHandler} />
        </LogoWrapper>
        {!isOpenMenu && (
          <Navigation>
            <MyApplicationText onClick={onClick}>Мои заявки</MyApplicationText>
            <Button onClick={onClick} variant={BUTTON_VARIANTS.SECONDARY}>
              Я — мастер
            </Button>
            <Button onClick={onClick}>Войти</Button>
          </Navigation>
        )}
      </HeaderStyled>
      {isOpenMenu && (
        <MobileNavigation>
          <MyApplicationText onClick={onClick}>Мои заявки</MyApplicationText>
          <Button onClick={onClick} variant={BUTTON_VARIANTS.SECONDARY}>
            Я — мастер
          </Button>
          <Button onClick={onClick}>Войти</Button>
        </MobileNavigation>
      )}
    </>
  );
};

export default Header;

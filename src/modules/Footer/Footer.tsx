import pageRoutes from "constants/pageRoutes";
import { useNavigate } from "react-router-dom";
import { FooterStyled, LogoIcon, Text } from "./styles";

const Footer = () => {
  const navigate = useNavigate();
  const year: number = new Date().getFullYear();

  const navigateHandler = () => {
    navigate(pageRoutes.MAIN);
  };

  return (
    <FooterStyled>
      <LogoIcon onClick={navigateHandler} />
      <Text>{year}. Все права защищены &copy;</Text>
    </FooterStyled>
  );
};

export default Footer;

import { useSelector } from "react-redux";
import { createOrderStateSelector } from "redux/createOrder/selectors";
import {
  Cost,
  CostInformationStyled,
  Description,
  Info,
  Title,
} from "./styles";

const CostInformation = () => {
  const { cost, currency } = useSelector(createOrderStateSelector);

  return (
    <CostInformationStyled>
      <Description>
        Указанная стоимость работ является ориентировочной, поскольку не
        включает стоимость материалов и дополнительные работы, которые могут
        быть установлены мастером по месту выполнения работ (оказания услуг).
        Окончательную стоимость определяет мастер непосредственно на объекте
      </Description>
      <Info>
        <Title>Ориентировочная стоимость работ:</Title>
        <Cost>{`${cost} ${currency}`}</Cost>
      </Info>
    </CostInformationStyled>
  );
};

export default CostInformation;

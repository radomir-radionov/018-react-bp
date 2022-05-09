import {
  Cost,
  CostInformationStyled,
  Description,
  Info,
  Title,
} from "./styles";

const CostInformation = () => {
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
        <Cost>10 BYN</Cost>
      </Info>
    </CostInformationStyled>
  );
};

export default CostInformation;

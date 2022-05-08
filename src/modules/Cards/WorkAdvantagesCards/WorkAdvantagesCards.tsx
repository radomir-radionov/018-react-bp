import { DescriptionCard } from "modules";
import { workAdvantagesCardsData } from "./data";
import {
  WorkAdvantagesCardsStyled,
  Title,
  CardsContainer,
  CardWrapper,
} from "./styles";

const WorkAdvantagesCards = () => {
  return (
    <WorkAdvantagesCardsStyled>
      <Title>Преимущества работы с нами</Title>
      <CardsContainer>
        {workAdvantagesCardsData.map(
          ({ image, title, description, implementationDate }, index) => (
            <CardWrapper key={index + title}>
              <DescriptionCard
                image={image}
                title={title}
                description={description}
                implementationDate={implementationDate || ""}
              />
            </CardWrapper>
          )
        )}
      </CardsContainer>
    </WorkAdvantagesCardsStyled>
  );
};

export default WorkAdvantagesCards;

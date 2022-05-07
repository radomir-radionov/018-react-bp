import { DescriptionCard } from "modules";
import { howWeSearchCardsData } from "./data";
import {
  CardWrapper,
  Title,
  HowWeSearchCardsStyles,
  CardsContainer,
} from "./styles";

const HowWeSearchCards = () => {
  return (
    <HowWeSearchCardsStyles>
      <Title>Как мы ищем мастера</Title>
      <CardsContainer>
        {howWeSearchCardsData.map(
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
    </HowWeSearchCardsStyles>
  );
};

export default HowWeSearchCards;

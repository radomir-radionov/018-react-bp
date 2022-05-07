import { DescriptionCard } from "modules";
import { howWeAreWorkingCardsData } from "./data";
import {
  CardWrapper,
  Title,
  HowWeAreWorkingCardsStyles,
  CardsContainer,
} from "./styles";

const HowWeAreWorkingCards = () => {
  return (
    <HowWeAreWorkingCardsStyles>
      <Title>Как мы работаем?</Title>
      <CardsContainer>
        {howWeAreWorkingCardsData.map(
          ({ image, title, description }, index) => (
            <CardWrapper key={index + title}>
              <DescriptionCard
                image={image}
                title={title}
                description={description}
              />
            </CardWrapper>
          )
        )}
      </CardsContainer>
    </HowWeAreWorkingCardsStyles>
  );
};

export default HowWeAreWorkingCards;

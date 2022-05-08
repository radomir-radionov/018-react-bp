import { FunctionComponent, SVGProps } from "react";
import {
  ReviewStyled,
  Title,
  Description,
  Client,
  Info,
  Location,
  Name,
} from "./styles";

interface IProps {
  name: string;
  location: string;
  title: string;
  description: string;
  avatar: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Review = ({ name, location, title, description, avatar }: IProps) => {
  const Avatar: FunctionComponent<SVGProps<SVGSVGElement>> = avatar;

  return (
    <ReviewStyled>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Client>
        <Avatar />
        <Info>
          <Name>{name}</Name>
          <Location>{location}</Location>
        </Info>
      </Client>
    </ReviewStyled>
  );
};

export default Review;

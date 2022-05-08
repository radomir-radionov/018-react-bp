import { FunctionComponent, SVGProps } from "react";
import {
  Description,
  DescriptionCatdStyled,
  ImageWrapper,
  ImplementationDate,
  Information,
  Title,
} from "./styles";

interface IProps {
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  implementationDate?: string;
}

const DescriptionCatd = ({
  image,
  title,
  description,
  implementationDate = "",
}: IProps) => {
  const ImageSVG: FunctionComponent<SVGProps<SVGSVGElement>> = image;

  return (
    <DescriptionCatdStyled>
      <ImageWrapper>
        <ImageSVG />
      </ImageWrapper>
      <Information>
        <Title>{title}</Title>
        {implementationDate && (
          <ImplementationDate>{implementationDate}</ImplementationDate>
        )}
        <Description>{description}</Description>
      </Information>
    </DescriptionCatdStyled>
  );
};

export default DescriptionCatd;

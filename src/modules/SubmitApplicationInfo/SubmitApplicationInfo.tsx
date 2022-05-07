import { Button } from "components";
import { colors } from "styles";
import { Description, SubmitApplicationInfoStyled, Title } from "./styles";

interface IProps {
  title: string;
  description: string;
  bgImage: string;
  buttonText: string;
  textColor?: colors;
  onClick: () => void;
}

const SubmitApplicationInfo = ({
  title,
  description,
  bgImage,
  buttonText,
  textColor = colors.DAY,
  onClick,
}: IProps) => {
  return (
    <SubmitApplicationInfoStyled $textColor={textColor} $bgImage={bgImage}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={onClick}>{buttonText}</Button>
    </SubmitApplicationInfoStyled>
  );
};

export default SubmitApplicationInfo;

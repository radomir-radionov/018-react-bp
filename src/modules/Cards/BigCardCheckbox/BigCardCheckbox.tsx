import { FunctionComponent, SVGProps, ChangeEvent } from "react";
import {
  AdditionalInput,
  CheckOrangeIcon,
  Content,
  Input,
  Text,
  Wrapper,
} from "./styles";

interface IProps {
  id: string;
  checked: boolean;
  title: string;
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
  insertInput: boolean;
  isLastCardChoosed: boolean;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputCard: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BigCardCheckbox = ({
  id,
  checked,
  title,
  image,
  insertInput,
  isLastCardChoosed,
  placeholder = "",
  onChange,
  onChangeInputCard,
}: IProps) => {
  const ImageSVG: FunctionComponent<SVGProps<SVGSVGElement>> = image;

  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={id}
        onChange={onChangeInputCard}
        checked={checked}
      />
      <Content>
        <CheckOrangeIcon />
        <ImageSVG />
        <Text>{title}</Text>
      </Content>
      {insertInput && isLastCardChoosed && (
        <AdditionalInput
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </Wrapper>
  );
};

export default BigCardCheckbox;

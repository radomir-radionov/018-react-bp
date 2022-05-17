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
  isLastCard: boolean;
  placeholder?: string;
  value?: string;
  max?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputCard: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BigCardCheckbox = ({
  id,
  checked,
  title,
  image,
  insertInput,
  isLastCard,
  placeholder = "",
  value,
  max,
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
      {insertInput && isLastCard && (
        <AdditionalInput
          type="text"
          placeholder={placeholder}
          maxLength={max}
          value={value}
          onChange={onChange}
        />
      )}
    </Wrapper>
  );
};

export default BigCardCheckbox;

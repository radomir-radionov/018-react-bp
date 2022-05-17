import { ChangeEvent } from "react";
import { DatePicker } from "components";
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
  insertInput: boolean;
  isLastCard: boolean;
  placeholder?: string;
  datePicker?: boolean;
  dateOrder?: Date;
  onChangeDate?: (date: Date) => void;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputCard: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SmallCardCheckbox = ({
  id,
  checked,
  title,
  insertInput,
  isLastCard,
  placeholder = "",
  datePicker = false,
  dateOrder,
  onChangeDate,
  value,
  onChange,
  onChangeInputCard,
}: IProps) => {
  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={id}
        onChange={onChangeInputCard}
        checked={checked}
      />
      <Content $datePicker={datePicker}>
        <CheckOrangeIcon />
        <Text>{title}</Text>
      </Content>
      {insertInput && isLastCard && !datePicker && (
        <AdditionalInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {insertInput && isLastCard && datePicker && (
        <DatePicker value={dateOrder} onChange={onChangeDate} />
      )}
    </Wrapper>
  );
};

export default SmallCardCheckbox;

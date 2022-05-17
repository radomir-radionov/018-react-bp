import { CustomStyles, DatePickerStyled } from "./styles";
import ru from "date-fns/locale/ru";

interface IProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const DatePicker = ({ value, onChange }: IProps) => {
  return (
    <>
      {onChange && (
        <CustomStyles>
          <DatePickerStyled
            selected={value}
            onChange={onChange}
            locale={ru}
            dateFormat="dd MMMM, yyyy"
          />
        </CustomStyles>
      )}
    </>
  );
};

export default DatePicker;

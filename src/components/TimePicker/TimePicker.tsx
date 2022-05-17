import { CustomStyles, TimePickerStyled } from "./styles";

interface IProps {
  value: Date;
  onChange: (time: Date) => void;
}

const TimePicker = ({ value, onChange }: IProps) => {
  return (
    <CustomStyles>
      <TimePickerStyled
        selected={value}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeFormat="HH:mm"
        dateFormat="HH:mm"
      />
    </CustomStyles>
  );
};

export default TimePicker;

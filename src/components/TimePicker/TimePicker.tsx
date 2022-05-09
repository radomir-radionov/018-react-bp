import { useState } from "react";
import { CustomStyles, TimePickerStyled } from "./styles";

// interface IProps {}

const TimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (date: any) => {
    setStartDate(date);
  };

  return (
    <CustomStyles>
      <TimePickerStyled
        selected={startDate}
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

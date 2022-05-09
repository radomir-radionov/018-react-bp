import { useState } from "react";
import { CustomStyles, DatePickerStyled } from "./styles";
import ru from "date-fns/locale/ru";

// interface IProps {}

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (date: any) => {
    setStartDate(date);
  };

  return (
    <CustomStyles>
      <DatePickerStyled
        selected={startDate}
        onChange={onChange}
        locale={ru}
        dateFormat="dd MMMM, yyyy"
      />
    </CustomStyles>
  );
};

export default DatePicker;

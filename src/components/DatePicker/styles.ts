import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { colors } from "styles";

export const DatePickerStyled = styled(ReactDatePicker)``;

export const CustomStyles = styled.div`
  position: relative;
  width: fit-content;
  border: none !important;

  & .react-datepicker-wrapper input {
    width: 240px;
    height: 48px;
    padding: 16px 8px;
    outline: none;
    border: 1px solid ${colors.NIGHT_2};
    border-radius: 8px;
  }

  & .react-datepicker__month-container {
  }

  & .react-datepicker {
    width: 240px !important;
    border: 1px solid ${colors.AUTUMN_2};
    border-radius: 8px;
  }

  & .react-datepicker__triangle {
    display: none;
  }

  & .react-datepicker__header {
    width: 238px !important;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid ${colors.AUTUMN_2};
    background-color: ${colors.DAY};
  }

  & .react-datepicker__time,
  .react-datepicker__time-box {
    border: none;
  }

  & .react-datepicker__day--today {
    border-radius: 4px;
    background-color: ${colors.AUTUMN_3};
    color: ${colors.DAY} !important;
  }

  & .react-datepicker__day--selected {
    background-color: ${colors.AUTUMN_2} !important;
  }
`;

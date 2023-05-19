import React from "react";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const getLegalDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const newYear = year - 18;
  currentDate.setFullYear(newYear);
  return currentDate;
};

const DateInput = ({
  validationMessage = "",
  startDate,
  setStartDate = () => {},
  minDate,
  status,
  setValidationMessageDOB = () => {},
}) => {
  return (
    <div className="section-data">
      <div className={!validationMessage ? `inputDiv` : `inputDivInvalid`}>
        <div className="singup-date-picker-wrapper">
        {status === 1 ?
          <DatePicker
            showIcon
            placeholderText="Setect Date"
            className="singup-date-picker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValidationMessageDOB("");
            }}

            maxDate={getLegalDate()}
          /> :
          <DatePicker
            showIcon
            placeholderText="Setect Date"
            className="singup-date-picker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValidationMessageDOB("");
            }}
            minDate={new Date()}
          />
           }
          
        </div>
        <br />
      </div>
    </div>
  );
};
export default DateInput;

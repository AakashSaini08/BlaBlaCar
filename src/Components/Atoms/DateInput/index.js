import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css"
import "react-datepicker/dist/react-datepicker.css";    



const DateInput = ({validationMessage="" ,startDate,setStartDate=()=>{},minDate,setValidationMessageDOB=()=>{}}) => {
 
  return (
    <div className='section-data'>
    <div className={!validationMessage?`inputDiv`:`inputDivInvalid`}>
    <div className="singup-date-picker-wrapper">
    <DatePicker 
    showIcon
    placeholderText="Select a weekday"
    className="singup-date-picker"
    selected={startDate} onChange={(date) => {setStartDate(date)
      setValidationMessageDOB("")}
    } 
     minDate={minDate?minDate:'01-01-1960'}
     maxDate={!minDate?new Date():new Date().setMonth(new Date().getMonth() + 2)}/>
    </div>
        <br />
    </div>
  </div>
   
  );
};
export default DateInput;
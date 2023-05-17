import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bankDetails,
  getBankDetails,
} from "../../../../../Redux/Actions";
import { STRINGS, VALIDATION_MESSAGES } from "../../../../../Shared/Constants";
import {
  isValidAccountHolder,
  isValidAccountNumber,
  isValidIfscCode,

} from "../../../../../Shared/Utilities";
import ContinueButton from "../../../../Atoms/ContinueButton";
import CustomInput from "../../../../Atoms/CustomInput";
import Header from "../../../../Atoms/Header";

function BankDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankDetails());
  }, [dispatch]);


  const bankData = useSelector((state) => state?.bankDetailsReducer?.deatils);
  const [accountHolder, setAccountHolder] = useState(bankData?.account_holder);
  const [accountNumber, setAccountNumber] = useState(bankData?.account_no);
  const [ifscCode, setIfscCode] = useState(bankData?.ifsc_code);
  const [validationMessageAccountHolder, setValidationMessageAccountHolder] =useState("");
  const [validationMessageAccountNumber, setValidationMessageAccountNumber] =useState("");
  const [validationMessageIfscCode, setValidationMessageIfscCode] = useState("");

  const [inputType, setInputType] = useState("text");

  // const registerDataa = useSelector((state) => state?.registerReducer);
  console.log(bankData, "<<<<<<>>>>>>>");

  const navigate = useNavigate();

  useEffect(() => {
    if(bankData) {
        setAccountHolder(bankData?.account_holder)
        setAccountNumber(bankData?.account_no)
        setIfscCode(bankData?.ifsc_code)
    }
  },[bankData])


  const successSend = (res) => {
    navigate("/profile");
  };
  const failedSend = (res) => {
    //   setValidationMessage(res)
    console.log(res);
  };

  const handleSubmit = () => {
    if (!accountHolder.trim()) {
      setValidationMessageAccountHolder(
        VALIDATION_MESSAGES?.BANK_DETAILS?.ACCOUNT_HOLDER?.EMPTY
      );
    } else if (!isValidAccountHolder.test(accountHolder)) {
      setValidationMessageAccountHolder(
        VALIDATION_MESSAGES?.BANK_DETAILS?.ACCOUNT_HOLDER?.NOT_VALID
      );
    }
    if (!accountNumber.trim()) {
      setValidationMessageAccountNumber(
        VALIDATION_MESSAGES?.BANK_DETAILS?.ACCOUNT_Number?.EMPTY
      );
    } else if (!isValidAccountNumber.test(accountNumber)) {
      setValidationMessageAccountNumber(
        VALIDATION_MESSAGES?.BANK_DETAILS?.ACCOUNT_Number?.NOT_VALID
      );
    }
    if (!ifscCode.trim()) {
      setValidationMessageIfscCode(
        VALIDATION_MESSAGES?.BANK_DETAILS?.IFSC_CODE?.EMPTY
      );
    } else if (!isValidIfscCode.test(ifscCode)) {
      setValidationMessageIfscCode(
        VALIDATION_MESSAGES?.BANK_DETAILS?.IFSC_CODE?.NOT_VALID
      );
    } else {
      dispatch(
        bankDetails(
          {
            account_holder: accountHolder,
            account_no: accountNumber,
            ifsccode: ifscCode,
          },
          successSend,
          failedSend
        )
      );
    }
  };
  return (
    <div className="section-content">
      <Header heading={STRINGS?.BANK_DETAILS}></Header>
      <div className="passwordFillingMessageDiv"></div>
      <CustomInput
        type={inputType}
        state={accountHolder}
        setState={setAccountHolder}
        placeHolder="Account Holder"
        validationMessage={validationMessageAccountHolder}
        setValidationMessage={setValidationMessageAccountHolder}
        inputType={inputType}
        setInputType={setInputType}
      />
      <label className="validationMessage">
        {validationMessageAccountHolder}
      </label>
      <CustomInput
        type={inputType}
        state={accountNumber}
        setState={setAccountNumber}
        placeHolder="Account Number"
        validationMessage={validationMessageAccountNumber}
        setValidationMessage={setValidationMessageAccountNumber}
        inputType={inputType}
        setInputType={setInputType}
      />
      <label className="validationMessage">
        {validationMessageAccountNumber}
      </label>

      <CustomInput
        type={inputType}
        state={ifscCode}
        setState={setIfscCode}
        placeHolder="IFSC code"
        validationMessage={validationMessageIfscCode}
        setValidationMessage={setValidationMessageIfscCode}
        inputType={inputType}
        setInputType={setInputType}
      />
      <label className="validationMessage">{validationMessageIfscCode}</label>
      <ContinueButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default BankDetails;

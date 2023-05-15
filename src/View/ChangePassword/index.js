import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../../Components/Atoms/ContinueButton'
import CustomInput from '../../Components/Atoms/CustomInput'
import Header from '../../Components/Atoms/Header'
import { changePassword, registerData } from '../../Redux/Actions'
import { STRINGS, VALIDATION_MESSAGES } from '../../Shared/Constants'
import { isValidPassword } from '../../Shared/Utilities'
import './style.css'

function ChangePassword() {

    const dispatch=useDispatch()
  const registeredDataa=useSelector(state=>state)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validationMessage, setValidationMessage] = useState("")
    const [inputType,setInputType]=useState("password")

    const registerDataa = useSelector((state) => state?.registerReducer);
    console.log(registerDataa,"dfkjsdfjj")

    const navigate=useNavigate()
    const successPsw=(res)=>{
        localStorage.clear();
      navigate("/login")
      console.log(res)
    }
    const failedPsw=(res)=>{
      setValidationMessage(res)
    }

    const handleSubmit = () => {
      if (!currentPassword.trim()) {
        setValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.EMPTY)
    }
    else if (!isValidPassword.test(newPassword)) {
        setValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID)
    }
    else {
        if(newPassword === confirmPassword){
            dispatch(changePassword({oldpassword:currentPassword ,password:newPassword},successPsw,failedPsw))
        }else{
            setValidationMessage(VALIDATION_MESSAGES?.CHANGE_PASSWORD?.NOT_MATCHED)
        }
  }
    }
  return (
    <div className='section-content'>
     <Header heading={STRINGS?.CHANGE_PASSWORD}></Header>
     <div className='passwordFillingMessageDiv'>
  <span className='passwordFillingMessage'>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</span>
     </div>
     <CustomInput type={inputType} showEyePicture={true} state={currentPassword} setState={setCurrentPassword} placeHolder='Current password' validationMessage={validationMessage} setValidationMessage={setValidationMessage} 
      inputType={inputType} setInputType={setInputType}
     />
     <CustomInput type={inputType} showEyePicture={true} state={newPassword} setState={setNewPassword} placeHolder='New password' validationMessage={validationMessage} setValidationMessage={setValidationMessage} 
      inputType={inputType} setInputType={setInputType}
     />
     <CustomInput type={inputType} showEyePicture={true} state={confirmPassword} setState={setConfirmPassword} placeHolder='Confirm new password' validationMessage={validationMessage} setValidationMessage={setValidationMessage} 
      inputType={inputType} setInputType={setInputType}
     />
     <label className='validationMessage'>{validationMessage}</label>
     <ContinueButton handleSubmit={handleSubmit}/>
    </div>
  )
}

export default ChangePassword
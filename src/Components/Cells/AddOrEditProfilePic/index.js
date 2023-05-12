import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import { useDispatch} from 'react-redux'
import { uploadProfilePic } from '../../../Redux/Actions'
import { useNavigate } from 'react-router-dom'
export default function AddOrEditProfilePic() {
    const [image,setImage]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
const successImageUpload=()=>{
  navigate("/profile")
}
    const handleSubmit=()=>{
      const formData = new FormData();
      formData.append("profile", image);
    dispatch(uploadProfilePic(formData,successImageUpload))

     
     
    }
  return (
    <div>
        
        <div>
            <Header heading="Don't wear sunglasses, look straight ahead and make sure you're alone."></Header>
            <div className='continueButtonDiv'>
                <input id="profilePicInput" type="file" accept="image/*" name="image" className='inputProfilePicture'  onChange={(e)=>{setImage(e.target.files[0])}}></input>
            <label  className='continueButton' onClick={handleSubmit}>Choose a Picture</label>
        </div>
       
        </div>
    </div>
  )
}

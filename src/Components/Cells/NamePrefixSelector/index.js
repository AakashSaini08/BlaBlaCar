import React from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
import { STRINGS } from '../../../Shared/Constants'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerData } from '../../../Redux/Actions'

export default function NamePrefixSelector() {
    const namePrefixes=["Miss/Madam","Sir","I'd rather not say"]
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSelect=(val)=>{
        dispatch(registerData?.nameTitle(val))
        navigate("/password" )
    }

    return (
        <div className='section-content'>
        <Header heading={STRINGS?.GENDER_SELECT_HEADING}/>
        {namePrefixes.map((val,i)=><CustomLinkListCreator key={i} linkText={val} handleSelect={handleSelect}/>)}
        </div>
    )
}

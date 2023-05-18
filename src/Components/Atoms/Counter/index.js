import React from 'react'
import { Images } from '../../../Shared/Images'
import "./styles.css"
export default function Counter({value,setValue,lowerLimit,upperLimit,difference,text}) {
  return (

           <div className='Counter'>     
        <img className='additionIcon' src={Images.substracton} alt="" onClick={()=>{if(value>lowerLimit)setValue(x=>x-difference)}} />
        <label className='counterText'>{text}{value}</label>
        <img className='additionIcon' src={Images.additionIcon} alt="" onClick={()=>{if(value<upperLimit)setValue(x=>x+difference)}}/>
    </div>
  )
}

import React, { useEffect } from 'react'
import ContinueButton from '../../../../../Atoms/ContinueButton'
import Header from '../../../../../Atoms/Header'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVehicle, getVehicleData } from '../../../../../../Redux/Actions'
import { useNavigate, useParams } from 'react-router'

export default function DeleteVehicle() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    // useEffect(()=>{
    //   dispatch(getVehicleData())
    // },[dispatch])

    // const vehicleData = useSelector((state) => state?.vehicleDataReducer?.data);
    // console.log(vehicleData,"*********")
    const { id } = useParams();

    const navigateToProfile=(res)=>{
        navigate("/profile")
        getVehicleData({})
        console.log("deleted",res)
    }

    const handleSubmit=()=>{
    dispatch(deleteVehicle(id,navigateToProfile))   
    
    }
  return (
    <div>

          <div>
            <Header heading="Sure to delete Vehicle"></Header>
            <ContinueButton ButtonText='Delete' handleSubmit={handleSubmit}/>
          </div>

    </div>
  )
}

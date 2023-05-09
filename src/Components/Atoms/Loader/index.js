
import React from 'react'
import "./styles.css"
export default function Loader({show}) {
   
  return (
    <>
   {show && <div className='LoaderDiv'>
    <div className="loader"></div>
    </div>}
    </>
  )
}
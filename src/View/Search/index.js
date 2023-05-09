import React from 'react'
import SelectTrip from '../../Components/Molecules/SelectTrip'
import './style.css'
function Search() {
  return (
    <div>
        <h1>Find a ride</h1>
        <div className='search-trip'>
        <SelectTrip/>
        </div>
    </div>
  )
}

export default Search
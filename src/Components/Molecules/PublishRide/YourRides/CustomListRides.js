import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomListRides({ val }) {
    return (
        <div>
            <Link to={`/rides/offer/${val?.id}`} className={"ridesLink"}>
                <div className='RidesData'>
                    <div>
                        <label className='rideDate'>{val?.date}</label>,
                        <label className='rideTime'>{val?.time.split("T")[1].split(".")[0].split(":")[0] + ":" + val?.time.split("T")[1].split(".")[0].split(":")[1]}</label>
                    </div>
                    <div>
                        <label className='location'>{val?.source}</label>
                    </div>
                    <div>
                        <label className='location'>{val?.destination}</label>
                    </div>
                </div>
            </Link>
        </div>
    )
}

import React from 'react'

const Service = ({ service ,setTreatments }) => {
    const {name , slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="text-2xl bold text-secondary">{name}</h2>
                <p>
                    {
                    slots.length
                    ?<span>{slots[0]}</span>
                    :<span className='text-red-500'>No Slots Available</span>
                }
                </p>
                <p>{slots.length} {slots.length >1 ? "Spaces" : "Space"} Available </p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatments(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary btn-md">Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default Service
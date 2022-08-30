import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services , setServices] = useState([]);
    const [treatments, setTreatments] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:8000/service')
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[])
  return (
    <div>
         <h4 className="text-xl text-secondary text-center my-10">Available appointments on: {format(date, 'PP')}</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
            {
            services.map(service => <Service
            key={service._id}
             service={service}
             setTreatments={setTreatments}
            ></Service>)
            }
         </div>
         {treatments && <BookingModal date={date} setTreatments={setTreatments} treatments={treatments}></BookingModal>}
    </div>
  )
}

export default AvailableAppointments
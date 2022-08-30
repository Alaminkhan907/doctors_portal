import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointments from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'


const MakeAppointment = () => {
    return (
        <section style={{
            backgroundImage:`url(${appointments})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="Doctor" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className="text-xl text-primary">Appointment </h3>
                <h2 className="text-3xl text-white py-5">Make and Appointment Today</h2>
                <p className="text-white pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum ea voluptatibus inventore nobis architecto ab tempore quaerat? Ipsa soluta possimus ad aliquam excepturi beatae sit, illum hic cupiditate voluptatum.</p>   
                <PrimaryButton className='pt-12'>Book Now</PrimaryButton> 
            </div>
        </section>
    )
}

export default MakeAppointment
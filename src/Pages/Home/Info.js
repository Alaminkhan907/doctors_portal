import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Info = () => {
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InfoCard cardTitle="Opening Hours" bgClass ="bg-gradient-to-r from-secondary to-primary" img={clock} ></InfoCard>
        <InfoCard cardTitle="Our Location" bgClass =" bg-[#3A4256]" img={marker} ></InfoCard>
        <InfoCard cardTitle="Contract Us" bgClass ="bg-gradient-to-r from-secondary to-primary" img={phone} ></InfoCard>
    </div>
  )
}

export default Info
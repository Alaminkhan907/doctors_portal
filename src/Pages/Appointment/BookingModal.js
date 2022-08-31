import React from 'react'
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatments, date, setTreatments }) => {
    const { _id, name, slots } = treatments;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBookings = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentsId: _id,
            treatments: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patienName: user.displayName,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:8000/booking',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    toast(`Appointment is set for , ${ formattedDate } at ${slot}`);
                }
                else{
                    toast.error(`You already have an appointment , ${ data.booking?.date } at ${data.booking?.slot }`);
                }
                setTreatments(null);
            })
    }


    return (
        <div><input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-bold">{name}</h3>
                    <form onSubmit={handleBookings} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" disabled value={user.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
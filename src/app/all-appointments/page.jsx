import AppointmentCard from '@/components/AppointmentCard';
import React from 'react';

const AllAppointmentsPage =async () => {
    const res = await fetch("http://localhost:5000/appointments")
    const appointments = await res.json()
    return (
        <div>
            <div className='mb-5 text-center bg-linear-to-b from-cyan-50 to-white'>
                <h1 className=" text-3xl font-bold  text-slate-900 sm:text-5xl">All Appointments:</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {
                    appointments.map( appointment => <AppointmentCard key={appointment._id} appointment={appointment} ></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentsPage;
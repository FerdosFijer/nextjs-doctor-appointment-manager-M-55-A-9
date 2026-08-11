import AppointmentCard from '@/components/AppointmentCard';
import React from 'react';

const AllAppointmentsPage =async () => {
    const res = await fetch("http://localhost:5000/appointments")
    const appointments = await res.json()
    return (
        <div>
            <div>
                <h1>All Appointments</h1>
                <p> Find the right doctor for you {appointments.length}</p>
            </div>
            <div className="grid grid-cols-4 gap-8 ">
                {
                    appointments.map( appointment => <AppointmentCard key={appointment._id} appointment={appointment} ></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentsPage;
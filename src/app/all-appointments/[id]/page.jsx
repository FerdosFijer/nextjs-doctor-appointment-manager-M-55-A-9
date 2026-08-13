import BookingCard from '@/components/BookingCard';
import DeleteAlert from '@/components/DeleteAlert';
import EditModal from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const AllAppointmentsDetailsPage =async ({params}) => {
    const {id} =await params;
    const {token} = await auth.api.getToken({
    headers: await headers()
  })
    const res = await fetch(`http://localhost:5000/appointments/${id}`, {
    headers:{
      authorization:`Bearer ${token}`}
    });
    const appointment = await res.json();
    
    const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;
    return (
         <div className=" flex justify-between gap-10 max-w-7xl mx-auto my-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <Image
        className="w-200 h-150 "
        alt={name}
        src={image}
        height={500}
        width={800}
      />
      <div className="flex justify-between ">
        <div>
        <div className="flex items-center gap-2 mt-5 text-xl text-cyan-500 font-bold">
           {specialty}
        </div>
        <div className="text-3xl font-bold mt-5 ">
          <h2>Name : {name}</h2>
        </div>
        <div className="flex gap-2 items-center">
          Total Experience: {experience}
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6 ">BackGround : {hospital} Chamber: {location}</h2>
          <p className="mb-6"> {description}</p>
        </div>
        <div className="flex items-center gap-3  mt-5 mb-3">
      </div>
        <EditModal appointment={appointment} />
        <DeleteAlert appointment={appointment}/>
      <BookingCard appointment={appointment}/>
      </div>
      
      </div>
    </div>
    );
};

export default AllAppointmentsDetailsPage;
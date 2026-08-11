import BookingCard from '@/components/BookingCard';
import DeleteAlert from '@/components/DeleteAlert';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const AllAppointmentsDetailsPage =async ({params}) => {
    const {id} =await params;
    const res = await fetch(`http://localhost:5000/appointments/${id}`);
    const appointment = await res.json();
    
    const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;
    return (
         <div className=" flex justify-between gap-10 max-w-7xl mx-auto mb-10 my-10">

      <Image
        className="w-200 h-150 "
        alt={name}
        src={image}
        height={500}
        width={800}
      />
      <div className="flex justify-between ">
        <div>
        <div className="flex items-center gap-2 mt-5 text-xl">
          <LuMapPin /> <span>{specialty}</span>
        </div>
        <div className=" font-semibold mt-5 ">
          <h2>Name : {name}</h2>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegCalendar />
          Total Experience: {experience}
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6 ">BackGround : {hospital} Chamber: {location}</h2>
          <p className="mb-6"> {description}</p>
        </div>
        <div className="flex items-center gap-3  mt-5 mb-3">
        <EditModal appointment={appointment} />
        <DeleteAlert appointment={appointment}/>
      <BookingCard appointment={appointment}/>
      </div>
      </div>
      
      </div>
    </div>
    );
};

export default AllAppointmentsDetailsPage;
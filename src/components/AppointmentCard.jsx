
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const AppointmentCard = ({appointment}) => {
    const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;
    return (
        <div className='card rounded-xl mt-10 text-gray-500 border'>
            <Image className='w-full h-80 rounded-md' src={image} alt={name} height={400} width={400}/>
            <div>
                <div className='flex items-center gap-2'>
                    <LuMapPin/> <span>{specialty}</span>
                </div>
                <div className='flex justify-between items-center gap-2 font-semibold'>
                    <h2>{name}</h2>
                    <h3>{fee}</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegCalendar/>
                    {experience}
                </div>
            </div>
            <Link href={`/all-appointments/${_id}`}> <button className='flex items-center text-blue-400'>  <h2> BOOK NOW </h2> <BsArrowUpRight /></button></Link>
        </div>
    );
};

export default AppointmentCard;
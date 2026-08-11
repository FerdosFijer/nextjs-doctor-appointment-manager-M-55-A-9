import { Button } from '@heroui/react';
import React from 'react';

const BookingCard = ({appointment}) => {
    const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;

    return (
        <div>
            <Button  className={'w-full rounded-none bg-cyan-500'}> Book Now</Button>
        </div>
    );
};

export default BookingCard;
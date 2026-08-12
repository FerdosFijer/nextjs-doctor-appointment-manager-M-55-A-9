'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ appointment }) => {
 const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;
 const {data: session, isPending}= authClient?.useSession()
 const user= session?.user
 const [appointmentDate, setAppointmentDate] = useState(null);
 const handleAppointment = async () => {
    const appointmentData ={
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        userEmail: user?.email,
        appointmentId: _id,
        name, specialty,image, experience, description, hospital, location, fee,
        appointmentDate: new Date(appointmentDate)
    }; 
    const res = await fetch("http://localhost:5000/booking",{
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(appointmentData)
    })
    const data = await res.json();
 }
 
 
  return (
    <Card className="rounded-none border mt-5 ">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500"> ${fee} </h2>
      <p className="text-sm text-muted"> per person </p>
      <DateField onChange={setAppointmentDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={handleAppointment} className={"w-full rounded-none bg-cyan-500"}> Book Now</Button>
    </Card>
  );
};

export default BookingCard;

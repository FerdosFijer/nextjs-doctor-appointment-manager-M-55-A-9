import Link from "next/link";
import { redirect } from "next/navigation";

const ProfileBookingSwitch = () => {
  return (
        <div>
            {redirect(`/dashboard/booking`)}
        </div>
  );
};

export default ProfileBookingSwitch;
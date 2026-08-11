'use client'
import { AlertDialog, Button } from '@heroui/react';
import { IoTrashBin } from 'react-icons/io5';

const DeleteAlert = ({appointment}) => {
    const {_id, name, specialty,image, experience, description, hospital, location, fee } = appointment;
    const handleDelete = async () => {
        const res = await fetch (`http://localhost:5000/appointments/${id}`,{
            method:'DELETE'
        })
        const data = await res.json();
    }
    return (
        <AlertDialog>
      <Button variant="outline" className={'text-red-600 rounded-none '}> <IoTrashBin/>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteAlert;
"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const EditModal = ({ appointment }) => {
  const {
    _id,
    name,
    specialty,
    image,
    experience,
    description,
    hospital,
    location,
    fee,
  } = appointment;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedAppointment = Object.fromEntries(formData.entries());
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAppointment),
        }
      );
      const data = await res.json();
  };

  return (
    <Modal>
      <Button variant="outline" className="rounded-none">
        <BiEdit />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Doctor</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  className="p-10 space-y-8"
                  onSubmit={onSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Doctor Name */}
                    <div className="md:col-span-2">
                      <TextField
                        name="name"
                        isRequired
                        defaultValue={name}
                      >
                        <Label>Doctor Name</Label>

                        <Input
                          placeholder="Dr. John Doe"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Specialty */}
                    <div>
                      <Select
                        name="specialty"
                        defaultValue={specialty}
                        isRequired
                        className="w-full"
                        placeholder="Select specialty"
                      >
                        <Label>Specialty</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                              id="Cardiologist"
                              textValue="Cardiologist"
                            >
                              Cardiologist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Neurologist"
                              textValue="Neurologist"
                            >
                              Neurologist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Dermatologist"
                              textValue="Dermatologist"
                            >
                              Dermatologist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Orthopedic"
                              textValue="Orthopedic"
                            >
                              Orthopedic
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Pediatrician"
                              textValue="Pediatrician"
                            >
                              Pediatrician
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Gynecologist"
                              textValue="Gynecologist"
                            >
                              Gynecologist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Dentist"
                              textValue="Dentist"
                            >
                              Dentist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Psychiatrist"
                              textValue="Psychiatrist"
                            >
                              Psychiatrist
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Experience */}
                    <TextField
                      name="experience"
                      type="number"
                      isRequired
                      defaultValue={experience}
                    >
                      <Label>Experience (Years)</Label>

                      <Input
                        type="number"
                        placeholder="10"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Hospital */}
                    <TextField
                      name="hospital"
                      isRequired
                      defaultValue={hospital}
                    >
                      <Label>Hospital</Label>

                      <Input
                        placeholder="Square Hospital"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField
                      name="location"
                      isRequired
                      defaultValue={location}
                    >
                      <Label>Chamber Location</Label>

                      <Input
                        placeholder="Dhanmondi, Dhaka"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Consultation Fee */}
                    <TextField
                      name="fee"
                      type="number"
                      isRequired
                      defaultValue={fee}
                    >
                      <Label>Consultation Fee (BDT)</Label>

                      <Input
                        type="number"
                        placeholder="1000"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        name="image"
                        isRequired
                        defaultValue={image}
                      >
                        <Label>Doctor Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/doctor.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        isRequired
                        defaultValue={description}
                      >
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Write something about the doctor..."
                          className="rounded-3xl h-40"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}
                  <Modal.Footer>
                    <Button
                      type="submit"
                      slot="close"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
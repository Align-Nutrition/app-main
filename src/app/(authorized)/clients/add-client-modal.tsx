"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { FC, useState } from "react";
import { HiPlus } from "react-icons/hi";

export const AddClientModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="blue" className="p-0" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-xl" />
          Add client
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header>Add new client</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <div>
                <TextInput
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div>
                <TextInput id="lastName" name="lastName" placeholder="Green" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <div>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="example@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div>
                <TextInput
                  id="phone"
                  name="phone"
                  placeholder="e.g. +(12)3456 789"
                  type="tel"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="department">Department</Label>
              <div>
                <TextInput
                  id="department"
                  name="department"
                  placeholder="Development"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Company</Label>
              <div>
                <TextInput
                  id="company"
                  name="company"
                  placeholder="Somewhere"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpen(false)}>
            Add client
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

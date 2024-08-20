"use client";

import { useBusinessContext } from "@/lib/contexts/business-context";
import {
  Alert,
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Tooltip,
} from "flowbite-react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { BiInfoCircle } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { MdError } from "react-icons/md";
import { handleInviteClient } from "./actions";

type InviteClientModalFormType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function InviteClientModalForm({
  isOpen,
  setIsOpen,
}: InviteClientModalFormType) {
  const { trainers, business } = useBusinessContext();
  const [state, formAction] = useFormState(handleInviteClient, {
    success: false,
  });

  useEffect(() => {
    if (state.success && isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  }, [state.success, isOpen, setIsOpen]);

  return (
    <Modal onClose={() => setIsOpen(false)} show={isOpen}>
      <Modal.Header>
        <div className="inline-flex items-center gap-1 max-w-sm">
          <span>Invite client</span>
          <Tooltip
            content="The invite client feature is great for prospects or people that you
          would like to go through an onboarding experience. The onboarding
          experience collects some helpful information up front to better plan
          meals and workouts."
          >
            <BiInfoCircle className="text-gray-400" />
          </Tooltip>
        </div>
      </Modal.Header>
      <Modal.Body>
        {state?.success && (
          <div className="mb-4">
            <Alert color="success" icon={MdError}>
              {state.message}
            </Alert>
          </div>
        )}
        {state?.error && (
          <div className="mb-4">
            <Alert color="failure" icon={MdError}>
              {state.error}
            </Alert>
          </div>
        )}
        <form action={formAction}>
          <input type="hidden" name="business_id" value={business?.id ?? ""} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="full_name">Full Name</Label>
              <div>
                <TextInput
                  autoComplete="off"
                  id="full_name"
                  name="full_name"
                  placeholder="Bonnie"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <div>
                <TextInput
                  autoComplete="off"
                  id="email"
                  name="email"
                  placeholder="example@company.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="trainer_id">Trainer</Label>
              <div>
                <Select
                  id="trainer_id"
                  name="trainer_id"
                  defaultValue=""
                  autoComplete="off"
                  required
                >
                  <option value="">Choose your trainer</option>
                  {trainers.map((trainer) => (
                    <option key={trainer.id} value={trainer.user_id}>
                      {trainer.profile?.full_name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <Button type="submit">Send Invite</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export const InviteClientModal: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        color="light"
        className="whitespace-nowrap"
        onClick={() => setIsOpen(true)}
      >
        <HiPlus className="mr-2 h-3.5 w-3.5" />
        Invite client
      </Button>
      {isOpen && (
        <InviteClientModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

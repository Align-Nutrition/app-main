"use client";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FormEvent, PropsWithChildren, useState } from "react";
import { createPortal } from "react-dom";

type FormModalProps = PropsWithChildren & {
  header?: string;
  onSubmit: (arg: { [k: string]: FormDataEntryValue }) => Promise<void>;
  primaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  secondaryButtonText?: string;
};

export default function FormModal({
  children,
  header,
  onSecondaryButtonClick,
  onSubmit,
  secondaryButtonText = "Cancel",
  primaryButtonText = "Submit",
}: FormModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  return (
    document.getElementById("modal-root") &&
    createPortal(
      <Modal onClose={router.back} show>
        <form
          className="overflow-scroll"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const fields = Object.fromEntries(formData);
            setIsProcessing(true);
            onSubmit(fields).then(() => setIsProcessing(false));
          }}
        >
          {header && <Modal.Header>{header}</Modal.Header>}
          {children}
          <Modal.Footer>
            <div className="ml-auto">
              {onSecondaryButtonClick && (
                <Button
                  disabled={isProcessing}
                  outline
                  color="grey"
                  onClick={onSecondaryButtonClick}
                >
                  {secondaryButtonText}
                </Button>
              )}
              <Button
                disabled={isProcessing}
                type="submit"
                color="blue"
                isProcessing={isProcessing}
              >
                {primaryButtonText}
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>,
      document.getElementById("modal-root")!
    )
  );
}

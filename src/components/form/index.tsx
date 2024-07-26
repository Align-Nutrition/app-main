import { Label, Select, TextInput, Textarea } from "flowbite-react";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface FieldProps {
  label: string;
  id: string;
}

interface SelectInputFieldProps extends ComponentPropsWithoutRef<"select"> {
  field: "select";
  options: {
    label: string;
    value: string;
  }[];
}

interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
  field: "input";
}
interface MultilineFieldProps extends ComponentPropsWithoutRef<"textarea"> {
  field: "multiline";
}

type FormFieldProps =
  | SelectInputFieldProps
  | MultilineFieldProps
  | InputFieldProps;

type FormProps = PropsWithChildren & {
  onSubmit: () => void;
};

function FieldWithLabel({
  children,
  htmlFor,
  label,
}: PropsWithChildren<{ htmlFor: string; label: string }>) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <div>{children}</div>
    </div>
  );
}

function InputFormField(props: InputFieldProps & FieldProps) {
  return (
    <FieldWithLabel label={props.label} htmlFor={props.id}>
      <TextInput {...props} />
    </FieldWithLabel>
  );
}

function MultilineFormField(props: MultilineFieldProps & FieldProps) {
  return (
    <FieldWithLabel label={props.label} htmlFor={props.id}>
      <Textarea {...props} />
    </FieldWithLabel>
  );
}

function SelectFormField(props: SelectInputFieldProps & FieldProps) {
  return (
    <FieldWithLabel label={props.label} htmlFor={props.id}>
      <Select {...props}>
        <option value="">Select</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FieldWithLabel>
  );
}

export function FormField(props: FormFieldProps & FieldProps) {
  const components = {
    multiline: MultilineFormField,
    input: InputFormField,
    select: SelectFormField,
  };

  const Component = components[props.field];

  return null;
}

export default function Form({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

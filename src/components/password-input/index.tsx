"use client";

import { TextInput } from "flowbite-react";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type PasswordInputPropType = {
  id?: string;
  name?: string;
  required?: boolean;
};

export default function PasswordInput({
  id,
  name,
  required,
}: PasswordInputPropType) {
  const [visible, setIsVisible] = useState(false);
  const Icon = visible ? MdVisibilityOff : MdVisibility;

  return (
    <div className="w-full relative">
      <TextInput
        autoComplete="new-password"
        type={visible ? "text" : "password"}
        name={name}
        id={id}
        placeholder="••••••••"
        required={required}
      />
      <Icon
        className="absolute right-3 bottom-3 cursor-pointer text-gray-600"
        onClick={() => setIsVisible((prevState) => !prevState)}
      />
    </div>
  );
}

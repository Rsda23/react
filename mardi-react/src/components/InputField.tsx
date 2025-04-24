import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded border p-2 text-white"
      />
    </div>
  );
}

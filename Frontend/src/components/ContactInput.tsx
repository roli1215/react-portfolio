import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  error?: string;
  focusedField: string | null;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (name: string) => void;
  onBlur: () => void;
}

const ContactInput = ({ label, name, value, error, focusedField, type = "text", onChange, onFocus, onBlur }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="uppercase text-sm py-2 font-bold">{label}</label>

      <input className="border-2 rounded-lg p-3 border-gray-300" type={type} name={name} value={value} onChange={onChange} onFocus={() => onFocus(name)} onBlur={onBlur} required />

      {error && focusedField === name && <p className="text-red-500 font-bold text-xs">{error}</p>}
    </div>
  );
};

export default ContactInput;

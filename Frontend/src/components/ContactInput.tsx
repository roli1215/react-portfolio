import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  focused: boolean;
  error?: string;
  type?: string;
  textarea?: boolean;

  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  onFocus: () => void;
  onBlur: () => void;
};

const classes = "border-2 border-gray-300 rounded-lg p-3";

export default function ContactInput({ label, name, value, focused, error, type = "text", textarea, onChange, onFocus, onBlur }: Props) {
  return (
    <div className="flex flex-col py-2">
      <label className="uppercase text-sm font-bold py-2">{label}</label>

      {textarea ? (
        <textarea rows={10} className={classes} name={name} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} required />
      ) : (
        <input className={classes} type={type} name={name} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} required />
      )}

      {focused && error && <p className="text-xs text-red-500 font-bold mt-1">{error}</p>}
    </div>
  );
}

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

export function InputForm(props: InputProps) {
  return (
    <input
      {...props}
      className="rounded py-3 px-4 w-[400px] bg-gray-800 text-white-200 text-sm font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-rose-600
      focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
    />
  );
}

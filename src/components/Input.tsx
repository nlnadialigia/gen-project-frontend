import { InputHTMLAttributes, ReactNode } from "react";


interface inputType extends InputHTMLAttributes<HTMLInputElement>{}


export function Input(props: inputType) {
  return (
    <input
      {...props}
      className="pl-12 pr-4 py-3 rounded w-[400px] bg-gray-800 text-gray-200 text-sm font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-rose-600
          focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
    />
  );
}

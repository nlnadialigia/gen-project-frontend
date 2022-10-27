import { InputHTMLAttributes, ReactNode } from "react";
import * as Label from '@radix-ui/react-label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  titleLabel: string;
  icon: ReactNode;
  input: {
    type: string;
    name: string;
    id: string;
    placeholder: string;
  }
}

export function InputForm(props: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <Label.Root
        htmlFor={props.id}
        className="text-gray-200 text-base font-bold"
      >
        {props.titleLabel}
      </Label.Root>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-gray-200">
          {props.icon}
        </div>
        <input
          {...props.input}
          className="pl-12 pr-4 py-3 rounded w-[400px] bg-gray-800 text-gray-200 text-sm font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-rose-600
          focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
        />
      </div>
    </div>
  );
}

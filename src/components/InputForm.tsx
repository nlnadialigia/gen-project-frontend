import { InputHTMLAttributes, ReactNode } from "react";
import * as Label from "@radix-ui/react-label";
import { Input } from "./Input";

interface LabelProps{
  titleLabel: string;
  icon: ReactNode;
  input: InputHTMLAttributes<HTMLInputElement>;
}


export function InputForm(props: LabelProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <Label.Root
        htmlFor={props.input.name}
        className="text-gray-200 text-base font-bold"
      >
        
        {props.titleLabel}
      </Label.Root>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-gray-200">{props.icon}
      </div>
        <Input {...props.input}/>
    </div>
    </div>
  )
}

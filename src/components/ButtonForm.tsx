import { ButtonHTMLAttributes } from "react";

import { Slot } from "@radix-ui/react-slot";

// Aqui estou criando uma interface e passando para ele ter todas as caracteristicas de um button  normal do HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}

export function ButtonForm(props: ButtonProps) {
    const Button = props.asChild ? Slot : 'button'
  return (
    // Aqui o spreed operator para ser aplicado todos os atributos
    <Button
      type="submit"
      className="my-8 px-4 py-3 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 w-full text-white-200 font-bold text-md transition-colors"
      {...props}
    />
  );
}

import { ButtonHTMLAttributes } from "react";

import { Slot } from "@radix-ui/react-slot";

// Aqui estou criando uma interface e passando para ele ter todas as caracteristicas de um button  normal do HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}

export function ButtonSignIn(props: ButtonProps) {
    const Button = props.asChild ? Slot : 'button'
  return (
    // Aqui o spreed operator para ser aplicado todos os atributos
    <Button
      className="px-4 py-2 rounded-md bg-indigo-500 w-full text-white-200"
      {...props}
    />
  );
}

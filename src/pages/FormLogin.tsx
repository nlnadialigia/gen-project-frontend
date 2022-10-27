import { ButtonForm } from "../components/ButtonForm";
import * as Label from "@radix-ui/react-label";
import { InputForm } from "../components/InputForm";

export function FormLogin() {
  return (
    <form action="" className="">
      <h1 className="text-3xl font-bold text-gray-200 text-center mb-8">
        Entre na sua conta!
      </h1>
      <div className="flex flex-col mb-3">
        <Label.Root
          htmlFor="email"
          className="text-gray-200 text-base font-bold mb-3"
        >
          Email
        </Label.Root>
        <InputForm
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          />
      </div>

      <div className="flex flex-col mb-3">
        <Label.Root
          htmlFor="password"
          className="text-gray-200 text-base font-bold mb-3"
        >
          Senha
        </Label.Root>
        <InputForm
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>

      <div className="w-[400px] ">
        <ButtonForm>Enviar</ButtonForm>
      </div>
    </form>
  );
}

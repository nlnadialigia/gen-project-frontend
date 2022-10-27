import { ButtonForm } from "../components/ButtonForm";
import * as Label from "@radix-ui/react-label";
import { InputForm } from "../components/InputForm";

export function FormLogin() {
  return (
    <form action="" className="">
      <h1 className="text-3xl font-bold text-gray-200 text-center mb-8">
        Entre na sua conta!
      </h1>

      <div className="w-[400px] ">
        <ButtonForm>Enviar</ButtonForm>
      </div>
    </form>
  );
}

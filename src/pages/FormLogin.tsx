import { ButtonForm } from "../components/ButtonForm";
import { InputForm } from "../components/InputForm";
import { EnvelopeSimple, Check, Key } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../services/firebase";

import * as Checkbox from "@radix-ui/react-checkbox";
import GoogleIcon from "../assets/google-icon.svg";

export function FormLogin() {
  const [rememberMe, setRememberMe] = useState(false);
  const [userGoogle, setUserGoogle] = useState<User>({} as User);

  function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUserGoogle(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="my-8 text-white flex flex-col items-center justify-center">
      <form action="#" onSubmit={handleCreateUser}>
        <h1 className="text-3xl font-bold text-gray-200 text-center mb-8">
          Entre na sua conta!
        </h1>

        <InputForm
          titleLabel="Email"
          icon={<EnvelopeSimple size={20} />}
          input={{
            type: "email",
            name: "email",
            placeholder: "Digite seu email",
            required: true

          }}
        />
        <InputForm
          titleLabel="Senha"
          icon={<Key size={20} />}
          input={{
            type: "password",
            placeholder: "********",
            name: "password",
            minLength:8,
            required: true
          }}
        />
        <label className="mt-8 items-center flex gap-2 text-sm">
          <Checkbox.Root
            checked={rememberMe}
            onCheckedChange={(checked) => {
              if (checked === true) {
                setRememberMe(true);
              } else {
                setRememberMe(false);
              }
            }}
            className="p-1 w-6 h-6 rounded bg-zinc-900 "
          >
            <Checkbox.CheckboxIndicator>
              <Check className="w-4 h-4 text-indigo-500" />
            </Checkbox.CheckboxIndicator>
          </Checkbox.Root>
          Lembrar de mim!
        </label>

        <div className="w-[400px] ">
          <ButtonForm>Enviar</ButtonForm>
        </div>
      </form>
      <span className="text-gray-200">ou</span>

      <button className="my-6" onClick={handleGoogleSignIn}>
        <img src={GoogleIcon} alt="" />
      </button>
      <Link
        to="/"
        className="text-gray-200 text-sm underline underline-offset-2 "
      >
        Esqueceu sua senha?
      </Link>
      <Link
        to="/singup"
        className="text-gray-200 text-sm underline underline-offset-2"
      >
        Não possui conta? crie uma agora
      </Link>
    </div>
  );
}

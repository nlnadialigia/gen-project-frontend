import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { ButtonForm } from "../components/ButtonForm";
import { InputForm } from "../components/InputForm";

import GoogleIcon from '../assets/google-icon.svg';

export function FormSignUp() {
    return (
        <div className="my-6 text-white flex flex-col items-center justify-center">
            <h1 className="mb-14 font-bold text-3xl">Crie sua conta</h1>

            <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <Label.Root 
                        htmlFor="name"
                        className="text-gray-200 text-base font-bold"
                    > 
                        Nome
                    </Label.Root>
                    <InputForm
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite seu nome"
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <Label.Root 
                        htmlFor="email"
                        className="text-gray-200 text-base font-bold"
                    > 
                        Email
                    </Label.Root>
                    <InputForm
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu email"
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <Label.Root 
                        htmlFor="password"
                        className="text-gray-200 text-base font-bold"
                    > 
                        Senha
                    </Label.Root>
                    <InputForm
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <Label.Root 
                        htmlFor="passwordConfirm"
                        className="text-gray-200 text-base font-bold"
                    > 
                        Confirmar senha
                    </Label.Root>
                    <InputForm
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="Confirme sua senha"
                        />
                </div>

                <ButtonForm>Criar conta</ButtonForm>
            </form>

            <span className="">ou</span>

            <button className="my-6">
                <img src={GoogleIcon} alt="" />
            </button>

            <Link to="/" className="underline underline-offset-2">Já possui conta? Faça login agora</Link>
        </div>
    )
}
import * as Label from "@radix-ui/react-label";
import { User } from "phosphor-react";
import { Link } from "react-router-dom";
import { ButtonForm } from "../components/ButtonForm";
import { InputForm } from "../components/InputForm";

import GoogleIcon from '../assets/google-icon.svg';

export function FormSignUp() {
    return (
        <div className="my-8 text-white flex flex-col items-center justify-center">
            <h1 className="mb-8 font-bold text-3xl">Crie sua conta</h1>

            <form action="" className="flex flex-col gap-3">
                <InputForm
                    titleLabel="Nome"
                    icon={<User size={20}/>}
                    input={{
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Digite seu nome",
                    }}
                />
                
                <ButtonForm>Criar conta</ButtonForm>
            </form>

            <span className="text-gray-200">ou</span>

            <button className="my-6">
                <img src={GoogleIcon} alt="" />
            </button>

            <Link to="/" className="text-gray-200 underline underline-offset-2">Já possui conta? Faça login agora</Link>
        </div>
    )
}
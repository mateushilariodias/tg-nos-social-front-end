"use client";

import AuthInput from "@/components/common/AuthInput";
import Link from "next/link";
import { useState } from "react";

function RegisterUser() {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [phoneNumberUser, setPhoneNumberUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleRegisterUser = (e: any) => {
        e.preventDefault();

        if (!fullName.match(/^[a-zA-Z\s]*$/)) {
            setError("O campo nome só pode permitir letras maiúsculas e minúsculas.");
            return;
        }
        if (!userName.match(/^[a-zA-Z0-9]*$/)) {
            setError("O campo de usuário só pode conter letras maiúsculas, minúsculas e números.");
            return;
        }
        if (!emailUser.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError("O campo de email deve ter um formato válido.");
            return;
        }
        if (!phoneNumberUser.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
            setError("O campo de telefone deve ter o formato (XX) XXXXX-XXXX.");
            return;
        }
        if (!passwordUser.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)) {
            setError("A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
            return;
        }
        if (passwordUser !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        return (
            <>
                <h1 className="font-bold text-2xl">Cadastro de usuário</h1>
                <AuthInput newState={setFullName} htmlForAndNameAndId="fullName" label="Nome:" type="text"></AuthInput>
                <AuthInput newState={setUserName} htmlForAndNameAndId="userName" label="Nome de usuário:" type="text"></AuthInput>
                <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"></AuthInput>
                <AuthInput newState={setPhoneNumberUser} htmlForAndNameAndId="phoneNumberUser" label="Celular:" type="tel"></AuthInput>
                <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password"></AuthInput>
                <AuthInput newState={setConfirmPassword} htmlForAndNameAndId="confirmPassword" label="Confirme a senha:" type="password"></AuthInput>
                {error.length > 0 && <span className="text-red-600">* {error}</span>}
                {success.length > 0 && <span className="text-green-600">* {success}</span>}
                <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                    <strong>Cadastrar-se</strong>
                </button>
                <div className="flex justify-between">
                    <Link href="/loginUser"><span className="text-left underline">Logar</span></Link>
                    <Link href="/resetUserPassword"><span className="text-right underline">Redefinir senha</span></Link>
                </div>
            </>
        );
    }
}
export default RegisterUser;
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

    return (
        <>
            <h1 className="font-bold text-2xl">Cadastro de usuário</h1>
            <AuthInput newState={setFullName} htmlForAndNameAndId="fullName" label="Nome:" type="text"></AuthInput>
            <AuthInput newState={setUserName} htmlForAndNameAndId="userName" label="Nome de usuário:" type="text"></AuthInput>
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"></AuthInput>
            <AuthInput newState={setPhoneNumberUser} htmlForAndNameAndId="phoneNumberUser" label="Celular:" type="tel"></AuthInput>
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password"></AuthInput>
            <AuthInput newState={setConfirmPassword} htmlForAndNameAndId="confirmPassword" label="Confirme a senha:" type="password"></AuthInput>
            <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
                <strong>Cadastrar-se</strong>
            </Link>
            <div className="flex justify-between">
                <Link href="/loginUser"><span className="text-left underline">Logar</span></Link>
                <Link href="/resetUserPassword"><span className="text-right underline">Redefinir senha</span></Link>
            </div>
        </>
    );
}
export default RegisterUser;
"use client";

import AuthInput from "@/components/common/AuthInput";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginUser() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    return (
        <>
            <h1 className="font-bold text-2xl">Login de usuário</h1>
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"/>
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password" />
            {error && <p className="text-red-600">{error}</p>}
            <Link href="/feedUser" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
                <strong>Entrar</strong>
            </Link>
            <div className="flex justify-between">
                <Link href="/registerUser"><span className="text-left underline">Cadastre-se</span></Link>
                <Link href="/resetUserPassword"><span className="text-right underline">Redefinir senha</span></Link>
            </div>
        </>
    );
}

export default LoginUser;
"use client";

import AuthInput from "@/components/common/AuthInput";
import Link from "next/link";
import { useState } from "react";

function ResetUserPassword() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [code, setCode] = useState("");

    return (
        <>
            <h1 className="font-bold text-2xl">Redefinir senha</h1>
            <h2 className="font-semibold text-lg">Etapa 1:</h2>
            <span>Digite o e-mail que você cadastrou em nossa base de dados, em seguida clique em &quot;Receber código por e-mail&quot;:</span>
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"></AuthInput>
            <Link href="/resetUserPassword" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
                <strong>Receber código por e-mail</strong>
            </Link>
            <h2 className="font-semibold text-lg">Etapa 2:</h2>
            <span>Agora, insira o código recebido por e-mail e clique em &quot;Validar código&quot;:</span>
            <AuthInput newState={setCode} htmlForAndNameAndId="code" label="Código:" type="text"></AuthInput>
            <Link href="/resetUserPassword" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
                <strong>Validar código</strong>
            </Link>
            <h2 className="font-semibold text-lg">Etapa 3:</h2>
            <span>Pronto, você já pode digitar a sua nova senha e, logo apśs, clicar em &quot;Registrar nova senha&quot;, para começar a usa-lá:</span>
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Nova senha:" type="password"></AuthInput>
            <Link href="/feedUser" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
                <strong>Registrar nova senha</strong>
            </Link>
            <div className="flex justify-between">
                <Link href="/registerUser"><span className="text-left underline">Cadastar-se</span></Link>
                <Link href="/loginUser"><span className="text-right underline">Logar</span></Link>
            </div>
        </>
    )
}
export default ResetUserPassword;
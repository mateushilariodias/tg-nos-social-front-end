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

    const handleLogin = async () => {
        try {
            const response = await fetch('/db.json');
            const data = await response.json();

            const user = data.users.find(
                (user: { emailUser: string; passwordUser: string; }) => user.emailUser === emailUser && user.passwordUser === passwordUser
            );

            if (user) {
                console.log("Login bem-sucedido, redirecionando...");

                // Salvar o usuário no localStorage para manter a sessão
                localStorage.setItem("nos-social:user", JSON.stringify(user));

                // Redirecionar para a página de feed do usuário
                router.push(`/feed/${user.userName}`);
            } else {
                setError("E-mail ou senha incorretos");
            }
        } catch (err) {
            console.error("Erro ao consultar os dados:", err);
            setError("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
        }
    };

    return (
        <>
            <h1 className="font-bold text-2xl">Login de usuário</h1>
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"/>
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password" />
            {error && <p className="text-red-600">{error}</p>}
            <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center"
            >
                <strong>Entrar</strong>
            </button>
            <div className="flex justify-between">
                <Link href="/registerUser"><span className="text-left underline">Cadastre-se</span></Link>
                <Link href="/resetUserPassword"><span className="text-right underline">Redefinir senha</span></Link>
            </div>
        </>
    );
}

export default LoginUser;
"use client";

import AuthInput from "@/components/common/AuthInput";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

function UserConfiguration() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [phoneNumberUser, setPhoneNumberUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState<string>('');

    useEffect(() => {

        api.get('/api/users/get-user?id=user-id')
            .then(response => {
                const user = response.data;
                setFullName(user.fullName);
                setUserName(user.userName);
                setEmailUser(user.emailUser);
                setPhoneNumberUser(user.phoneNumberUser);
                setProfilePicture(user.profilePicture || '');
            })
            .catch(error => {
                console.error("Erro ao buscar dados do usuário:", error);
            });
    }, []);

    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setProfilePicture(reader.result);
          }
        };

        if (file) {
          reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <h1 className="font-bold text-2xl">Configuração de usuário</h1>
            <div>
                <img className="w-24 h-24 rounded-full mx-auto" src={profilePicture || "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                <input placeholder="Imagem" type="file" accept="image/*" className="pt-4" onChange={handleProfilePicChange} />
            </div>
            <AuthInput newState={setFullName} htmlForAndNameAndId="fullName" label="Nome:" type="text" value={fullName} />
            <AuthInput newState={setUserName} htmlForAndNameAndId="userName" label="Nome de usuário:" type="text" value={userName} />
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email" value={emailUser} />
            <AuthInput newState={setPhoneNumberUser} htmlForAndNameAndId="phoneNumberUser" label="Celular:" type="tel" value={phoneNumberUser} />
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password" value={passwordUser} />
            <AuthInput newState={setConfirmPassword} htmlForAndNameAndId="confirmPassword" label="Confirme a senha:" type="password" value={confirmPassword} />
            <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                <strong>Salvar alterações</strong>
            </button>
            <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                <strong>Excluir cadastro</strong>
            </button>
        </>
    );
}

export default UserConfiguration;
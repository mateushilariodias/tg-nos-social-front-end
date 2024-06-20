"use client";

import AuthInput from "@/components/common/AuthInput";
import { useState } from "react";

function UserConfiguration() {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [phoneNumberUser, setPhoneNumberUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState<string>('');

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
                <input placeholder="Imagem" type="file" accept="image/*" className="pt-4" />
             </div>
            <AuthInput newState={setFullName} htmlForAndNameAndId="fullName" label="Nome:" type="text"></AuthInput>
            <AuthInput newState={setUserName} htmlForAndNameAndId="userName" label="Nome de usuário:" type="text"></AuthInput>
            <AuthInput newState={setEmailUser} htmlForAndNameAndId="emailUser" label="E-mail:" type="email"></AuthInput>
            <AuthInput newState={setPhoneNumberUser} htmlForAndNameAndId="phoneNumberUser" label="Celular:" type="tel"></AuthInput>
            <AuthInput newState={setPasswordUser} htmlForAndNameAndId="passwordUser" label="Senha:" type="password"></AuthInput>
            <AuthInput newState={setConfirmPassword} htmlForAndNameAndId="confirmPassword" label="Confirme a senha:" type="password"></AuthInput>
            <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                <strong>Salvar alteraçães</strong>
            </button>
            <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                <strong>Excluir cadastro</strong>
            </button>
        </>
    );
}
export default UserConfiguration;
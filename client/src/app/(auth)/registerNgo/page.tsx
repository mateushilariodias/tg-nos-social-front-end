"use client";

import AuthInput from "@/components/common/AuthInput";
import { useState } from "react";

function RegisterNgo() {

    const [cnpj, setCnpj] = useState("");
    const [stateRegistration, setStateRegistration] = useState("");
    const [corporateReason, setCorporateReason] = useState("");
    const [emailNgo, setEmailNgo] = useState("");
    const [phoneNumberNgo, setPhoneNumberNgo] = useState("");
    const [physicalAddress, setPhysicalAddress] = useState("");
    const [objectiveOfTheNgo, setObjectiveOfTheNgo] = useState("");
    const [pageName, setPageName] = useState("");
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    return (
        <>
            <h1 className="font-bold text-2xl">Cadastro de ONG</h1>
            <AuthInput newState={setCnpj} htmlForAndNameAndId="cnpj" label="CNPJ da ONG:" type="text"></AuthInput>
            <AuthInput newState={setStateRegistration} htmlForAndNameAndId="stateRegistration" label="Inscrição estadual de SP da ONG" type="text"></AuthInput>
            <AuthInput newState={setCorporateReason} htmlForAndNameAndId="corporateReason" label="Razão social da ONG:" type="text"></AuthInput>
            <AuthInput newState={setEmailNgo} htmlForAndNameAndId="emailNgo" label="E-mail da ONG:" type="email"></AuthInput>
            <AuthInput newState={setPhoneNumberNgo} htmlForAndNameAndId="phoneNumberNgo" label="Número de telefone celular da ONG:" type="tel"></AuthInput>
            <AuthInput newState={setPhysicalAddress} htmlForAndNameAndId="physicalAddress" label="Endereço físico da ONG:" type="text"></AuthInput>
            <AuthInput newState={setObjectiveOfTheNgo} htmlForAndNameAndId="objectiveOfTheNgo" label="Objetivo da ONG:" type="text"></AuthInput>
            <AuthInput newState={setPageName} htmlForAndNameAndId="pageName" label="Nome da página:" type="text"></AuthInput>
            <button className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg">
                <strong>Cadastrar-se</strong>
            </button>
        </>
    );
}
export default RegisterNgo;
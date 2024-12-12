"use client";

import AuthInput from "@/components/common/AuthInput";
import Link from "next/link";
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

  return (
    <>
      <h1 className="font-bold text-2xl">Cadastro de ONG</h1>
      <AuthInput newState={setCnpj} htmlForAndNameAndId="cnpj" label="CNPJ da ONG" placeholder="12.345.678/0001-99" type="text"></AuthInput>
      <AuthInput newState={setStateRegistration} htmlForAndNameAndId="stateRegistration" label="Inscrição estadual de SP da ONG" placeholder="12345678" type="text"></AuthInput>
      <AuthInput newState={setCorporateReason} htmlForAndNameAndId="corporateReason" label="Razão social da ONG" placeholder="ONG Solidariedade e Ação Social" type="text"></AuthInput>
      <AuthInput newState={setEmailNgo} htmlForAndNameAndId="emailNgo" label="E-mail da ONG" placeholder="solidariedadeong@gmail.com" type="email"></AuthInput>
      <AuthInput newState={setPhoneNumberNgo} htmlForAndNameAndId="phoneNumberNgo" label="Número de telefone celular da ONG" placeholder="(11) 98765-4321" type="tel"></AuthInput>
      <AuthInput newState={setPhysicalAddress} htmlForAndNameAndId="physicalAddress" label="Endereço físico da ONG" placeholder="Rua Principal, 123, Bairro, Cidade - Estado, CEP" type="text"></AuthInput>
      <AuthInput newState={setObjectiveOfTheNgo} htmlForAndNameAndId="objectiveOfTheNgo" label="Objetivo da ONG" placeholder="Promover ações sociais e educacionais para comunidades carentes" type="text"></AuthInput>
      <AuthInput newState={setPageName} htmlForAndNameAndId="pageName" label="Nome da página" placeholder="ONG Solidariedade" type="text"></AuthInput>
      <Link href="/feedNgo" className="bg-blue-600 hover:bg-blue-800 py-3 font-bold text-white rounded-lg text-center">
        <strong>Cadastrar-se</strong>
      </Link>
    </>
  );
}
export default RegisterNgo;
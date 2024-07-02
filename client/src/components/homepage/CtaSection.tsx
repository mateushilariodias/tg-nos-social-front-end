'use client'

import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="w-full bg-blue-800 text-white pb-16">
            <div className="w-full lg:max-w-4xl lg:mx-auto px-3 lg:px-0">
                <h2 className="font-bold text-center text-white text-3xl pt-12 pb-6">
                    Descubra e Apoie ONG que Fazem a Diferença!
                </h2>
                <p className="text-center text-white text-xl">
                    Está procurando uma maneira de ajudar e se envolver com ONG dedicadas a transformar o mundo? Nossa plataforma é o lugar perfeito para encontrar e apoiar causas que importam!
                </p>
            </div>
            <article className="flex flex-col lg:flex-row gap-3 max-w-4xl mx-auto p-4 lg:py-8 lg:px-0 ">
                <div className="bg-gray-900 text-white w-full p-3">
                    <strong className="text-xl">Explore Iniciativas Inspiradoras:</strong><br />
                    <span className="text-lg">Conheça projetos impactantes e as histórias por trás deles.</span>
                </div>
                <div className="bg-white text-gray-900 w-full p-3">
                    <strong className="text-xl">Conecte-se com ONGs:</strong><br />
                    <span className="text-lg">Encontre e entre em contato com organizações que compartilham seus valores.</span>
                </div>
                <div className="bg-gray-900 text-white w-full p-3">
                    <strong className="text-xl">Faça a Diferença:</strong><br />
                    <span className="text-lg">Contribua com seu tempo, habilidades ou doações para apoiar causas importantes.</span>
                </div>
            </article>
            <div className="w-full lg:max-w-4xl lg:mx-auto px-4 lg:px-0">
                <p className="text-left text-white text-xl pb-8">
                    Não perca a oportunidade de fazer parte de algo maior. Junte-se a nós e ajude a criar um impacto positivo no mundo!
                </p>
                <Link href="/registerUser" className="bg-white hover:bg-slate-100 lg:mb-0 py-4 px-6 font-bold text-blue-800 rounded-lg text-sm lg:text-lg uppercase text-center">
                    <strong>Cadastrar-se como usuário</strong>
                </Link>
            </div>
        </section>
    );
}
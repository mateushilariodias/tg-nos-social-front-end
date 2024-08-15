'use client';

import { DataAboutSection } from "@/data/homepage/AboutSection";
import AboutSectionRender from "./AboutSectionRender";

export default function AboutSection() {
    return (
        <section id="aboutSection" className="w-full bg-gray-50 text-gray-900 pb-16 lg:pb-20">
            <h2 className="font-bold text-center text-3xl pt-16 lg:pt-20 pb-4">
                Um pouco sobre <br /> a Nós Social - São Paulo
            </h2>
            <div className="xl:max-w-4xl mx-auto px-4">
                <p className="text-center text-xl pb-6">Nosso objetivo é oferecer um espaço onde as ONG possam se cadastrar e compartilhar suas atividades beneficentes com o público. Aqui, você encontrará uma variedade de projetos e iniciativas realizadas por ONG locais, desde campanhas de arrecadação até eventos de conscientização.</p>
                <p className="text-center text-xl pb-6">Ao explorar nossa plataforma, você terá a oportunidade de se envolver com a comunidade e fazer a diferença de maneira significativa. Encontre ONG que estejam alinhadas com seus interesses e valores, descubra oportunidades de voluntariado e apoie causas que você se importa.</p>
                <p className="text-center text-xl pb-6">Junte-se a nós nesta jornada de solidariedade e impacto social. Vamos trabalhar juntos para construir um futuro melhor para todos.</p>
                <p className="text-center text-xl pb-6">Conheça um pouco mais sobre a proposta do projeto de forma introdutória e transparente.</p>
            </div>
            <article className="CardsAboutSection block lg:hidden w-full lg:overflow-hidden relative px-4">
                <AboutSectionRender data={DataAboutSection} />
            </article>
            <article className="hidden lg:block">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 lg:px-0 h-auto">
                    {DataAboutSection.map((item) => (
                        <li key={item.id} className="border border-solid border-blue-800 text-gray-900 p-4 rounded-md shadow-md">
                            <h3 className="text-2xl font-semibold pb-2">{item.title}</h3>
                            <p className="text-xl text-justify pb-4">{item.content}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}
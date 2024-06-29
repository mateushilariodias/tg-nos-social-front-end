'use client';

import { DataAboutSection } from "@/data/homepage/AboutSection";
import AboutSectionRender from "./AboutSectionRender";

export default function AboutSection() {
    return (
        <section className="w-full bg-gray-50 pb-12">
            <h2 className="font-bold text-center text-3xl pt-12 pb-6">
                Um pouco sobre <br /> a Nós Social - São Paulo
            </h2>
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
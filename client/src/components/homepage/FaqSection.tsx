'use client'

import { DataFaqSection } from "@/data/homepage/FaqSection";
import FaqRender from "./FaqRender";

export default function FaqSection() {
    return (
        <section className="w-full bg-gray-50 text-gray-900 pb-12">
            <div className="w-full lg:max-w-4xl lg:mx-auto px-3 lg:px-0">
                <h2 className="font-bold text-center text-3xl pt-12 pb-6">
                    FAQ
                </h2>
                <p className="text-center text-xl">
                    <strong>Nota Importante:</strong> Gostaríamos de ressaltar que muitas funcionalidades ainda não estarão disponíveis, pois este projeto está em fase de teste para verificar sua viabilidade prática, apesar de já ter se demonstrado viável em teoria.
                </p>
            </div>
            <article className="py-5 px-4 lg:px-4">
                <FaqRender data={DataFaqSection} />
            </article>
        </section>
    );
}
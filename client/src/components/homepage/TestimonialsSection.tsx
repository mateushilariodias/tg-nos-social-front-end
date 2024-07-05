'use client'

import TestimonialsRender from "./TestimonialsRender";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function FaqSTestimonialsSectionection() {
    return (
        <section className="w-full bg-gray-900 text-white pb-12">
            <div className="w-full lg:max-w-4xl lg:mx-auto px-3 lg:px-0">
                <h2 className="font-bold text-center text-white text-3xl pt-12 pb-6">
                    Depoimentos
                </h2>
                <p className="text-center text-white text-xl">
                    Apresentamos aqui as falas dos entrevistados durante o processo de entendimento do segmento e dos membros da equipe que estão fazendo este projeto acontecer.
                </p>
            </div>
            <article className="bullets flex items-center justify-center lg:max-w-7xl pt-6 pb-6 lg:mx-auto relative z-10">
                <div className='button-prev relative z-20 lg:mr-7'>
                    <FaArrowLeft className="h-4 hidden lg:block" />
                </div>
                <TestimonialsRender/>
                <div className='button-next relative z-20 lg:ml-7'>
                    <FaArrowRight className="h-4 hidden lg:block" />
                </div>
            </article>
        </section>
    );
}
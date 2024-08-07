'use client';

import { IDataAboutSection } from "@/data/homepage/AboutSection";

interface ICardsAboutSectionProps {
    data: IDataAboutSection;
    className?: string;
}

export default function CardsAboutSection({ className, data }: ICardsAboutSectionProps): JSX.Element {
    const { title, content } = data;
    return (
        <div className={"h-full border border-solid border-blue-800 text-gray-900 p-4 rounded-md shadow-md " + className}>
            <h3 className="text-2xl text-center lg:text-left font-semibold pb-2">{title}</h3>
            <p className="text-xl text-center lg:text-justify pb-4">{content}</p>
        </div>
    );
}
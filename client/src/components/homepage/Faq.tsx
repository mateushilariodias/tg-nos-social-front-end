'use client';

import { useState } from 'react';
import { IDataFaqSection } from '@/data/homepage/FaqSection';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface IFaqProps {
    data: IDataFaqSection;
    className?: string;
}

export default function CardsAboutSection({ className, data }: IFaqProps): JSX.Element {
    const { id, question, answer } = data;
    const [clickArrow, setClickArrow] = useState<boolean>(true);

    return (
        <div className={"lg:max-w-4xl lg:mx-auto border-solid border-b-2 border-gray-50 text-gray-900 p-4 rounded-md shadow-md " + className}>
            <button className="w-full flex items-center justify-between" onClick={() => setClickArrow(!clickArrow)}>
                <h3 className="w-full text-xl lg:text-2xl text-left font-semibold py-2">{id} - {question}</h3>
                {clickArrow ? (
                    <BiChevronDown className="h-12 w-12 text-sky-600 text-right" />
                ) : (
                    <BiChevronUp className="h-12 w-12 text-sky-600" />
                )}
            </button>
            <p className={`text-lg text-left lg:py-4 lg:px-8 ${clickArrow ? "hidden" : "block"}`}>{answer}</p>
        </div>
    );
}
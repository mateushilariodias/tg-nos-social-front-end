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
        <div className={"border border-solid border-blue-800 text-gray-900 p-4 rounded-md shadow-md " + className}>
            <button className="w-full flex items-center justify-between" onClick={() => setClickArrow(!clickArrow)}>
                <h3 className="text-2xl font-semibold pb-2">{id} - {question}</h3>
                {clickArrow ? (
                    <BiChevronDown className="h-6 w-6 text-sky-600" />
                ) : (
                    <BiChevronUp className="h-6 w-6 text-sky-600" />
                )}
            </button>
            <p className={`text-xl text-justify pb-4 ${clickArrow ? "hidden" : "block"}`}>{answer}</p>
        </div>
    );
}
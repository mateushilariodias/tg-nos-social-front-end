'use client'

import { IDataFaqSection } from "@/data/homepage/FaqSection";
import Faq from "./Faq";

interface IFaqSectionRenderProps {
    data: IDataFaqSection[];
}

export default function FaqRender({ data }: IFaqSectionRenderProps): JSX.Element {
    return (
        <ul>
            {data.map((item: IDataFaqSection) => {
                return (
                    <li key={item.id}>
                        <Faq data={item} />
                    </li>
                )
            })}
        </ul>
    )
}
import { AboutSection } from "@/data/homepage/AboutSection"

export default function AboutSectionRender(): JSX.Element {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {AboutSection.map((item: any) => {
                return (
                    <li key={item.id} className="bg-gray-900 text-white p-4 rounded-md shadow-md">
                        <h3 className="text-2xl font-semibold pb-2">{item.title}</h3>
                        <p className="text-xl text-justify pb-4">{item.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}

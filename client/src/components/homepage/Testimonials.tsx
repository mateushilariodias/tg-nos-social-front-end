import { IDataTestimonialsSection } from "@/data/homepage/TestimonialsSection";
import { FaQuoteLeft } from 'react-icons/fa';

interface ITestimonialsProps {
    data: IDataTestimonialsSection;
    className: string;
}

export default function Testimonials({ className, data }: ITestimonialsProps): JSX.Element{
    return (
        <div className={className}>
            <div className="bg-white border-2 border-blue-800 text-gray-900 flex flex-col mx-3 lg:mx-0 h-full lg:w-full">
                <div className=" border-t-8 border-cyan-300 mx-6 mt-6 lg:mx-8"></div>
                <div className="relative">
                    <FaQuoteLeft className="h-7 w-10 absolute top-5 left-6 z-10 text-gray-300" />
                    <p className="pl-10 pr-6 lg:pr-8 lg:mr-8 mt-6 relative z-20 text-1.5xl font-normal">{data.text}</p><br></br>
                </div>
                <p className="mx-6 lg:ml-8 font-bold text-1.5xl"> {data.author}</p>
                <p className="mx-6 lg:ml-8 text-1.5xl"> {data.ocupation}</p><br></br>
            </div>
        </div>
    )
}
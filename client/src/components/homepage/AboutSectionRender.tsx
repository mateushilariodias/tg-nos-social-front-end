import { AboutSection } from "@/data/homepage/AboutSection"

export default function AboutSectionRender(): JSX.Element {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 lg:px-0">
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
// import { useState, useEffect } from 'react';
// import { AboutSection } from "@/data/homepage/AboutSection";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, A11y } from 'swiper/modules';

// export default function AboutSectionRender(): JSX.Element {
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     return (
//         <div className="max-w-4xl mx-auto">
//             {mounted && (
//                 <Swiper
//                     modules={[Pagination, A11y, Navigation]}
//                     navigation
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     pagination={{ clickable: true }}
//                     loop={true}
//                     breakpoints={{
//                         1024: {
//                             spaceBetween: 16,
//                             slidesPerView: 2,
//                             navigation: {
//                                 prevEl: '.teste-button-prev',
//                                 nextEl: '.teste-button-next',
//                             },
//                             pagination: false,
//                         },
//                     }}
//                 >
//                     {AboutSection.map((item: any) => (
//                         <SwiperSlide key={item.id}>
//                             <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
//                                 <h3 className="text-2xl font-semibold pb-2">{item.title}</h3>
//                                 <p className="text-xl text-justify pb-4">{item.content}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             )}
//             <div className="flex justify-between mt-4">
//                 <button className="teste-button-prev">Prev</button>
//                 <button className="teste-button-next">Next</button>
//             </div>
//         </div>
//     );
// }
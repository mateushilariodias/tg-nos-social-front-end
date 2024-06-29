import { IDataAboutSection } from "@/data/homepage/AboutSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import CardsAboutSection from './CardsAboutSection';

interface IAboutSectionRenderProps {
    data: IDataAboutSection[];
}

export default function AboutSectionRender({ data }: IAboutSectionRenderProps): JSX.Element {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.7,
                            spaceBetween: 16,
                        }
                    }}
                    className="bullets"
                >
                    {data.map((item: IDataAboutSection) => (
                        <SwiperSlide key={item.id}>
                            <CardsAboutSection data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
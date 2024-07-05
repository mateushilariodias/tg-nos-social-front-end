import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y, Navigation } from 'swiper/modules';
import 'swiper/css'
import { useEffect, useState } from 'react';
import Testimonials from "./Testimonials";
import { dataTestimonialsSection } from "@/data/homepage/TestimonialsSection";

export default function TestimonialsRender(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect((): void => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1024: {
              spaceBetween: 16,
              slidesPerView: 3,
              navigation: {
                prevEl: '.button-prev',
                nextEl: '.button-next',
              },
              pagination: false,
            },
          }}
        >
          {dataTestimonialsSection.map((item) => {
            return (
              <div className="bullets" key={item.id}>
                <SwiperSlide>
                  <Testimonials className='h-full' data={item} />
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      )}
    </>
  )
}
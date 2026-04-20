"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TestimonialsSlider() {
  return (
    <Swiper loop autoplay={{ delay: 3000 }}>
      {[1, 2, 3].map((i) => (
        <SwiperSlide key={i}>
          <div className="text-center p-20">
            <p className="text-xl">“Best printing service ever!”</p>
            <h4 className="mt-4 font-bold">Client {i}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

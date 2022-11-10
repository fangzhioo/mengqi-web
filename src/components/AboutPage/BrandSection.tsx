import { Swiper, SwiperSlide } from 'swiper/react';

export default function BrandSection() {
  return (
    <div className='brand-section py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='mb-[60px]'>
              <span className='text-tiny mb-2 inline-block text-secondary'>Our Partner’s</span>
              <h2 className='font-recoleta text-[24px] capitalize text-primary sm:text-[30px] xl:text-[36px]'>
                Reliable Partner’s<span className='text-secondary'>.</span>
              </h2>
            </div>
            <div>
              <Swiper
                loop={false}
                speed={600}
                lazy
                watchSlidesProgress
                spaceBetween={30}
                pagination={false}
                navigation={false}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                }}
              >
                {Array(6)
                  .fill(1)
                  .map((_, i) => (
                    <SwiperSlide key={i} className='text-center'>
                      <a href='#' className='block'>
                        <img src={`/images/partner/${i + 1}.png`} className='mx-auto block h-[109px] w-[125px]' loading='lazy' alt={`${i}`} />
                      </a>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

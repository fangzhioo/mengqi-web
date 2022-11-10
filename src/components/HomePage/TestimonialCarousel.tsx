import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TestimonialCarousel() {
  const carouselList = [
    {
      image: '1',
      title: 'Oliver Stephen',
    },
    {
      image: '3',
      title: 'Sun Francisco',
    },

    {
      image: '1',
      title: 'Oliver Stephen',
    },
  ];

  return (
    <section className='z-10 bg-center bg-no-repeat py-[80px] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:bg-white after:opacity-[60%] after:content-[""] lg:py-[120px]' style={{ backgroundPositionY: 'center', backgroundPositionX: '45%' }}>
      <div className='container relative'>
        <div className='scene absolute left-0'>
          <img data-depth='0.4' className='!top-6 !-left-10 z-[1] h-[129px] w-[106px]' src='/images/template/testimonial/dots.png' width='106' height='129' loading='lazy' alt='shape' />
        </div>
        <div className='grid grid-cols-12 items-center gap-x-[30px]'>
          <div className='relative col-span-12'>
            <style jsx>{`
              .testimonial-shape path {
                stroke-miterlimit: 10;
                fill-opacity: 0;
                stroke-width: 2;
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: draw 2.5s ease-in-out 1s forwards infinite;
              }
            `}</style>
            <Swiper
              className='rounded-[30px] pb-[40px] md:pb-0'
              loop={false}
              watchSlidesProgress
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              lazy
              pagination={false}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                576: {
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1,
                },
              }}
            >
              {carouselList.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className='pl-[50px] xl:pl-[150px]'>
                    <div className='relative z-10 inline-block rounded-[30px] bg-primary-400 text-primary'>
                      <svg className='testimonial-shape absolute top-[30px] left-[-50px] md:top-[95px]' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 52 52' width='94' height='97'>
                        <path
                          className='fill-primary-200 stroke-primary-300'
                          d='M2.96,30.53c-4.57,5.96,3.81,15.3,11.32,18.61c7.49,3.3,17.32,0.85,24.15-3.06  c13.78-7.89,15.38-21.63,6.69-34.15C39.86,4.34,29.33-3.09,20.4,3.8c-5.04,3.88-9.25,13.06-6.87,19.32 
                           c1.57,4.13,11.66,10.45,14.59,4.17c2.45-5.24-7.77-5.94-8.2-10.79C19.3,9.5,28.7,8.86,32.96,10.95c8.35,4.08,9.53,19.1,2.7,25.09  c-5.01,4.39-16.54,4.55-22.15,0.92C11.34,35.55,7.83,26.66,2.96,30.53z'
                        ></path>
                      </svg>
                      <img src={`/images/template/testimonial/person${slide.image}.png`} className='thumb relative z-[2] mx-auto block h-auto w-auto' loading='lazy' width='402' height='505' style={{ width: 402, height: 505 }} alt={slide.title} />
                      <img className='absolute left-[0px] top-0 z-[1]' src='/images/template/testimonial/persone-pattern.png' width='400' height='500' style={{ width: 400, height: 500 }} loading='lazy' alt='shape' />
                    </div>
                  </div>

                  <div className="before:absolute before:top-1/2 before:left-0 before:h-[395px] before:w-full before:-translate-y-1/2 before:rounded-[30px] before:bg-[#F5F9F8] before:content-['']">
                    <div
                      className='absolute top-[65%] left-0 right-0 z-20 mx-auto max-w-[100%] -translate-y-1/2 scale-[0.8] rounded-[14px] bg-white px-[20px] py-[20px] 
                    text-left shadow sm:top-1/2 sm:max-w-[90%] sm:scale-100 md:left-auto md:right-[50px]  md:ml-auto md:max-w-[560px] md:px-[30px] md:py-[30px] lg:shadow-none xl:right-0 xl:bg-transparent xl:pl-[0px] xl:pr-[60px]'
                    >
                      <div className='relative'>
                        <span className='absolute right-[0px] top-[0px] block'>
                          <svg className='ml-auto mb-[4px]' width='78' height='57' viewBox='0 0 78 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g opacity='0.08'>
                              <path d='M5.50357 56.0343H22.0143L33.0214 34.02V0.998535H0V34.02H16.5107L5.50357 56.0343ZM49.5321 56.0343H66.0429L77.05 34.02V0.998535H44.0286V34.02H60.5393L49.5321 56.0343Z' fill='#01614E' />
                            </g>
                          </svg>
                        </span>

                        <span className='text-tiny mb-[5px] inline-block capitalize text-secondary xl:mb-[10px]'>Testimonial</span>
                        <h2 className='font-recoleta mb-[10px] text-[24px] capitalize leading-[1.2] text-primary xl:mb-[20px] xl:text-xl'>
                          Reviews from our <br className='hidden xl:block' /> happy Clients
                          <span className='text-secondary'>.</span>
                        </h2>
                        <p className='max-w-[480px] text-primary'>Bary do a great job to find the perfect home. It’s very easy for every one to buy, sell or rent property we belive they continure their great service and appriciate them recomended.</p>
                      </div>

                      <ul>
                        <li className='mt-4 flex flex-wrap items-center justify-between'>
                          <span className='font-recoleta text-[18px] capitalize leading-none text-secondary'>{slide.title}</span>
                          <span className='flex flex-wrap'>
                            {Array(5)
                              .fill(1)
                              .map((_, i) => (
                                <span key={i} className='ml-[4px]'>
                                  <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M9.64181 4.13829L6.66642 3.70586L5.33634 1.00938C5.30001 0.935551 5.24024 0.875786 5.16642 0.839457C4.98126 0.748051 4.75626 0.824223 4.66368 1.00938L3.3336 3.70586L0.358214 4.13829C0.276182 
                                      4.15 0.201182 4.18868 0.143761 4.24727C0.0743407 4.31862 0.0360871 4.41461 0.0374056 4.51416C0.038724 4.6137 0.0795065 4.70864 0.150792 4.77813L2.30353 6.87696L1.79493 9.84063C1.78301 9.90957 1.79063 
                                      9.98048 1.81695 10.0453C1.84327 10.1101 1.88723 10.1663 1.94384 10.2074C2.00045 10.2485 2.06745 10.2729 2.13724 10.2779C2.20702 10.2829 2.27681 10.2682 2.33868 10.2356L5.00001 8.83633L7.66134 10.2356C7.73399 
                                      10.2742 7.81837 10.2871 7.89923 10.2731C8.10314 10.2379 8.24024 10.0445 8.20509 9.84063L7.69649 6.87696L9.84923 4.77813C9.90782 4.72071 9.94649 4.64571 9.95821 4.56368C9.98985 4.3586 9.84688 4.16875 9.64181 4.13829Z'
                                      className='fill-primary-500'
                                    />
                                  </svg>
                                </span>
                              ))}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className='hidden sm:block'>
                <div className='swiper-button-prev !hover:bg-primary !xl:bg-primary !top-auto !bottom-[85px] !left-[30px] !h-[36px] !w-[36px] !rounded-full bg-primary-400 !text-white'></div>
                <div className='swiper-button-next !hover:bg-primary !xl:bg-primary !top-auto !bottom-[85px] !left-[85px] !h-[36px] !w-[36px] !rounded-full bg-primary-400 !text-white'></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

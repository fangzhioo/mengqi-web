import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Carousel {
  id: string;
  title: string;
  desc: string;
}

const CarouselCard = ({ data }: { data: Carousel }) => (
  <div className='relative text-right'>
    <div className="relative inline-block text-primary before:absolute before:inset-x-0 before:bottom-0 before:z-[-1] before:h-[calc(100%_-_50px)] before:w-full before:rounded-[16px] before:bg-primary before:content-['']">
      <img src={`/images/template/testimonial/person${data.id}.png`} className='relative z-[2] mx-auto block h-auto w-auto' loading='lazy' width='300' height='380' alt={data.title} />
      <img className='absolute right-[20px] bottom-0 z-[1]' src='/images/template/testimonial/shape.png' width='130' height='132' loading='lazy' alt='shape' />
    </div>

    <div className='review-shadow-card rounded-[14px] pl-[20px] pr-[45px] pt-[30px] pb-[20px] text-left sm:pl-[30px] sm:pt-[45px] sm:pb-[30px]'>
      <span className='absolute right-[20px] top-[30px] block'>
        <svg className='ml-auto mb-[4px]' width='27' height='20' viewBox='0 0 27 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1.925 19.2505H7.7L11.55 11.5505V0.000488281H0V11.5505H5.775L1.925 19.2505ZM17.325 19.2505H23.1L26.95 11.5505V0.000488281H15.4V11.5505H21.175L17.325 19.2505Z' fill='#016450' />
        </svg>
      </span>
      <p className='text-primary'>{data.desc}</p>
      <ul>
        <li className='mt-4 flex flex-wrap items-center justify-between'>
          <span className='font-recoleta text-[18px] capitalize leading-none text-secondary'>{data.title}</span>
          <span className='flex flex-wrap'>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <span key={i} className='ml-[4px]'>
                  <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.64181 4.13829L6.66642 3.70586L5.33634 1.00938C5.30001 0.935551 5.24024 0.875786 
                      5.16642 0.839457C4.98126 0.748051 4.75626 0.824223 4.66368 1.00938L3.3336 3.70586L0.358214 
                      4.13829C0.276182 4.15 0.201182 4.18868 0.143761 4.24727C0.0743407 4.31862 0.0360871 4.41461 
                      0.0374056 4.51416C0.038724 4.6137 0.0795065 4.70864 0.150792 4.77813L2.30353 6.87696L1.79493 
                      9.84063C1.78301 9.90957 1.79063 9.98048 1.81695 10.0453C1.84327 10.1101 1.88723 10.1663 1.94384 
                      10.2074C2.00045 10.2485 2.06745 10.2729 2.13724 10.2779C2.20702 10.2829 2.27681 10.2682 2.33868 
                      10.2356L5.00001 8.83633L7.66134 10.2356C7.73399 10.2742 7.81837 10.2871 7.89923 10.2731C8.10314 10.2379 8.24024 10.0445 8.20509 9.84063L7.69649 6.87696L9.84923 4.77813C9.90782 4.72071 9.94649 4.64571 9.95821 4.56368C9.98985 4.3586 9.84688 4.16875 9.64181 4.13829Z'
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
);

export default function TestimonialCarousel() {
  const carouselList: Carousel[] = [
    {
      id: '1',
      title: 'Oliver Stephen',
      desc: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores consectetur odio.',
    },
    {
      id: '3',
      title: 'Sun Francisco',
      desc: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores consectetur odio.',
    },
    {
      id: '1',
      title: 'Oliver Stephen',
      desc: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores consectetur odio.',
    },
  ];

  return (
    <section className='relative z-10 bg-white bg-no-repeat py-[80px] xl:py-[120px]' style={{ backgroundImage: 'url(/images/template/testimonial/pattern.png)', backgroundPositionY: 'center', backgroundPositionX: '45%' }}>
      <div className='container'>
        <div className='mb-[-30px] grid grid-cols-12 items-center gap-x-[30px]'>
          <div className='col-span-12 mb-[30px] lg:col-span-7'>
            <Swiper
              className='-m-[30px] p-[30px]'
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
                  <CarouselCard data={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='order-first col-span-12 mb-[30px] lg:order-last lg:col-span-5'>
            <div className='relative max-w-[385px] 2xl:ml-[55px]'>
              <span className='text-tiny mb-[10px] inline-block capitalize text-secondary'>Everybody Says</span>
              <h2 className='font-recoleta mb-[20px] max-w-[375px] text-[24px] text-primary sm:text-[30px] xl:text-xl'>
                Reviews from our happy Clients<span className='text-secondary'>.</span>
              </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis maxime laudantium eum dolore tempore repellendus aspernatur autem aliquam error recusandae dolores saepe, iste est! </p>

              <div className='hidden sm:block'>
                <div className='swiper-button-prev !top-auto !bottom-[-65px] !left-0 !h-[36px] !w-[36px] !rounded-full bg-primary-400 !text-white hover:bg-secondary'></div>
                <div className='swiper-button-next !top-auto !bottom-[-65px] !left-[56px] !h-[36px] !w-[36px] !rounded-full bg-primary-400 !text-white hover:bg-secondary'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

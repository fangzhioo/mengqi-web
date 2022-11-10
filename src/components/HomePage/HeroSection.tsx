import { SiApacheairflow } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSection = () => {
  return (
    <section className='relative bg-primary-500 bg-opacity-10'>
      <div className='hero-slider overflow-hidden pt-[130px] pb-[70px] lg:pt-[80px] lg:pb-[0px] xl:pt-[0px]'>
        <Swiper loop speed={600} autoplay={false} lazy fadeEffect={{ crossFade: true }} navigation={false}>
          <SwiperSlide>
            <div className='flex flex-wrap items-center xs:h-[auto] lg:h-[700px] xl:h-[960px]'>
              <div className='container'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-12 lg:col-span-5 xl:col-span-6'>
                    <div className='slider-content'>
                      <div className='relative mb-5'>
                        <SiApacheairflow className='h-16 w-16 animate-animateSpin text-primary-500' />
                        <span className='absolute left-[28px] top-1/2 block -translate-y-1/2 bg-primary-200 bg-opacity-40 text-base text-secondary'>萌気一下</span>
                      </div>
                      <h1 className='font-recoleta title text-[28px] leading-tight text-primary sm:text-[50px] md:text-[68px] lg:text-[50px] xl:text-[68px]'>
                        <span>Lorem ipsum, dolor sit amet</span>
                      </h1>

                      <p className='text mt-5 mb-8 min-h-[100px] max-w-[570px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi veritatis reiciendis eum non.</p>

                      <span className='font-recoleta hero_info block'>
                        <span className='mr-4 text-[20px] text-secondary sm:text-[22px]'>Lorem fuga qui odio quia voluptate architecto?</span>
                        <span className='text-[22px] text-primary hover:underline sm:text-[32px]'>tongren</span>
                      </span>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-7 xl:col-span-6'>
                    <div className='relative mt-10 md:mt-0 lg:absolute lg:top-1/2 lg:max-w-[550px] lg:-translate-y-1/2 xl:right-[30px] xl:max-w-[630px] 2xl:right-[130px] 2xl:max-w-[700px] 3xl:max-w-[830px]'>
                      <style jsx>{`
                        .mysvg path {
                          stroke-miterlimit: 10;
                          fill-opacity: 0;
                          stroke-width: 2;
                          stroke-dasharray: 800;
                          stroke-dashoffset: 800;
                          animation: draw 2.5s ease-in-out 1s forwards infinite;
                        }
                        .orange-shape path {
                          stroke-miterlimit: 10;
                          fill-opacity: 0;
                          stroke-width: 2;
                          stroke-dasharray: 800;
                          stroke-dashoffset: 800;
                          animation: draw 2s ease-in-out 1s forwards infinite;
                        }

                        .hero-star {
                          top: auto !important;
                        }

                        @media screen and (min-width: 992px) {
                          .hero-star {
                            left: 30px !important;
                          }
                        }

                        @media screen and (min-width: 1536px) {
                          .hero-star {
                            left: 50px !important;
                          }
                        }

                        @media screen and (min-width: 1920px) {
                          .hero-star {
                            left: 60px !important;
                          }
                        }

                        @media screen and (max-width: 991px) {
                          .hero-star {
                            display: none;
                          }
                        }

                        @keyframes draw {
                          0% {
                            stroke-dashoffset: 800;
                            fill-opacity: 0;
                          }
                          75% {
                            stroke-dashoffset: 0;
                            fill-opacity: 0;
                          }
                          95% {
                            stroke-dashoffset: 0;
                          }
                          100% {
                            fill-opacity: 1;
                            stroke-dashoffset: 0;
                          }
                        }
                      `}</style>
                      <div className='scene' data-relative-input='true'>
                        <img data-depth='0.1' className='hero_image' src='/images/template/hero/hero.png' width='849' height='739' alt='hero image' />
                      </div>

                      <svg
                        className='mysvg absolute top-[-20px] left-0 md:top-[0px] lg:top-[20px] lg:left-[-40px] xl:top-[38px] xl:left-[-40px] 2xl:top-[68px] 2xl:left-[-40px] 3xl:top-[133px] 3xl:left-[-50px]'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 52 52'
                        width='52'
                        height='52'
                      >
                        <path
                          className='st0 fill-primary-500 stroke-primary-600'
                          d='M2.96,30.53c-4.57,5.96,3.81,15.3,11.32,18.61c7.49,3.3,17.32,0.85,24.15-3.06  c13.78-7.89,15.38-21.63,6.69-34.15C39.86,4.34,29.33-3.09,20.4,3.8c-5.04,3.88-9.25,13.06-6.87,19.32  
                          c1.57,4.13,11.66,10.45,14.59,4.17c2.45-5.24-7.77-5.94-8.2-10.79C19.3,9.5,28.7,8.86,32.96,10.95c8.35,4.08,9.53,19.1,2.7,25.09  c-5.01,4.39-16.54,4.55-22.15,0.92C11.34,35.55,7.83,26.66,2.96,30.53z'
                        />
                      </svg>

                      <div className='scene' data-relative-input='true'>
                        <img data-depth='0.2' className='hero-star absolute bottom-[-55px] sm:bottom-0 lg:bottom-[150px] lg:left-[30px] xl:bottom-[185px] 2xl:left-[50px] 3xl:bottom-[250px] 3xl:left-[60px]' src='/images/template/hero/shape2.svg' width='98' height='74' alt='icon' />
                      </div>

                      <svg
                        className='orange-shape absolute bottom-[0%] right-[30px] lg:bottom-[120px] lg:right-[80px] xl:bottom-[140px] xl:right-[110px] 2xl:bottom-[150px] 2xl:right-[120px] 3xl:bottom-[190px] 3xl:right-[135px]'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 59 56'
                        width='59'
                        height='56'
                      >
                        <g>
                          <path
                            className='fill-primary-300 stroke-primary-400'
                            d='M25.76,1.27c-5.34,0-10.59,1.54-15.11,5.09C-0.23,14.91-1.08,29.98,3.7,42.08c1.32,3.35,2.95,7.45,5.62,10.18 c0.99,1.02,2.13,1.85,3.44,2.38c1.12,0.45,2.45,0.69,3.81,0.69c3.4,0,6.94-1.52,7.44-5.08c0.6-4.24-7.99-11.32-8.9-16.26 
                            C13.16,23.47,19.02,18,25.97,18c4.89,0,10.32,2.7,13.96,8.25c2.28,3.46,7.05,9.61,11.65,9.61c1.6,0,3.18-0.74,4.63-2.6 c6.24-7.99-4.66-20.84-10.6-25.17C39.84,3.89,32.73,1.27,25.76,1.27L25.76,1.27z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <img className='absolute left-0 bottom-0' src='/images/template/hero/star.png' width='112' height='138' alt='icon' />
    </section>
  );
};

export default HeroSection;

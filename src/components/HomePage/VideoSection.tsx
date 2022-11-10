import React from 'react';

export default function VideoSection() {
  return (
    <section className='video-section py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12 items-center gap-[30px]'>
          <div className='relative col-span-12 lg:col-span-6'>
            <div className='mb-5 max-w-[450px] lg:mb-0'>
              <span className='text-tiny mb-2 inline-block text-secondary'>Take a video tour</span>
              <h2 className='font-recoleta mb-[10px] text-[24px] leading-[1.277] text-primary sm:text-[30px] xl:text-xl'>
                Watch the video for taking your decision easily
                <span className='text-secondary'>.</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consectetur iusto omnis velit tenetur, nisi delectus libero optio. Inventore doloremque quia, architecto quo iste laborum provident esse tempore mollitia reiciendis!</p>
              <a href='#' className='text-tiny mt-[20px] flex flex-wrap items-center text-secondary'>
                View all
                <svg className='ml-[10px]' width='26' height='11' viewBox='0 0 26 11' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M20.0877 0.69303L24.2075 5.00849H0V5.99151H24.2075L20.0877 10.307L20.7493 11L26 5.5L20.7493 0L20.0877 0.69303Z' fill='currentColor'></path>
                </svg>
              </a>
              <img className='absolute bottom-[-18px] right-[5px]' src='/images/template/video/star.png' loading='lazy' width='65' height='73' alt='image' />
            </div>
          </div>
          <div className='col-span-12 text-center lg:col-span-6'>
            <div className='relative z-[1] inline-block rounded-[24px] pt-[45px] pr-[45px]'>
              <div className='absolute top-0 right-0 z-[-2] h-[90%] w-[90%] rounded-[24px] bg-primary'>
                <img src='/images/template/video/shape.png' className='absolute top-[18px] left-[-17px] z-[-1]' loading='lazy' width='68' height='56' alt='shape image' />
                <img src='/images/template/video/shape.png' className='absolute bottom-[15px] right-[15px] z-[-1]' loading='lazy' width='68' height='56' alt='shape image' />
              </div>
              <div className='relative'>
                <div className='scene' data-relative-input='true'>
                  <img data-depth='0.1' src='/images/template/video/video.png' className='rounded-[24px]' loading='lazy' width='507' height='349' alt='video image' />
                </div>
                <style jsx>
                  {`
                    .play-button:hover svg {
                      stroke-dasharray: 314;
                      stroke-dashoffset: 0;
                      animation: offsetstroke 6s ease-out;
                    }
                    @keyframes offsetstroke {
                      from {
                        stroke-dashoffset: 314;
                      }
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}
                </style>
                <a
                  href='https://www.youtube.com/watch?v=mSC6GwizOag'
                  className='play-button shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] before:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] group absolute left-0 right-0 top-1/2 z-[1] 
                  mx-auto flex h-[55px] w-[55px] -translate-y-1/2 flex-wrap items-center justify-center rounded-full bg-white text-white  opacity-80 transition-all 
                  before:absolute before:z-[-1] before:block before:h-[70px] before:w-[70px] before:rounded-full before:bg-white before:opacity-80 hover:scale-105 hover:bg-primary hover:text-primary hover:before:bg-primary hover:before:opacity-80'
                  aria-label='play button'
                >
                  <svg width='21' height='22' viewBox='0 0 21 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='stroke-secondary group-hover:stroke-white'
                      d='M1.63861 10.764V6.70324C1.63861 1.66145 5.20893 -0.403178 9.57772 2.11772L13.1024 4.14812L16.6271 6.17853C20.9959 8.69942 20.9959 12.8287 16.6271 15.3496L13.1024 17.38L9.57772 19.4104C5.20893 21.9313 1.63861 19.8666 1.63861 14.8249V10.764Z'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

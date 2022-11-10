import React from 'react';

export default function HeroSection() {
  return (
    <section className='relative flex h-[560px] flex-wrap items-center bg-[#FFF6F0] bg-contain bg-left-bottom bg-no-repeat xl:h-[650px] xl:bg-cover xl:bg-right-bottom' style={{ backgroundImage: "url('/images/template/hero/about1.png')" }}>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='max-w-[420px]'>
              <div className='mb-5'>
                <span className='block text-[18px] text-secondary'>About us</span>
              </div>
              <h1 className='font-recoleta whitespace-nowrap text-[36px] leading-tight text-primary sm:text-[50px] md:text-[68px] lg:text-[50px] xl:text-[68px]'>
                About<span className='text-secondary'> Mengqi.</span>
              </h1>

              <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut delectus natus consectetur eius assumenda.</p>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute left-0 bottom-0' src='/images/template/hero/star.png' alt='icon' width='112' height='138' />
    </section>
  );
}

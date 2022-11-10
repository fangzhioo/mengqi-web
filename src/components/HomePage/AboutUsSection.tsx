import React from 'react';

export default function AboutUsSection() {
  return (
    <section className='about-section py-[80px] xl:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-12 lg:col-span-7'>
            <div className='scene' data-relative-input='true'>
              <img data-depth='0.1' src='/images/template/about/about2.png' className='h-full w-full 2xl:ml-[-160px] 2xl:w-auto 2xl:max-w-[inherit]' loading='lazy' width='813' height='707' alt='about Image' />
            </div>
          </div>
          <div className='col-span-12 lg:col-span-5'>
            <span className='text-tiny mb-2 inline-block text-secondary'>About Mengqi</span>
            <h2 className='font-recoleta mb-3 text-[24px] capitalize leading-[1.277] text-primary sm:text-[30px] xl:text-[36px]'>
              <span>Ducimus facilis nihil alias dicta corrupti</span>
              <span className='text-secondary'>.</span>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt consectetur dolore? Quasi rerum beatae eius. </p>

            <div className='-mb-10 mt-[45px]'>
              <div className='mb-5 flex flex-wrap lg:mb-10'>
                <img src='/images/template/icon/doller.png' className='mr-5 self-start' loading='lazy' width='50' height='50' alt='about Image' />
                <div className='flex-1'>
                  <h3 className='font-recoleta mb-2 text-[22px] capitalize text-primary xl:text-lg'>Budget Friendly</h3>
                  <p className='max-w-[315px]'>Est, ratione fugit! Aspernatur doloribus commodi!</p>
                </div>
              </div>
              <div className='mb-5 flex flex-wrap lg:mb-10'>
                <img src='/images/template/icon/location.png' className='mr-5 self-start' loading='lazy' width='50' height='50' alt='about Image' />
                <div className='flex-1'>
                  <h3 className='font-recoleta mb-2 text-[22px] capitalize text-primary xl:text-lg'>Prime Location</h3>
                  <p className='max-w-[315px]'>Lorem ipsum dolor sit amet consectetur. Ullam, ea nisi. Sunt, dolorem quisquam!</p>
                </div>
              </div>
              <div className='mb-5 flex flex-wrap lg:mb-10'>
                <img src='/images/template/icon/trusted.png' className='mr-5 self-start' loading='lazy' width='50' height='50' alt='about Image' />
                <div className='flex-1'>
                  <h3 className='font-recoleta mb-2 text-[22px] capitalize text-primary xl:text-lg'>Trusted by Thousand</h3>
                  <p className='max-w-[315px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function NewsLetterSection() {
  return (
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-1'>
          <div className='col-span'>
            <div className='mb-[80px] flex flex-wrap items-center justify-between rounded-[15px] border border-[rgba(1,100,80,0.25)] bg-white py-[30px] px-[30px] shadow-[0px_10px_20px_rgba(196,196,196,0.5)] lg:mb-[-75px] xl:py-[40px] xl:px-[55px]'>
              <div className='w-full lg:w-auto'>
                <h3 className='font-recoleta mb-[10px] text-[24px] leading-[1.277] text-primary sm:text-[30px] xl:text-[36px]'>Are you a Home Owner?</h3>
                <p className='leading-[1.5] tracking-[0.03em] text-secondary'>Put your email address and get listed.</p>
              </div>
              <div className='mt-5 w-full lg:mt-0 lg:w-auto'>
                <form id='mc-form' action='#' className='relative w-full'>
                  <input
                    id='mc-email'
                    className='h-[60px] w-full rounded-[10px] border border-[#FF6500] border-opacity-60 py-[15px] pl-[15px] pr-[15px] font-light leading-[1.75] text-primary opacity-100 placeholder:text-primary focus:border-primary focus:outline-none sm:pr-[135px] lg:w-[395px] xl:w-[495px]'
                    type='text'
                    placeholder='Enter your email here...'
                  />
                  <button id='mc-submit' type='submit' className='mt-5 rounded-[10px] bg-primary py-[15px] px-[20px] text-[16px] font-medium leading-none tracking-[0.02em] text-white transition-all hover:bg-secondary sm:absolute sm:right-[5px] sm:top-1/2 sm:mt-0 sm:-translate-y-1/2'>
                    Get Listed
                  </button>
                </form>
                <div className='mailchimp-alerts text-centre'>
                  <div className='mailchimp-submitting'></div>
                  <div className='mailchimp-success text-green-400'></div>
                  <div className='mailchimp-error text-red-600'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

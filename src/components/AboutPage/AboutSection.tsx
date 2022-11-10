import React from 'react';

export default function AboutSection() {
  return (
    <section className='relative z-[1] mt-[80px] xl:mt-0'>
      <div className='container'>
        <div className='mb-[-30px] grid grid-cols-12 items-center gap-x-[30px]'>
          <div className='col-span-12 mb-[30px] lg:col-span-6'>
            <img className='mx-auto xl:mt-[-140px]' src='/images/template/about/about5.png' alt='about image' />
          </div>
          <div className='col-span-12 mb-[30px] lg:col-span-6'>
            <span className='text-tiny mb-2 inline-block text-secondary'>Since 2022</span>
            <h2 className='font-recoleta mb-[50px] text-[24px] capitalize leading-[1.3888] text-primary sm:text-[30px] xl:text-[35px]'>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit, commodi ipsam aliquid rem quaerat facilis quisquam sequi doloremque adipisci</span>
              <span className='text-secondary'>!</span>
            </h2>
            <ul className='flex list-none flex-wrap'>
              <li className='block'>
                <span className='font-recoleta text-lg text-secondary'>
                  <span className='counter-up'>20</span>
                  <span>k+</span>
                </span>
                <p>Blog</p>
              </li>
              <li className='block pl-[40px] md:pl-[60px]'>
                <span className='font-recoleta text-lg text-secondary'>
                  <span className='counter-up'>12</span>
                  <span>k+</span>
                </span>
                <p>Users</p>
              </li>
              <li className='block pl-[40px] md:pl-[60px]'>
                <span className='font-recoleta text-lg text-secondary'>
                  <span className='counter-up'>160</span>
                  <span>+</span>
                </span>
                <p>Creator</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

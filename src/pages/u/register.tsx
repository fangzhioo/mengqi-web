import React from 'react';

import { UnderlineLink } from '@/components/ArrowLink';
import FooterSection from '@/components/FooterSection';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

export default function RegisterPage() {
  return (
    <Layout>
      <Seo templateTitle='Register-MengQi' />
      <StickyHeader />
      <main>
        <div className='py-[140px] lg:py-[180px]'>
          <div className='container'>
            <form action='#'>
              <div className='mb-[-30px] grid grid-cols-12 gap-x-[30px]'>
                <div className='col-span-12 mb-[30px] lg:col-span-6'>
                  <h2 className='font-recoleta mb-[15px] text-[24px] leading-[1.277] text-primary sm:text-[30px] xl:text-xl'>
                    Create Account<span className='text-secondary'>.</span>
                  </h2>

                  <p className='mb-[50px] max-w-[465px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consequatur illum similique voluptate? Ducimus, eum.</p>
                  <div className='grid grid-cols-12 gap-x-[20px] gap-y-[35px]'>
                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light 
                        leading-[1.75] placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px] '
                        type='text'
                        placeholder='Usename'
                      />
                    </div>

                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light 
                        leading-[1.75] placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px] '
                        type='email'
                        placeholder='Email'
                      />
                    </div>

                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light 
                        leading-[1.75] placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px] '
                        type='password'
                        placeholder='Password'
                      />
                    </div>

                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light 
                        leading-[1.75] placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px] '
                        type='password'
                        placeholder='Conform Password'
                      />

                      <div className='flex w-full flex-wrap items-center justify-between sm:w-[400px]'>
                        <div className='mt-[15px] flex flex-wrap items-center'>
                          <input type='checkbox' id='checkbox1' name='Remember me' />
                          <label htmlFor='checkbox1' className='ml-[5px] cursor-pointer'>
                            I agree with the
                            <a href='#' className='ml-2 text-secondary underline'>
                              Terms & Conditions
                            </a>
                          </label>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className='col-span-12'>
                      <div className='flex flex-wrap items-center'>
                        <button
                          type='submit'
                          className='relative px-[40px] py-[15px] text-[14px] font-medium capitalize leading-none text-white 
                          before:absolute before:inset-y-0 before:left-auto before:right-0 before:-z-[1] before:block before:w-0 
                          before:rounded-md before:bg-secondary before:transition-all after:absolute after:inset-0 after:-z-[2] 
                          after:block after:rounded-md after:bg-primary after:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full xl:text-[16px]'
                        >
                          Register
                        </button>

                        <p className='ml-[40px]'>
                          Already have an Account?
                          <UnderlineLink href='/u/login' className='ml-2 text-secondary'>
                            Login
                          </UnderlineLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-span-12 mb-[30px] lg:col-span-6'>
                  <img src='/images/template/contact/image2.png' className='h-auto w-full rounded-[10px] lg:max-w-[538px]' width='546' height='668' alt='image' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <FooterSection />
    </Layout>
  );
}

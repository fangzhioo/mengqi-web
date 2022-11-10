import React from 'react';

import { UnderlineLink } from '@/components/ArrowLink';
import FooterSection from '@/components/FooterSection';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

export default function LoginPage() {
  return (
    <Layout>
      <Seo templateTitle='Login-MengQi' />

      <StickyHeader />

      <main>
        <div className='py-[140px] lg:py-[180px]'>
          <div className='container'>
            <form action='#'>
              <div className='mb-[-30px] grid grid-cols-12 gap-x-[30px]'>
                <div className='col-span-12 mb-[30px] lg:col-span-6'>
                  <h2 className='font-recoleta mb-[15px] text-[24px] leading-[1.277] text-primary sm:text-[30px] xl:text-xl'>
                    Login to Mengqi<span className='text-secondary'>.</span>
                  </h2>

                  <p className='mb-[50px] max-w-[465px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, omnis alias? Nobis a doloremque culpa!</p>
                  <div className='grid grid-cols-12 gap-x-[20px] gap-y-[35px]'>
                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light leading-[1.75] 
                        placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px]'
                        type='text'
                        placeholder='Usename'
                      />
                    </div>

                    <div className='col-span-12'>
                      <input
                        className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 p-[15px] font-light leading-[1.75] 
                        placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] sm:w-[400px]'
                        type='password'
                        placeholder='Password'
                      />

                      <div className='mt-[15px] flex w-full flex-wrap items-center justify-between sm:w-[400px]'>
                        <div className='flex flex-wrap items-center'>
                          <input type='checkbox' id='checkbox1' name='Remember me' />
                          <label htmlFor='checkbox1' className='ml-[5px] cursor-pointer text-[14px]'>
                            Remember me
                          </label>
                          <br />
                        </div>
                        <a href='#' className='block text-[14px] hover:text-secondary'>
                          Forgot Password
                        </a>
                      </div>
                    </div>

                    <div className='col-span-12'>
                      <div className='flex flex-wrap items-center'>
                        <button
                          type='submit'
                          className='relative px-[40px] py-[15px] text-[14px] font-medium capitalize leading-none text-white before:absolute 
                          before:inset-y-0 before:left-auto before:right-0 before:-z-[1] before:block before:w-0 before:rounded-md before:bg-secondary 
                          before:transition-all after:absolute after:inset-0 after:-z-[2] after:block after:rounded-md after:bg-primary after:transition-all 
                          hover:before:left-0 hover:before:right-auto hover:before:w-full xl:text-[16px]'
                        >
                          Login
                        </button>
                        <UnderlineLink href='/u/register' className='ml-[40px] font-medium text-primary hover:text-secondary'>
                          Register
                        </UnderlineLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-span-12 mb-[30px] lg:col-span-6'>
                  <img src='/images/template/contact/image.png' className='h-auto w-full rounded-[10px]' width='546' height='478' alt='image' />
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

import { FaTiktok, FaWeibo, FaZhihu } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className='footer bg-primary-100 bg-opacity-20 bg-no-repeat py-[80px] font-light lg:pt-[200px] lg:pb-[110px]' style={{ backgroundImage: "url('/images/template/footer/pattern.png')" }}>
      <div className='container'>
        <div className='mb-[-30px] grid grid-cols-12 gap-x-[30px]'>
          <div className='col-span-12 mb-[30px] sm:col-span-6 lg:col-span-4'>
            <a href='index.html' className='mb-[25px] block'>
              <img className='h-12' src='/images/logo.svg' loading='lazy' alt='footer logo' />
            </a>
            <p className='mb-[5px] max-w-[270px] xl:mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nihil eveniet, labore dolore id amet? Ipsum necessitatibus tempore consequuntur amet.</p>
            <p className='hidden text-sm md:block'>
              &copy;
              <a href='#' className='mx-1 text-secondary'>
                Tongren.
              </a>
              All Rights Reserved - Privacy Policy
            </p>
          </div>
          <div className='col-span-12 mb-[30px] sm:col-span-6 lg:col-span-3'>
            <h3 className='font-recoleta mb-[20px] text-[22px] font-normal leading-[1.222] text-primary lg:mb-[30px]'>
              Information<span className='text-secondary'>.</span>
            </h3>
            <ul className='mb-[-20px] text-[16px] leading-none'>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  About us
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Properties
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Careers
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Payment
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Blog Post
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-12 mb-[30px] sm:col-span-6 lg:col-span-3'>
            <h3 className='font-recoleta mb-[20px] text-[22px] font-normal leading-[1.222] text-primary lg:mb-[30px]'>
              Support<span className='text-secondary'>.</span>
            </h3>
            <ul className='mb-[-20px] text-[16px] leading-none'>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Add Property
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Terms & Conditions
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Help line
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  Our Agents
                </a>
              </li>
              <li className='mb-[20px]'>
                <a className='inline-block transition-all hover:text-secondary' href='#'>
                  features
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-12 mb-[30px] sm:col-span-6 lg:col-span-2'>
            <h3 className='font-recoleta mb-[20px] text-[22px] font-normal leading-[1.222] text-primary lg:mb-[30px]'>
              Address<span className='text-secondary'>.</span>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, doloremque?</p>
            <ul className='mt-[20px] inline-flex items-center justify-center'>
              <li className='ml-[15px] first:ml-0'>
                <a href='https://www.tiktok.com/' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                  <FaTiktok />
                </a>
              </li>
              <li className='ml-[15px]'>
                <a href='https://weibo.com/' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                  <FaWeibo />
                </a>
              </li>
              <li className='ml-[15px]'>
                <a href='https://www.zhihu.com/' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                  <FaZhihu />
                </a>
              </li>
            </ul>
            <p className='mt-[20px] text-sm md:hidden'>
              &copy;{' '}
              <a href='#' className='text-secondary'>
                Tongren.
              </a>{' '}
              All Rights Reserved - Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

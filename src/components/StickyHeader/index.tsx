import { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import HeaderNav from '@/components/StickyHeader/HeaderNav';

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(document.documentElement.scrollTop >= 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id='sticky-header' className={clsxm({ 'is-sticky': isSticky }, 'fixed left-0 top-[15px] z-10 w-full lg:top-[30px] xl:top-[45px]')}>
        <div className='container'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <div className='flex flex-wrap items-center justify-between'>
                <a href='index.html' className='block'>
                  <img className='h-12 w-full' src='/images/logo.svg' loading='lazy' alt='brand logo' />
                </a>
                <HeaderNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;

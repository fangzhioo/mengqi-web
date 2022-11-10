import React from 'react';

import clsxm from '@/lib/clsxm';

interface OffCanvasProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
}

export default function OffCanvas({ isOpen, onClose }: OffCanvasProps) {
  const menus: MenuItem[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Properties',
      path: '/properties',
      children: [
        {
          title: 'p1',
          path: '/properties/p1',
        },
        {
          title: 'p2',
          path: '/properties/p2',
        },
        {
          title: 'p3',
          path: '/properties/p3',
        },
      ],
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];

  const handleMenuClose = (e: any) => {
    e.preventDefault();
    onClose && onClose();
  };

  return (
    <>
      {/* <!-- offcanvas-overlay start --> */}
      <div
        onClick={handleMenuClose}
        className={clsxm('offcanvas-overlay fixed inset-0 z-50 bg-black opacity-50', {
          hidden: !isOpen,
        })}
      />
      {/* <!-- offcanvas-overlay end --> */}
      {/* <!-- offcanvas-mobile-menu start --> */}
      <div
        id='offcanvas-mobile-menu'
        className={clsxm('offcanvas fixed left-0 top-0 z-50 h-screen -translate-x-full transform bg-white text-sm font-normal transition-all duration-300 ease-in-out xs:w-[300px] lg:w-[380px]', {
          'offcanvas-open': isOpen,
        })}
      >
        <div className='h-[100vh] overflow-y-auto py-12 pr-5'>
          {/* <!-- close button start --> */}
          <button onClick={handleMenuClose} className='offcanvas-close absolute right-0 top-0 h-10 w-10 text-[25px] text-primary' aria-label='offcanvas'>
            x
          </button>
          {/* <!-- close button end --> */}

          {/* <!-- offcanvas-menu start --> */}

          <nav className='offcanvas-menu'>
            <ul>
              {menus.map((menu, index) => (
                <li
                  key={menu.path}
                  className={clsxm('relative block border-b border-b-primary', {
                    'first:border-t': index === 0,
                    'first:border-t-primary': index === 0,
                  })}
                >
                  <span className='my-2 block py-1 px-5 text-base font-normal capitalize text-black hover:text-secondary'>{menu.title}</span>
                  <span className='menu-expand'></span>

                  {/* submenu */}
                  {menu.children && (
                    <ul className='offcanvas-submenu visible static top-auto hidden w-full capitalize opacity-100'>
                      {menu.children.map((submenu) => (
                        <li key={submenu.path}>
                          <span className='block py-2 px-[30px] text-sm font-light text-black transition-all hover:text-secondary'>{submenu.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* <!-- offcanvas-menu end --> */}
        </div>
      </div>
      {/* <!-- offcanvas-mobile-menu end --> */}
    </>
  );
}

import { useState } from 'react';
import { AiFillSkin } from 'react-icons/ai';

import ArrowLink from '@/components/ArrowLink';
import OffCanvas from '@/components/StickyHeader/OffCanvas';

const themes = ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red', 'slate', 'gray', 'zinc', 'neutral', 'stone'];

const regTheme = new RegExp(themes.join('|'), 'g');

export default function HeaderNav() {
  const [theme, setTheme] = useState('');
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeTheme = (t: string) => {
    setTheme(t);
    const clazz = document.documentElement.className;
    if (regTheme.test(clazz)) {
      const newClass = document.documentElement.className.replace(regTheme, t);
      document.documentElement.setAttribute('class', newClass);
    } else {
      document.documentElement.classList.add(t);
    }
  };

  const handleOffcanvasClose = () => {
    setOpenMenu(false);
  };

  const handleOffcanvasToggle = (e: any) => {
    e.preventDefault();
    setOpenMenu(true);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center text-primary'>
        <ul className='font-recoleta hidden flex-wrap items-center text-[16px] leading-none lg:flex xl:text-[18px]'>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <ArrowLink.UnstyledLink href='/' className='transition-all hover:text-secondary'>
              Home
            </ArrowLink.UnstyledLink>

            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[220px] -translate-x-1/2 list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0
                drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible group-hover:top-[100%] group-hover:opacity-100
                '
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 01
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 02
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 03
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 04
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='index-5.html' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 05
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Home 06
                </a>
              </li>
            </ul>
          </li>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <ArrowLink.UnstyledLink href='/about' className='transition-all hover:text-secondary'>
              About
            </ArrowLink.UnstyledLink>

            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[220px] -translate-x-1/2 list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0
            drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible group-hover:top-[100%] group-hover:opacity-100
            
            '
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  about 01
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  about 02
                </a>
              </li>
            </ul>
          </li>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <a href='#' className='transition-all hover:text-secondary'>
              Properties
            </a>
            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[890px] translate-x-[-40%] list-none flex-wrap rounded-[12px] bg-white bg-contain bg-right-top
            bg-no-repeat px-[40px] py-[45px] opacity-0 drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible
            group-hover:top-[100%] group-hover:opacity-100 xl:translate-x-[-45%]'
              style={{
                backgroundImage: "url('/images/template/mega-menu/image.png')",
              }}
            >
              <li className='mr-[70px]'>
                <ul>
                  <li className='font-recoleta mb-[30px] underline'>Properties</li>
                  <li className='mb-[25px] last:mb-0'>
                    <a href='properties-v1.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties v1
                    </a>
                  </li>
                  <li className='mb-[25px] last:mb-0'>
                    <a href='properties-v2.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties v2
                    </a>
                  </li>

                  <li className='mb-[25px] last:mb-0'>
                    <a href='add-properties.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Add properties
                    </a>
                  </li>
                </ul>
              </li>

              <li className='mr-[70px]'>
                <ul>
                  <li className='font-recoleta mb-[30px] underline'>Properties1 with sidebar</li>
                  <li className='mb-[25px] last:mb-0'>
                    <a href='properties-left-side-bar.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties left side bar
                    </a>
                  </li>
                  <li className='mb-[25px] last:mb-0'>
                    <a href='properties-right-side-bar.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties right side bar
                    </a>
                  </li>

                  <li className='mb-[25px] last:mb-0'>
                    <a href='properties-list-left-side-bar.html' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties list left side bar
                    </a>
                  </li>

                  <li className='mb-[25px] last:mb-0'>
                    <a href='#' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties list right side bar
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li className='font-recoleta mb-[30px] underline'>Property Details</li>
                  <li className='mb-[25px] last:mb-0'>
                    <a href='#' className='font-recoleta text-[14px] hover:text-secondary'>
                      Add properties
                    </a>
                  </li>

                  <li className='mb-[25px] last:mb-0'>
                    <a href='#' className='font-recoleta text-[14px] hover:text-secondary'>
                      Properties details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <a href='#' className='transition-all hover:text-secondary'>
              Pages
            </a>
            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[220px] -translate-x-1/2 list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0
            drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible group-hover:top-[100%] group-hover:opacity-100
            
            '
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  Service
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  single service
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <ArrowLink.UnstyledLink href='/u/login' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  login
                </ArrowLink.UnstyledLink>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <ArrowLink.UnstyledLink href='/u/register' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  register
                </ArrowLink.UnstyledLink>
              </li>
            </ul>
          </li>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <a href='#' className='transition-all hover:text-secondary'>
              Agency
            </a>
            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[220px] -translate-x-1/2 list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0
            drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible group-hover:top-[100%] group-hover:opacity-100
            
            '
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  agency
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  create agency
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='agent.html' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  agent
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  agency details
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  agent details
                </a>
              </li>
            </ul>
          </li>
          <li className='group relative mr-7 py-[20px] xl:mr-[40px]'>
            <ArrowLink.UnstyledLink href='/blog' className='transition-all hover:text-secondary'>
              Blog
            </ArrowLink.UnstyledLink>
            <ul
              className='invisible absolute top-[120%] left-1/2 flex w-[220px] -translate-x-1/2 list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0
            drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] transition-all group-hover:visible group-hover:top-[100%] group-hover:opacity-100
            
            '
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  blog grid
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  blog grid left side bar
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  blog grid right side bar
                </a>
              </li>
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='#' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  blog details
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className='flex flex-wrap items-center'>
          <li className='group relative sm:mr-5 xl:mr-[20px]'>
            <a href='#'>
              <img className='h-9 w-9' src='/images/user/avatar-1.png' loading='lazy' alt='avater' />
            </a>

            <ul
              className='invisible absolute top-[120%] right-0 flex w-[180px] list-none flex-col flex-wrap rounded-[12px] bg-white opacity-0 drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)]
                transition-all group-hover:visible group-hover:top-[60px] group-hover:opacity-100 sm:left-1/2 sm:-translate-x-1/2'
            >
              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='login.html' className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  login
                </a>
              </li>

              <li className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                <a href='register.html' className='font-recoleta my-[-1px] block rounded-b-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>
                  register
                </a>
              </li>
            </ul>
          </li>
          <li className='group relative'>
            <button
              className='relative hidden px-[10px] py-[10px] text-[14px] font-medium capitalize leading-none text-white 
            before:absolute before:inset-y-0 before:left-auto before:right-0 before:-z-[1] before:block before:w-0 before:rounded-md 
            before:bg-secondary before:transition-all after:absolute after:inset-0 after:-z-[2] after:block after:rounded-md after:bg-primary after:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full sm:block xl:text-[16px]'
            >
              <AiFillSkin />
              <span className='hidden'>{theme}</span>
            </button>

            <ul
              className='invisible absolute top-[120%] right-0 flex h-80 w-[180px] list-none flex-col flex-nowrap overflow-y-auto rounded-[12px] bg-white opacity-0 drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)]
                transition-all group-hover:visible group-hover:top-[60px] group-hover:opacity-100 sm:left-1/2 sm:-translate-x-1/2'
            >
              {themes.map((i) => (
                <li key={i} onClick={() => handleChangeTheme(i)} className='border-b border-dashed border-primary border-opacity-40 transition-all last:border-b-0 hover:border-solid'>
                  <span className='font-recoleta my-[-1px] block rounded-t-[12px] p-[10px] text-center text-[14px] capitalize leading-[1.571] transition-all hover:bg-primary hover:text-white'>{i}</span>
                </li>
              ))}
            </ul>
          </li>
          <li className='ml-2 sm:ml-5 lg:hidden'>
            <span className='offcanvas-toggle flex hover:text-secondary' onClick={handleOffcanvasToggle}>
              <svg width='24' height='24' className='fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path
                  d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 
                256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z'
                />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
      <OffCanvas isOpen={openMenu} onClose={handleOffcanvasClose} />
    </>
  );
}

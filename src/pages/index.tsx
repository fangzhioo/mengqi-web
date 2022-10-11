import Image from 'next/image';
import * as React from 'react';
import { AiOutlineCrown, AiOutlineEye } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import Layout from '@/layouts/BlankLayout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Layout>
      <Seo templateTitle='MengQi' />

      <div className='bg-base-200 h-screen w-screen overflow-y-auto pb-10'>
        <div>
          <Image
            src={`https://img.paulzzh.com/touhou/random?random=1&t=${Math.random()}`}
            alt=''
            width={1920}
            height={1080}
            className='w-full lg:h-[70vh]'
          />

          <div className='container mx-auto mt-8 px-4'>
            <div className='flex flex-col items-start lg:flex-row lg:items-center lg:justify-between'>
              <h1 className='line-clamp-1 text-xl font-bold'>萌気</h1>
              <div className='mt-4 flex items-center justify-end lg:mt-0 lg:w-1/3'>
                <button className='btn btn-secondary btn-square'>
                  <AiOutlineCrown />
                </button>
                <span className='ml-4 font-bold'>tongren</span>
              </div>
            </div>

            <div className='divider border-base-200'></div>

            <div className='flex items-center pt-4 pb-2'>
              {['首页', '推荐', '归档', '关于'].map((n, i) => (
                <UnderlineLink
                  key={i}
                  href='#'
                  className={clsxm('text-primary mr-8 px-2', [
                    activeIndex === i && 'text-primary-900',
                  ])}
                  onClick={() => setActiveIndex(i)}
                >
                  {n}
                </UnderlineLink>
              ))}
            </div>

            <main className='mt-10 flex flex-col justify-between lg:flex-row lg:space-x-10'>
              <div className='flex-1 space-y-10'>
                <section className='bg-base-100 rounded-box py-8 px-4 shadow'>
                  <p className='line-clamp-5 font-mono text-base capitalize'>
                    科学家已经发现，猫咪们其实有一套自己的交流方式，而这种交流并不简单，其中包含了数百种不同的声音，用以向主人表达它们的不同需求。如果可以弄懂猫咪想要和你“说”些什么，并且明白猫咪如何理解人类的交流方式，你就可以与你的猫咪更好地理解对方，建立更加亲密友好的关系。
                  </p>
                  <ArrowLink href='#' className='mt-4'>
                    查看更多
                  </ArrowLink>
                </section>

                <section className='bg-base-100 rounded-box px-6 pt-4 pb-8 shadow'>
                  <h2 className='line-clamp-1 mb-2 text-lg font-semibold'>
                    读懂猫咪的身体语言
                  </h2>

                  <div className='divider border-base-200/20'></div>

                  <div className='grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4'>
                    {Array(4)
                      .fill(1)
                      .map((n, i) => (
                        <div key={i}>
                          <Image
                            src={`https://img.paulzzh.com/touhou/random?random=1&t=${Math.random()}`}
                            alt=''
                            width={300}
                            height={300}
                            className='rounded-box w-full'
                          />

                          <div className='px-2'>
                            <h3 className='mt-2 text-lg font-semibold'>
                              观察猫咪的尾巴
                            </h3>
                            <p className='inline-flex items-center text-sm'>
                              <span className='material-symbols-outlined mx-1 !text-lg'>
                                <AiOutlineEye />
                              </span>
                              2022
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>

                <section className='bg-base-100 rounded-box py-8 px-4 shadow'>
                  <h2 className='line-clamp-1 border-base-200 border-b pb-4 text-lg font-semibold'>
                    观察猫咪的眼睛
                  </h2>
                  <p className='line-clamp-5 mt-4'>
                    注视猫咪的眼睛有助于和它建立感情，并了解它的想法。但是要小心，直愣愣地盯着，眼都不眨的话，表示进攻，会让猫咪觉得不舒服的。{' '}
                  </p>
                </section>

                <section className='bg-base-100 rounded-box py-8 px-4 shadow'>
                  <h2 className='line-clamp-1 border-base-200 border-b pb-4 text-lg font-semibold'>
                    分享你的猫咪
                  </h2>

                  <h4 className='mt-4 text-sm font-bold'>小主爱称</h4>
                  <input
                    className='input input-bordered mt-2 w-full focus:outline-none'
                    placeholder='请输入'
                  />
                  <h4 className='mt-4 text-sm font-bold'>您和小主的故事</h4>
                  <textarea
                    className='textarea textarea-bordered mt-2 w-full focus:outline-none'
                    placeholder='请输入'
                  ></textarea>
                  <h4 className='mt-4 text-sm font-bold uppercase'>
                    小主的品种
                  </h4>
                  <input
                    className='input textarea-bordered mt-2 w-full focus:outline-none'
                    placeholder='请输入'
                  />
                  <h4 className='mt-4 text-sm font-bold uppercase'>
                    小主的爱好
                  </h4>
                  <input
                    className='input textarea-bordered mt-2 w-full focus:outline-none'
                    placeholder='请输入'
                  />

                  <div className='mt-4 flex items-center'>
                    <input
                      type='checkbox'
                      className='toggle toggle-sm mr-4'
                      defaultChecked
                    />
                    <span className='text-sm'>是否修炼葵花宝典</span>
                  </div>

                  <div className='mt-4'>
                    <UnderlineLink href='/components'>分享一下</UnderlineLink>
                  </div>
                </section>
              </div>

              <aside className='mt-10 space-y-10 lg:mt-0 lg:w-1/3'>
                <div className='bg-base-100 rounded-box px-4 py-8 shadow'>
                  <h3 className='line-clamp-1 border-base-200 border-b pb-4 text-lg font-bold capitalize'>
                    招聘
                  </h3>
                  <ul className='mt-4 space-y-8 px-2'>
                    {Array(4)
                      .fill(1)
                      .map((n, i) => (
                        <li
                          key={i}
                          className='flex items-center justify-between'
                        >
                          <span className='font-bold'>铲屎官</span>
                          <span className='text-xs'> Tongren </span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className='bg-base-100 rounded-box px-4 py-8 shadow'>
                  <h3 className='line-clamp-1 border-base-200 border-b pb-4 text-lg font-bold capitalize'>
                    萌気一下
                  </h3>
                  <p className='line-clamp-5 mt-4 text-base'>
                    猫咪到了年纪最好都做绝育手术，这样它们就不会狂躁不安，也不会动不动生一窝小猫让你无力抚养。雄猫尤其应该性成熟之前就做手术，避免养成一些不好的行为习惯。
                    抱猫咪的时候要小心，抱起来的时候不要抱得太紧。如果把猫咪抱得太紧它会觉得你有敌意，搞不好就会抓伤你。
                    如果觉得受到了其他宠物的威胁，猫咪还会留下一点排泄物标记领地。此外，这也可能意味着猫咪患有尿路感染或者其他疾病。如果问题比较严重，就应该把猫咪和其他宠物隔离开，然后去看医生及时治疗。
                  </p>
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

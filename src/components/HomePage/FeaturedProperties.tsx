import { AiFillEye, AiFillLike, AiOutlineHeart, AiOutlineShareAlt, AiOutlineUser } from 'react-icons/ai';

import ArrowLink from '@/components/ArrowLink';

interface Properties {
  id: string;
  type: string;
  title: string;
  author: string;
  intro: string;
  views: string;
  likes: string;
  createTime: string;
}

function PropertiesCard({ data }: { data: Properties }) {
  return (
    <div className='overflow-hidden rounded-md bg-[#FFFDFC] text-center drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px]'>
      <div className='relative'>
        <a href='#' className='block'>
          <img src='/images/template/properties/properties1.jpg' className='h-full w-full' loading='lazy' width='370' height='266' alt={data.title} />
        </a>
        <div className='absolute top-5 right-5 flex flex-col flex-wrap'>
          <button className='mb-[5px] flex flex-wrap items-center rounded-[2px] bg-primary-400 p-[5px] text-xs text-white'>
            <img className='mr-1' src='/images/template/icon/camera.png' loading='lazy' width='13' height='10' alt='camera icon' />
            {data.views}
          </button>
        </div>
        <span className='absolute bottom-5 left-5 rounded-[2px] bg-[#FFFDFC] p-[5px] text-[14px] font-normal capitalize leading-none text-secondary'>for {data.type}</span>
      </div>

      <div className='py-[20px] px-[20px] text-left'>
        <h3>
          <a href='#' className='font-recoleta text-[22px] leading-tight text-primary xl:text-lg'>
            {data.title}
          </a>
        </h3>
        <h4>
          <a href='#' className='text-tiny font-light text-secondary'>
            {data.intro}
          </a>
        </h4>
        <ul className='mt-[10px] mb-[15px] flex flex-wrap items-center justify-between border-b border-[#E0E0E0] pb-[10px] text-[12px]'>
          <li className='flex flex-wrap items-center border-r border-[#E0DEDE] pr-[25px] sm:pr-[5px] md:pr-[25px]'>
            <AiFillEye className='mr-[5px]' />
            <span>{data.views}</span>
          </li>
          <li className='flex flex-wrap items-center border-r border-[#E0DEDE] pr-[25px] sm:pr-[5px] md:pr-[25px]'>
            <AiFillLike className='mr-[5px]' />
            <span>{data.likes}</span>
          </li>
          <li className='flex flex-wrap items-center border-r border-[#E0DEDE] pr-[25px] sm:pr-[5px] md:pr-[25px]'>
            <AiOutlineShareAlt className='mr-[5px]' />
            <span>{data.likes}</span>
          </li>
          <li className='flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[25px]'>
            <AiOutlineHeart className='mr-[5px]' />
            <span>{data.likes}</span>
          </li>
        </ul>

        <ul>
          <li className='flex items-center justify-between'>
            <span className='font-recoleta flex items-center text-sm leading-none'>
              <AiOutlineUser className='mr-[5px]' />
              <span>{data.author}</span>
            </span>

            <span className='font-recoleta text-sm leading-none'>{data.createTime}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  const featuredProperties: Properties[] = [
    {
      id: '3',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
    {
      id: '4',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
    {
      id: '5',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
    {
      id: '5',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
    {
      id: '7',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
    {
      id: '8',
      type: 'Sale',
      title: 'Elite Garden Resedence.',
      author: 'tongren',
      intro: '253 Montril Street, South Town, Miami',
      views: '5300',
      likes: '200',
      createTime: '2022-10-24 22:33:49',
    },
  ];

  return (
    <section className='featured-properties py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <span className='text-tiny mb-2 inline-block text-secondary'>Best Choice</span>
          </div>
          <div className='col-span-12 mb-[50px] flex flex-col flex-wrap items-start justify-between md:flex-row'>
            <div className='mb-5 lg:mb-0'>
              <h2 className='font-recoleta text-[24px] capitalize text-primary sm:text-[30px] xl:text-xl'>
                精选文章<span className='text-secondary'>.</span>
              </h2>
            </div>
            <ArrowLink href='/blog' className='text-tiny flex flex-wrap items-center text-secondary'>
              Explore all
            </ArrowLink>
          </div>
          <div className='col-span-12'>
            <div>
              <div className='grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3'>
                {featuredProperties.map((card, index) => (
                  <PropertiesCard key={index} data={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

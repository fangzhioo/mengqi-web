import { FaTiktok, FaWeibo, FaZhihu } from 'react-icons/fa';

import { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';

/**
 * 文章详情，样式参考 https://tailwindcss.com/docs/typography-plugin
 * @param param0
 * @returns
 */
export default function PostDetail({ postDetail }: { postDetail?: BlogPost }) {
  return (
    <>
      <img src={postDetail?.cover} className='h-auto w-full' loading='lazy' alt={postDetail?.title} />
      <div className='mt-[55px] mb-[35px]'>
        <span className="relative mb-[5px] block -translate-y-1/2 pl-[10px] text-[18px] font-normal leading-none text-secondary before:absolute before:left-0 before:top-1/2 before:block before:h-[3px] before:w-[3px] before:rounded-full before:bg-secondary before:content-['']">
          <span>{postDetail?.author}</span>
          <span> on </span>
          <span>{postDetail?.createTime}</span>
        </span>
        <h2 className='font-recoleta mb-[10px] text-[22px] leading-tight text-primary md:text-[28px] lg:text-[34px]'>{postDetail?.title}</h2>

        <p className='max-w-[767px]'>{postDetail?.intro}</p>
      </div>

      <article className='prose dark:prose-invert sm:prose-sm lg:prose-lg' dangerouslySetInnerHTML={{ __html: postDetail?.content || '' }} />

      <div className='mt-[25px] mb-[-15px] flex flex-wrap items-center justify-between border-t border-[#E0E0E0] pt-[20px]'>
        <div className='mb-[15px] flex flex-wrap'>
          <span className='text-secondary'>Last Updated:</span>
          <span className='ml-3 text-gray-500'>{postDetail?.updateTime}</span>
        </div>
        <div className='mb-[15px] flex flex-wrap'>
          <span className='text-secondary'>Share:</span>
          <ul className='inline-flex items-center justify-center'>
            <li className='ml-[15px]'>
              <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                <FaTiktok />
              </a>
            </li>
            <li className='ml-[15px]'>
              <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                <FaWeibo />
              </a>
            </li>
            <li className='ml-[15px]'>
              <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
                <FaZhihu />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

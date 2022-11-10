import { useState } from 'react';

import BlogArchives from '@/components/BlogPage/PopularBlogs/BlogArchives';
import BlogCategories from '@/components/BlogPage/PopularBlogs/BlogCategories';
import BlogPopularPost from '@/components/BlogPage/PopularBlogs/BlogPopularPost';
import { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';
import BlogTags from '@/components/BlogPage/PopularBlogs/BlogTags';

export default function PostSidebar({ onSearch, postDetail }: { onSearch?: (k?: string) => void; postDetail?: BlogPost }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = () => {
    onSearch && onSearch(keyword);
  };

  const handleKeywordChange = (e: any) => {
    setKeyword(e?.target.value || '');
  };

  return (
    <aside className='mb-[-40px]'>
      <div className='mb-[40px] rounded-[8px] bg-[#F5F9F8] px-[20px] py-[50px] lg:px-[15px] xl:px-[35px]'>
        <h3 className='font-recoleta mb-[30px] text-[24px] leading-none text-primary underline'>
          Search<span className='text-secondary'>.</span>
        </h3>

        <form action='#' onSubmit={handleSubmit} className='relative'>
          <input
            className='placeholder:text-body w-full rounded-[8px] border border-primary border-opacity-60 bg-white py-[10px] pr-[45px] pl-[20px] 
            font-light leading-[1.75] placeholder:opacity-100 focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]'
            type='text'
            value={keyword}
            onInput={handleKeywordChange}
            placeholder='Keywords here...'
          />

          <button className='absolute top-1/2 right-[20px] z-[1] -translate-y-1/2'>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.19559 0C8.06048 0 10.3913 2.33078 10.3913 5.19568C10.3913 6.18406 10.1138 7.10865 9.63257 7.89615C12.3593 10.0392 12.6608 10.3403 12.7621 
                10.442L13.5201 11.2C14.16 11.8398 14.16 12.8807 13.5201 13.5202C13.2004 13.8399 12.78 14 12.36 14C11.94 14 11.5196 13.8399 11.1999 13.5202L10.4419 
                12.7622C10.341 12.6612 10.0391 12.3594 7.90845 9.625C7.1184 10.1106 6.18908 10.3914 5.19559 10.3914C4.41501 10.3914 3.66434 10.2222 2.96434 9.88896C2.69163 
                9.75917 2.57569 9.4325 2.70585 9.15979C2.83564 8.88708 3.16231 8.77114 3.43465 8.9013C3.98663 9.16417 4.57908 9.2976 5.19559 9.2976C7.45746 9.2976 9.29751 
                7.45755 9.29751 5.19568C9.29751 2.9338 7.4571 1.09375 5.19559 1.09375C2.93408 1.09375 1.09366 2.9338 1.09366 5.19568C1.09366 5.93651 1.29309 6.6624 1.67043 
                7.29458C1.82538 7.5538 1.74043 7.88958 1.48121 8.04453C1.22163 8.19948 0.886212 8.11453 0.731265 7.85531C0.252932 7.05359 -8.96454e-05 6.13411 -8.96454e-05 
                5.19604C-8.96454e-05 2.33078 2.33069 0 5.19559 0ZM11.2152 11.989L11.9728 12.7469C12.1861 12.9602 12.5332 12.9602 12.7465 12.7469C12.9598 12.5336 12.9598 12.1869 
                12.7465 11.9736L11.9885 11.2157C11.8532 11.0801 11.2765 10.5798 8.96757 8.76495C8.90522 8.83094 8.84106 8.89547 8.77507 8.95818C10.5845 11.2795 11.0811 11.8544 11.2152 
                11.989ZM2.43496 3.99911C2.31465 4.2762 2.44189 4.59812 2.71897 4.71844C2.7897 4.74906 2.86371 4.76401 2.93626 4.76401C3.14736 4.76401 3.34861 4.64078 3.4383 4.43479C3.74236 
                3.73406 4.43215 3.28125 5.19559 3.28125C5.49783 3.28125 5.74246 3.03661 5.74246 2.73438C5.74246 2.43214 5.49783 2.1875 5.19559 2.1875C3.99611 2.1875 2.91257 2.8988 2.43496 3.99911Z'
                fill='#016450'
              />
            </svg>
          </button>
        </form>
      </div>

      <BlogTags tags={postDetail?.tags} />
      <BlogCategories cates={postDetail?.cates} />
      <BlogArchives />
      <BlogPopularPost />
    </aside>
  );
}

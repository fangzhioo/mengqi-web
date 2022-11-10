import { UnderlineLink } from '@/components/ArrowLink';

export default function BlogPopularPost() {
  const popularPosts = [
    {
      id: 1,
      author: 'Tongren',
      createTime: '05 December, 21',
      title: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: 2,
      author: 'Mengqi',
      createTime: '07 December, 21',
      title: 'Voluptatibus deserunt cum ex adipisci accusamus itaque.',
    },
  ];

  return (
    <div className='mb-[40px] rounded-[8px] bg-[#f5f9f8] px-[20px] py-[50px] lg:px-[15px] xl:px-[35px]'>
      <h3 className='font-recoleta mb-[30px] text-[24px] leading-none text-primary underline'>
        Popular Post<span className='text-secondary'>.</span>
      </h3>
      <div className='relative grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 md:grid-cols-1 md:gap-x-[0px]'>
        {popularPosts.map((post) => (
          <div key={post.id} className='mb-[20px] overflow-hidden rounded-md bg-[#FFFDFC] text-center drop-shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
            <div className='relative'>
              <a href='#' className='block'>
                <img src='/images/template/properties/properties1.jpg' className='h-full w-full' loading='lazy' width='370' height='266' alt={post.title} />
              </a>
            </div>

            <div className='py-[20px] px-[20px] text-left sm:px-[10px] lg:px-[20px]'>
              <span className="relative mb-[8px] block -translate-y-1/2 pl-[10px] text-[12px] font-light leading-none text-secondary before:absolute before:left-0 before:top-1/2 before:h-[3px] before:w-[3px] before:rounded-full before:bg-secondary before:content-['']">
                <span>{post.author}</span> on <span>{post.createTime}</span>
              </span>
              <h3>
                <UnderlineLink href={`/blog/${post.id}`} className='font-recoleta text-[16px] leading-[1.285] text-primary transition-all hover:text-secondary'>
                  {post.title}
                </UnderlineLink>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

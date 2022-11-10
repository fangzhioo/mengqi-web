export interface BlogPost {
  /** author */
  author?: string;

  /** cates */
  cates?: Array<any>;

  /** commentStatus */
  commentStatus?: boolean;

  /** content */
  content?: string;

  /** cover */
  cover?: string;

  /** createTime */
  createTime?: string;

  /** id */
  id?: number;

  /** intro */
  intro?: string;

  /** likeCount */
  likeCount?: number;

  /** readCount */
  readCount?: number;

  /** tags */
  tags?: Array<any>;

  /** title */
  title?: string;

  /** updateTime */
  updateTime?: string;
}

export default function BlogPostCard({ data }: { data?: BlogPost }) {
  return (
    <div className='overflow-hidden rounded-md bg-[#FFFDFC] drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px] dark:bg-[#211d1d]'>
      <a href={`/blog/${data?.id}`} className='mb-2 block h-[270px] w-[370px] overflow-hidden rounded-[6px]'>
        <img className='h-full w-full' src={data?.cover || '/images/template/blog-post/post1.png'} loading='lazy' alt={data?.title} />
      </a>
      <div className='p-5'>
        <span className="relative mb-[5px] block -translate-y-1/2 pl-[10px] text-[14px] font-normal leading-none text-secondary before:absolute before:left-0 before:top-1/2 before:h-[3px] before:w-[3px] before:rounded-full before:bg-secondary before:content-['']">{data?.author}</span>
        <h3>
          <a href={`/blog/${data?.id}`} className='font-recoleta mb-[10px] block text-[22px] leading-[1.285] text-primary transition-all hover:text-secondary xl:text-[27px]'>
            {data?.title}
          </a>
        </h3>
        <p className='text-[16px] font-light leading-[1.75] text-[#494949]'>{data?.intro}</p>
      </div>
    </div>
  );
}

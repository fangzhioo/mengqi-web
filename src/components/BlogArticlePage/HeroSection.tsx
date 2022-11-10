import { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';

export default function HeroSection({ postDetail }: { postDetail?: BlogPost }) {
  return (
    <section
      className="relative flex h-[350px] flex-wrap items-center bg-[#FFF6F0] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-[#000000] before:opacity-[70%] before:content-[''] lg:h-[513px] xl:h-[650px]"
      style={{ backgroundImage: `url(${postDetail?.cover || '/images/template/breadcrumb/bg-1.png'})` }}
    >
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='relative z-10 text-center text-white'>
              <div className='mb-5'>
                <span className='block text-base'>Our Blog Post</span>
              </div>
              <h1 className='font-recoleta text-[36px] leading-tight sm:text-[50px] md:text-[68px] lg:text-[50px] xl:text-2xl'>{postDetail?.title}</h1>

              <p className='mx-auto mt-5 max-w-[500px] text-center text-base'>{postDetail?.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

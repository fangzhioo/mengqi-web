import BlogPostCard, { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';
import BlogSidebar from '@/components/BlogPage/PopularBlogs/BlogSidebar';
import Pagination from '@/components/BlogPage/PopularBlogs/Pagination';

interface PopularBlogsProps {
  page?: number;
  total?: number;
  blogs: BlogPost[];
}

export default function PopularBlogs({ page = 1, total = 0, blogs = [] }: PopularBlogsProps) {
  return (
    <section className='popular-properties py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='mb-[-30px] grid grid-cols-12 gap-[30px] xl:gap-[50px]'>
          <div className='col-span-12 mb-[30px] md:col-span-6 lg:col-span-8'>
            <div className='grid grid-cols-1 gap-x-[30px] gap-y-[40px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
              {blogs.map((blog, index) => (
                <BlogPostCard key={blog.id} data={blog} />
              ))}
            </div>

            <div className='mt-[50px] grid grid-cols-12 gap-[30px]'>
              <div className='col-span-12'>
                <Pagination page={page} total={total} />
              </div>
            </div>
          </div>

          <div className='col-span-12 mb-[30px] md:col-span-6 lg:col-span-4'>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

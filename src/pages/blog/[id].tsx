import { GetServerSideProps } from 'next';

import HeroSection from '@/components/BlogArticlePage/HeroSection';
import PostDetail from '@/components/BlogArticlePage/PostDetail';
import PostFeedback from '@/components/BlogArticlePage/PostFeedback';
import PostSidebar from '@/components/BlogArticlePage/PostSidebar';
import { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';
import FooterSection from '@/components/FooterSection';
import ScrollUp from '@/components/ScrollUp';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  // Fetch data from external API
  const res = await fetch(`http://172.25.87.76:8088/blog/article/get/${context.params?.id}`);
  const postData = await res.json();
  if (!postData.data) {
    return {
      notFound: true,
    };
  }
  // Pass data to the page via props
  return { props: { postData: postData.data } };
};

export default function BlogDetailPage({ postData }: { postData: BlogPost }) {
  return (
    <Layout>
      <Seo templateTitle='Mengqi Blog Article' description='desc' />

      <StickyHeader />

      <main>
        <HeroSection postDetail={postData} />

        <section className='post-detail py-[80px] lg:py-[120px]'>
          <div className='container'>
            <div className='mb-[-30px] grid grid-cols-12 gap-[30px] xl:gap-[50px]'>
              <div className='col-span-12 mb-[30px] md:col-span-6 lg:col-span-8'>
                <PostDetail postDetail={postData} />

                {postData.commentStatus && (
                  <div className='mt-[70px] grid grid-cols-12'>
                    <div className='col-span-12'>
                      <PostFeedback />
                    </div>
                  </div>
                )}
              </div>

              <div className='col-span-12 mb-[30px] md:col-span-6 lg:col-span-4'>
                <PostSidebar postDetail={postData} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <ScrollUp />
    </Layout>
  );
}

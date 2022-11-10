import { GetServerSideProps } from 'next';
import React from 'react';

import HeroSection from '@/components/BlogPage/HeroSection';
import PopularBlogs from '@/components/BlogPage/PopularBlogs';
import { BlogPost } from '@/components/BlogPage/PopularBlogs/BlogPostCard';
import FooterSection from '@/components/FooterSection';
import ScrollUp from '@/components/ScrollUp';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

// const blogs: BlogPost[] = [
//   {
//     id: '1',
//     author: 'tongren',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//     title: 'Tip’s about Real Estate Recent Conditions from Agent.',
//   },
//   {
//     id: '2',
//     author: 'mengqi',
//     title: 'Importance of Build quality of modern Real Estate.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '3',
//     author: 'tongren',
//     title: 'Most Popular Real Estae area you can choose from.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '4',
//     author: 'tongren',
//     title: 'The Home Buying Process: A Comprehensive Guide.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '5',
//     author: 'tongren',
//     title: 'The Best Types Of Real Estate Investments information.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '6',
//     author: 'tongren',
//     title: 'How Much Does Land Survey Cost in 2022?.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '7',
//     author: 'tongren',
//     title: '18 Best Real Estate Apps For Buyers, Sellers & Investors.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '8',
//     author: 'tongren',
//     title: 'Ultimate Guide to Buying a Vacation Rental Property.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '9',
//     author: 'tongren',
//     title: 'Do You Qualify For Real Estate Line Of Credit?',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
//   {
//     id: '10',
//     author: 'tongren',
//     title: 'Tip’s about Real Estate Recent Conditions from Agent.',
//     desc: 'Properties are most budget friendly so you have are opportunity to find are the best the best...',
//   },
// ];

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  // Fetch data from external API
  const page = context.query.p || 1;
  const res = await fetch(`http://172.25.87.76:8088/blog/article/list?current=${page}&size=10`);
  const postsData = await res.json();

  // Pass data to the page via props
  return { props: { blogs: postsData.list } };
};

interface BlogPageProps {
  blogs: BlogPost[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <Layout>
      <Seo templateTitle='MengQi' />

      <StickyHeader />

      <main>
        <HeroSection />
        <PopularBlogs blogs={blogs} total={0} page={1} />
      </main>

      <FooterSection />
      <ScrollUp />
    </Layout>
  );
}

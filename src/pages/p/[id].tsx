import { GetServerSideProps } from 'next/types';
import * as React from 'react';

import Seo from '@/components/Seo';

import Layout from '@/layouts/BlankLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  // Fetch data from external API
  const res = await fetch(
    `http://127.0.0.1:3000/api/post/${context.params?.id}`
  );
  const postData = await res.json();

  // Pass data to the page via props
  return { props: { postData } };
};

export default function PostPage({
  postData,
}: {
  postData: Record<string, string>;
}) {
  return (
    <Layout>
      <Seo templateTitle={postData.title} description={postData.intro} />

      <main>
        <section className='px-32' id='post-container'>
          <h1 className='text-primary-200'>{postData.title}</h1>
          <figure>{postData.intro}</figure>
          <article
            className='prose lg:prose-xl'
            id='post-content'
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </section>
      </main>
    </Layout>
  );
}

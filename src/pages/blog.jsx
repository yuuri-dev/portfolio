import React from 'react';
import Layout from '@/components/Layout';
import ArticleFromQiita from '@/components/blog/ArticleFromQiita';
import ArticleFromFile from '@/components/blog/ArticleFromFile';
import PageHeader from '@/components/PageHeader';

const Blog = () => {
  return (
    <Layout>
      <PageHeader title="Blog" subtitle="技術記事・開発メモ" />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <ArticleFromQiita />
        <ArticleFromFile />
      </div>
    </Layout>
  );
};

export default Blog;

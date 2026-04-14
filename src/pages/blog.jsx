import React from 'react';
import Layout from '@/components/Layout';
import ArticleFromQiita from '@/components/blog/ArticleFromQiita';
import ArticleFromFile from '@/components/blog/ArticleFromFile';

const Blog = () => {
  return (
    <Layout>
      {/* ページヘッダー */}
      <div className="border-b py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-400 text-sm mt-1">技術記事・開発メモ</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <ArticleFromQiita />
        <ArticleFromFile />
      </div>
    </Layout>
  );
};

export default Blog;

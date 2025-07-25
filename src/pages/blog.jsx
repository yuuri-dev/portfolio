import React  from 'react';
import Layout from '@/components/Layout';
import ArticleFromQiita from '@/components/blog/ArticleFromQiita';
import ArticleFromFile from '@/components/blog/ArticleFromFile';


const Blog = () => {
  
  return (
    <div>
      <Layout>
        <ArticleFromQiita />
        <ArticleFromFile />
      </Layout>
    </div>
  );
};

export default Blog;

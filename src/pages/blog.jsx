import React  from 'react';
import Layout from '@/components/Layout';
import ArticleFromQiita from '@/components/blog/ArticleFromQiita';


const Blog = () => {
  
  return (
    <div>
      <Layout>
        <ArticleFromQiita />
      </Layout>
    </div>
  );
};

export default Blog;

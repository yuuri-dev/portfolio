import Layout from '@/components/Layout';
import ProjectList from '@/components/Projects/ProjectList';
import React from 'react';
import projectData from '@/data/projectData';

const Projects = () => {
  return (
    <Layout>
      {/* ページヘッダー */}
      <div className="bg-gray-50 border-b py-12 px-4 text-center">
        <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-2">
          Works
        </p>
        <h1 className="text-4xl font-black text-gray-900 mb-3">Projects</h1>
        <p className="text-gray-500 text-sm">
          個人開発・ハッカソンで制作したアプリケーション
        </p>
        <div className="mt-4 inline-block bg-black text-white text-xs px-3 py-1 rounded-full">
          {projectData.length} projects
        </div>
      </div>

      {/* プロジェクト一覧 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((info) => (
            <ProjectList key={info.id} info={info} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

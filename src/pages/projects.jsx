import Layout from '@/components/Layout';
import ProjectList from '@/components/Projects/ProjectList';
import PageHeader from '@/components/PageHeader';
import React from 'react';
import projectData from '@/data/projectData';

const Projects = () => {
  return (
    <Layout>
      <PageHeader title="Projects" subtitle="個人開発・ハッカソンで制作したアプリケーション" />

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

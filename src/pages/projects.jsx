import Layout from '@/components/Layout';
import ProjectList from '@/components/Projects/ProjectList';
import React from 'react';
import projectData from '@/data/projectData';

const Projects = () => {
  return (
    <Layout>
      <div className="px-4 py-8">
        <p className="text-xl font-semibold mb-6 text-center">
          今まで作成したアプリです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((info, index) => (
            <ProjectList key={index} info={info} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

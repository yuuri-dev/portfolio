import Layout from '@/components/Layout';
import SkillList from '@/components/SkillList';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <PageHeader title="About" subtitle="Profile & Skills" />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-10">
          <img
            src="/images/icon.jpeg"
            alt="yuuriのプロフィール画像"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Yuuri Inoue</h3>
            <p className="mb-2">
              私は個人開発が好きな大学4年生です。
            </p>
            <p className="mb-2">
              大学では機械システムを専攻しており、その傍らでアプリ開発の学習を続けています。
            </p>
            <p>
              主にフロントエンドの開発をしていますが、最近だとバックエンドやネイティブアプリの開発にも力を入れています。
            </p>
          </div>
        </div>

        <div>
          <SkillList />
        </div>
      </div>
    </Layout>
  );
};

export default About;

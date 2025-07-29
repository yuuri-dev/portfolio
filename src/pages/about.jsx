import Layout from '@/components/Layout';
import SkillList from '@/components/SkillList';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>

        <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-10">
          <img
            src="/images/icon.jpeg"
            alt="井上悠理のプロフィール画像"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">井上 悠理</h3>
            <p className="mb-2">
              私は電気通信大学に所属している大学3年生です。
            </p>
            <p className="mb-2">
              大学では機械システムを専攻しており、その傍らでWeb開発の学習を続けています。
            </p>
            <p>
              主にフロントエンドの勉強をしており、今後はバックエンドの学習も進めて
              フルスタックで活躍することを目標にしています。
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
          <SkillList />
        </div>
      </div>
    </Layout>
  );
};

export default About;

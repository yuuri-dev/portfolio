import React from 'react';

const skillArray = [
  {
    lang: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'ほぼ全てのアプリで使用',
  },
  {
    lang: 'TypeScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'ほぼ全てのアプリで使用',
  },
  {
    lang: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'ほぼ全てのアプリで使用',
  },
  {
    lang: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    description: 'ほとんどのプロジェクトで使用',
  },
  {
    lang: 'Vite',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    description: 'ハッカソンで使用',
  },
  {
    lang: 'Node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'backendの大部分で使用。Expressも経験あり。',
  },
  {
    lang: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    description: 'ShiftyなどのDB実装で使用',
  },
  {
    lang: 'Figma',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'アプリのデザインの思案で使用',
  },
  {
    lang: 'Canva',
    img: '',
    description: 'アプリのデザイン・アイコン作成等で使用',
  },
  {
    lang: 'TailwindCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    description: '最近のwebアプリ開発の大半で使用',
  },
  {
    lang: 'Vercel',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    description: '多くのアプリのデプロイで使用',
  },
];

const SkillList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">技術スタック</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {skillArray.map((skill) => (
          <div
            key={skill.lang}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center transition hover:scale-105 hover:shadow-lg duration-200"
          >
            <img
              src={skill.img}
              alt={`${skill.lang} logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-sm font-semibold">{skill.lang}</p>
            <p className="text-xs text-center text-gray-500 mt-1">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;

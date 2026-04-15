import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import { SiX, SiQiita } from 'react-icons/si';

const topSkills = [
  {
    lang: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    lang: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    lang: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    lang: 'TypeScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    lang: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  },
  {
    lang: 'TailwindCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="flex flex-col items-center space-y-4 px-4">
          <p className="text-white text-sm font-medium tracking-widest uppercase opacity-80">
            Frontend Developer
          </p>
          <h1 className="text-white text-5xl text-center font-black">
            Yuuri Inoue
          </h1>
          <p className="text-white text-lg text-center max-w-xl mx-auto opacity-90">
            Frontend-focused engineer building web & mobile apps.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/projects"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack Preview */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
        <p className="text-gray-500 text-sm mb-8">主に使用している技術</p>
        <div className="flex flex-wrap justify-center gap-8">
          {topSkills.map((skill) => (
            <div key={skill.lang} className="flex flex-col items-center gap-2">
              <img
                src={skill.img}
                alt={`${skill.lang} logo`}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs text-gray-600 font-medium">
                {skill.lang}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">制作物を見る</h2>
        <p className="text-gray-500 mb-6">
          ハッカソンや個人開発で作ったアプリを紹介しています。
        </p>
        <Link
          href="/projects"
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Projects →
        </Link>
      </section>

      {/* Contact */}
      <section className="border-t py-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-gray-400 text-sm mb-10">お気軽にご連絡ください</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:yuuri5117@gmail.com"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Mail size={28} />
            <span className="text-xs">Email</span>
          </a>
          <a
            href="https://github.com/yuuri-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Github size={28} />
            <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://twitter.com/yuuri5117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <SiX size={26} />
            <span className="text-xs">X</span>
          </a>
          <a
            href="https://qiita.com/yuuri17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-green-600 transition-colors"
          >
            <SiQiita size={28} />
            <span className="text-xs">Qiita</span>
          </a>
          <a
            href="https://note.com/yuuri935"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className="text-2xl font-bold leading-7">n</span>
            <span className="text-xs">note</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}

import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import ArticleCard from './ArticleCard';

const ArticleFromFile = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      {
        id: 'test',
        title: 'test',
        created_at: '2024-12-01',
      },
      {
        id: 'portfolio',
        title: 'portfolio',
        created_at: '2025-03-15',
      },
    ]);
  }, []);

  const badge = {
    icon: <FileText size={10} />,
    label: 'Note',
    className: 'text-gray-500 bg-gray-100',
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <FileText size={22} className="text-gray-500" />
        <h2 className="text-xl font-bold text-gray-900">ローカル記事</h2>
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
          {articles.length} 件
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <ArticleCard
            key={item.id}
            title={item.title}
            href={`/articles/${item.id}`}
            date={item.created_at}
            badge={badge}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleFromFile;

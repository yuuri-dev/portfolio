import React from 'react';
import { SiQiita } from 'react-icons/si';
import { useQuery } from '@tanstack/react-query';
import ArticleCard from './ArticleCard';

const ArticleFromQiita = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['qiita-articles'],
    queryFn: () => fetch('/api/getQiitaArticle').then((res) => res.json()),
  });

  const badge = {
    icon: <SiQiita size={10} />,
    label: 'Qiita',
    className: 'text-green-600 bg-green-50',
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <SiQiita size={24} className="text-green-500" />
        <h2 className="text-xl font-bold text-gray-900">Qiita</h2>
        {!isLoading && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
            {articles.length} 件
          </span>
        )}
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 h-36 animate-pulse" />
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <ArticleCard
              key={item.id}
              title={item.title}
              href={`/blog/${item.id}`}
              date={item.created_at}
              badge={badge}
              externalHref={item.url}
              hoverColor="hover:text-green-600"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleFromQiita;

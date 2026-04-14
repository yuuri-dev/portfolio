import React from 'react';
import { SiQiita } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const ArticleFromQiita = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['qiita-articles'],
    queryFn: () => fetch('/api/getQiitaArticle').then((res) => res.json()),
  });

  return (
    <section>
      {/* セクションヘッダー */}
      <div className="flex items-center gap-3 mb-6">
        <SiQiita size={24} className="text-green-500" />
        <h2 className="text-xl font-bold text-gray-900">Qiita</h2>
        {!isLoading && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
            {articles.length} 件
          </span>
        )}
      </div>

      {/* ローディング */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 h-36 animate-pulse" />
          ))}
        </div>
      )}

      {/* 記事一覧 */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
            >
              {/* Qiita バッジ */}
              <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mb-3 w-fit">
                <SiQiita size={10} />
                Qiita
              </span>

              {/* タイトル */}
              <a
                href={`/blog/${item.id}`}
                className="flex-1 text-gray-900 hover:text-green-600 transition-colors"
              >
                <h3 className="text-base font-semibold leading-snug line-clamp-3">
                  {item.title}
                </h3>
              </a>

              {/* フッター */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-400">
                  {new Date(item.created_at).toLocaleDateString('ja-JP')}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                  aria-label="Qiitaで読む"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleFromQiita;

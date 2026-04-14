import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

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

  return (
    <section>
      {/* セクションヘッダー */}
      <div className="flex items-center gap-3 mb-6">
        <FileText size={22} className="text-gray-500" />
        <h2 className="text-xl font-bold text-gray-900">ローカル記事</h2>
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
          {articles.length} 件
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
          >
            {/* バッジ */}
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mb-3 w-fit">
              <FileText size={10} />
              Note
            </span>

            {/* タイトル */}
            <a
              href={`/articles/${item.id}`}
              className="flex-1 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <h3 className="text-base font-semibold leading-snug">
                {item.title}
              </h3>
            </a>

            {/* 日付 */}
            <p className="text-xs text-gray-400 mt-4">
              {new Date(item.created_at).toLocaleDateString('ja-JP')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleFromFile;

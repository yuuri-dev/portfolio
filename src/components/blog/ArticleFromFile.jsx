import React, { useEffect, useState } from 'react';

const ArticleFromFile = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 手動で記事情報を指定（タイトルと作成日）
    setArticles([
      {
        id: 'test.md',
        title: 'test',
        created_at: '2024-12-01',
      },
      {
        id: 'portfolio.md',
        title: 'portfolio',
        created_at: '2025-03-15',
      },
    ]);
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-6">ローカル記事一覧</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-200 rounded-lg shadow p-6 bg-white"
          >
            {/* タイトル */}
            <a
              href={`/articles/${item.id}`}
              rel="noopener noreferrer"
              className="block mb-8 text-gray-900 hover:text-blue-600 hover:underline cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            </a>
            {/* 日付 */}
            <p className="text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleFromFile;

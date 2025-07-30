import React, { useEffect, useState } from 'react';
import { SiQiita } from 'react-icons/si';

const ArticleFromQiita = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/getQiitaArticle')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-6">Qiita記事はこちら</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-200 rounded-lg shadow p-6 bg-white"
          >
            {/* タイトルと日付 */}
            <a
              href={`/blog/${item.id}`}
              rel="noopener noreferrer"
              className="block mb-8 text-gray-900 hover:text-blue-600 hover:underline cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            </a>
              <p className="text-sm text-gray-500">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            

            {/* Qiitaアイコンへのリンク */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-green-600 hover:opacity-70 transition-opacity"
              aria-label="Qiitaで記事を読む"
            >
              <SiQiita size={48} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleFromQiita;

import React, { useEffect, useState } from 'react';

//アクセストークンは後回し
const ArticleFromQiita = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/getQiitaArticle')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <p>Qiita記事はこちら</p>
      {articles.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-sm text-gray-500">{item.created_at}</p>
          <a href={`/articles/${item.id}`} className="text-blue-600 underline">
            Read more
          </a>
          <a href={item.url}>実際のQiita記事はこちら</a>
        </div>
      ))}
    </div>
  );
};

export default ArticleFromQiita;

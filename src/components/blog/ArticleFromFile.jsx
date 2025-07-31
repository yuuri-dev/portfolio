import React, { useEffect, useState } from 'react';

const ArticleFromFile = () => {
const [files, setFiles] = useState([]);

  useEffect(() => {
    // 手動で一覧を指定（本番では自動化する方法もあり）
    setFiles(['test.md', 'portfolio.md']);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ローカル記事一覧</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
        {files.map((file) => (
          <li key={file}>
            <a
              href={`/articles/${file}`}
              className="block p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              <h3 className="text-lg font-semibold">
                {file.replace('.md', '')}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleFromFile;
import React, { useEffect, useState } from 'react';

const ArticleFromFile = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // 手動で一覧を指定（本番では自動化する方法もあり）
    setFiles(['test.md', 'second-post.md']);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ローカル記事一覧</h2>
      <ul className="list-disc pl-4">
        {files.map((file) => (
          <li key={file}>
            <a href={`/articles/${file}`} className="text-blue-600 underline">
              {file.replace('.md', '')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleFromFile;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/getQiitaBody?id=${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500">{article.created_at}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: article.rendered_body }}
      />
    </div>
  );
};

export default ArticleDetail;

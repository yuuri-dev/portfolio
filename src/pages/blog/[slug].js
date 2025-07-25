import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/getMarkdownArticle?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content);
      });
  }, [slug]);

  return (
    <div className="prose mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

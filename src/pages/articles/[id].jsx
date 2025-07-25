import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (!slug) return;

    fetch(`/articles/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [slug]);

  return (
    <div className="prose max-w-none p-4">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default ArticlePage;

import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: markdown = '' } = useQuery({
    queryKey: ['article', id],
    queryFn: () => fetch(`/articles/${id}.md`).then((res) => res.text()),
    enabled: !!id,
  });

  return (
    <div className="prose max-w-none p-4">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default ArticlePage;

import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: markdown = '', isLoading } = useQuery({
    queryKey: ['article', id],
    queryFn: () => fetch(`/articles/${id}.md`).then((res) => res.text()),
    enabled: !!id,
  });

  const showLoading = !router.isReady || isLoading;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          ブログ一覧へ
        </Link>

        {showLoading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-100 rounded w-3/4" />
            <div className="h-px bg-gray-100 my-6" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-100 rounded" />
            ))}
          </div>
        )}

        {!showLoading && (
          <div className="prose max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlePage;

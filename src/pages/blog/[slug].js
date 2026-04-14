import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { ExternalLink, ArrowLeft, Calendar } from 'lucide-react';
import { SiQiita } from 'react-icons/si';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ['qiita-body', slug],
    queryFn: () =>
      fetch(`/api/getQiitaBody?slug=${slug}`).then((res) => res.json()),
    enabled: !!slug,
  });

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* 戻るボタン */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          ブログ一覧へ
        </Link>

        {/* ローディング */}
        {isLoading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-1/4" />
            <div className="h-px bg-gray-100 my-6" />
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        )}

        {/* 記事コンテンツ */}
        {!isLoading && data && (
          <>
            {/* ヘッダー */}
            <div className="mb-8">
              {/* Qiita バッジ */}
              <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mb-4">
                <SiQiita size={10} />
                Qiita
              </span>

              {/* タイトル */}
              <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
                {data.title}
              </h1>

              {/* メタ情報 */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {data.created_at
                    ? new Date(data.created_at).toLocaleDateString('ja-JP')
                    : ''}
                </span>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-green-500 transition-colors"
                >
                  <ExternalLink size={13} />
                  Qiita で読む
                </a>
              </div>
            </div>

            <hr className="mb-8 border-gray-100" />

            {/* 本文 */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: data.rendered_body }}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

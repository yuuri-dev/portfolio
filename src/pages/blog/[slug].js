import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: content = '' } = useQuery({
    queryKey: ['qiita-body', slug],
    queryFn: () =>
      fetch(`/api/getQiitaBody?slug=${slug}`)
        .then((res) => res.json())
        .then((data) => data.rendered_body),
    enabled: !!slug,
  });

  return (
    <div className="prose mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

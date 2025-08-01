import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/getQiitaBody?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // ← ここで rendered_body を確認できる
        setContent(data.rendered_body); // ← content ではなく rendered_body に変更
      });
  }, [slug]);

  return (
    <div className="prose mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

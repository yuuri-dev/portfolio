// pages/api/getQiitaBody.js
export default async function handler(req, res) {
  const { slug } = req.query; // ← ここを id から slug に
  const response = await fetch(`https://qiita.com/api/v2/items/${slug}`, {
    cache: 'no-store',
  });

  const data = await response.json();
  res.status(200).json(data);
}

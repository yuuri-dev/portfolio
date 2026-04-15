// pages/api/getQiitaBody.js
export default async function handler(req, res) {
  const { slug } = req.query;
  try {
    const response = await fetch(`https://qiita.com/api/v2/items/${slug}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      return res.status(response.status).json({ message: 'Qiita API error' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

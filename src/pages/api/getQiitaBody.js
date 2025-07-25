export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://qiita.com/api/v2/items/${id}`, {
    cache: 'no-store',
  });

  const data = await response.json();
  res.status(200).json(data);
}

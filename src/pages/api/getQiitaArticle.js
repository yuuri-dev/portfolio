// pages/api/qiita.js
export default async function handler(req, res) {
  const response = await fetch(
    'https://qiita.com/api/v2/users/yuuri17/items'
  );
  const data = await response.json();
  res.status(200).json(data);
}

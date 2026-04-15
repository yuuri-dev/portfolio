// pages/api/qiita.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://qiita.com/api/v2/users/yuuri17/items'
    );
    if (!response.ok) {
      return res.status(response.status).json({ message: 'Qiita API error' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

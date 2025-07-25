import fs from 'fs';
import path from 'path';
import markdownToHtml from '../../lib/markdownToHtml';

export default async function handler(req, res) {
  const { slug } = req.query;

  const filePath = path.join(process.cwd(), 'blog', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ message: 'File not found' });
    return;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const htmlContent = await markdownToHtml(fileContents);

  res.status(200).json({ content: htmlContent });
}

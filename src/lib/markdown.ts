import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getMarkdownContent(filename: string) {
  const filePath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    metadata: data,
    content: content
  };
}
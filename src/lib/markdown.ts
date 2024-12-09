import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getMarkdownContent(filename: string) {
  try {
    const filePath = path.join(contentDirectory, `${filename}.md`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${filename}.md not found in content directory`);
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data,
      content: content
    };
  } catch (error) {
    console.error(`Error reading markdown file ${filename}.md:`, error);
    throw error;
  }
}
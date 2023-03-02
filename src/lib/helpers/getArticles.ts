import path from 'path'; 
import fs from 'fs'; 
import matter from 'gray-matter'; 
import {serialize} from 'next-mdx-remote/serialize'; 
type Serialize = typeof serialize; 

export const folderPath = path.join(process.cwd(), 'articles'); 

export const getArticleData = async (fileName: string, serialize: Serialize) => {
  if (fileName.split('.').length < 2) {
    fileName = `${fileName}.mdx`;
  }

  const filePath = path.join(folderPath, fileName);
  const fileData = fs.readFileSync(filePath, 'utf-8');

  const { content, data } = matter(fileData);

  const mdxSource = await serialize(content);

  const slug = fileName.replace(/\.mdx$/, '');

  return {
    ...data,
    slug,
    mdxSource,
  }; 
};

export const getAllArticles = async (serialize: Serialize) => {
  const articles = fs.readdirSync(folderPath); 
  
  const articlesDataArray = await Promise.all(articles.map((fileName => {
    return getArticleData(fileName, serialize);
  })))
  
  return articlesDataArray
}

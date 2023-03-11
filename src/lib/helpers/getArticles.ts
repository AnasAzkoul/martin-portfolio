import path from 'path'; 
import fs from 'fs/promises'; 
import matter from 'gray-matter'; 
import {serialize} from 'next-mdx-remote/serialize'; 
type Serialize = typeof serialize; 

export const folderPath = path.join(process.cwd(), 'articles'); 

export const getArticleData = async (fileName: string, serialize: Serialize) => {
  if (fileName.split('.').length < 2) {
    fileName = `${fileName}.mdx`;
  }

  const filePath = path.join(folderPath, fileName);
  const fileData = await fs.readFile(filePath, 'utf-8');

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
  const articles = await fs.readdir(folderPath); 
  
  const articlesDataArray = await Promise.all(articles.map((fileName => {
    return getArticleData(fileName, serialize);
  })).reverse())
  
  return articlesDataArray
}


export const getNextAndPrevArticle = async(currentSlug: string) => {
  const slugs = (await fs.readdir(folderPath)).map(fileName => fileName.replace(/\.mdx$/, '')).reverse(); 
  
  const currentIndex = slugs.indexOf(currentSlug as string)
  
  let nextIndex = currentIndex < slugs.length || currentIndex >= 0 ? currentIndex + 1 : -1; 
  
  let prevIndex = currentIndex >= 0 ? currentIndex - 1 : -1; 
  
  
  
  return ({
    nextPage: nextIndex !== -1 ? slugs[nextIndex] : null, 
    prevPage: prevIndex !== -1 ? slugs[prevIndex] : null,   
  })
}

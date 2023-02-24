import path from 'path'; 
import fs from 'fs'; 
import matter from 'gray-matter'; 


const folderPath = path.join(process.cwd(), 'articles'); 


export const getArticleData = (fileName: string) => {
  const articlePath = path.join(folderPath, fileName); 
  const fileData = fs.readFileSync(articlePath, 'utf-8'); 
  
  const slug = fileName.replace(/\.md$/, ''); 
  const {data, content} = matter(fileData); 
  
  const articleData = {
    slug, 
    ...data, 
    content
  }
  
  return articleData; 
}

export const getAllArticles = () => {
  const articles = fs.readdirSync(folderPath); 
  
  const articlesDataArray = articles.map(article => {
    return getArticleData(article); 
  })
  
  return articlesDataArray; 
}

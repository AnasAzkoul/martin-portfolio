import React from 'react'; 
import Layout from '@/components/Layout/Layout';
import ReactMarkdown from 'react-markdown';

type Props = {}

const Article = (props: Props) => {
  return (
    <Layout>
      <div className='mt-40'>
        <ReactMarkdown>
          # Hello,
          *World*
        </ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Article

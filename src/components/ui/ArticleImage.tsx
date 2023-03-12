import React from 'react'; 
import Image from 'next/image';

type Props = {
  src: string
  
}

const ArticleImage = ({src}: Props) => {
  return (
    <div className='bg-white'>
      <Image
        src={src}
        alt='Picture of the author'
        width={800}
        height={500}
      />
    </div>
  );
}

export default ArticleImage

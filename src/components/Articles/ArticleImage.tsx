import React from "react";
import Image from "next/image";

type Props = {
  src: string[];
}

const ArticleImage = ({ src }: Props) => {

  if(src.length === 1) {
    return (
      <div className="bg-white">
        <Image
          src={src[0]}
          alt={src[0].replace(/\?(.*))/, "")}
          width={800}
          height={500}
        />
      </div>
    );
  }

  if(src.length > 1) {
    return (
      <div className='flex gap-2 bg-white'>
        {src.map(item => {
          return (
            <Image
              src={item}
              width={400}
              height={500}
              alt={item.replace(/\?(.*))/, '')}
              key={item}
            />
          );
        })}
      </div>
    )
  }

};

export default ArticleImage;

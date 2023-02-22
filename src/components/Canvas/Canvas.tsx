import React, { useEffect, useState } from 'react';
import {useCanvas} from '@/lib/hooks/useCanvas';
import styles from './canvas.module.css';

type Props = {};

const Canvas = (props: Props) => {
  const {canvasRef, onClickHandler, onClearButton} = useCanvas(); 
  
  return (
    <div className='relative'>
      <canvas ref={canvasRef} className={styles.canvas} id='canvas' onClick={(e) => onClickHandler(e)} />
      <div className='flex justify-end px-10'>
        <button
          onClick={() => onClearButton()}
          className='absolute bottom-5 px-4 py-2 border border-red-700 rounded-xl text-primary text-2xl bg-red-600 font-semibold'>Clear Path</button>
      </div>
    </div>
  );
};

export default Canvas;

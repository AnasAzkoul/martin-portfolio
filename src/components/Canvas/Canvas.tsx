import React, { useRef, useEffect, useState } from 'react';
import { resetCities } from '@/lib/optimization/cities';
import Path from '@/lib/optimization/path';
import {City} from '../../lib/optimization/city';
import { useCanvas } from '@/lib/hooks/useCanvas';
import styles from './canvas.module.css';

type Props = {};

const Canvas = (props: Props) => {
  const {canvasRef, onClickHandler} = useCanvas(); 
  
  return <canvas ref={canvasRef} className={styles.canvas} id='canvas' onClick={(e) => onClickHandler(e)} />;
};

export default Canvas;

// const clear = () => {
//   if (!context || !canvasRef.current) return;
//   context.clearRect(
//     0,
//     0,
//     canvasRef.current.width,
//     canvasRef.current.height
//   );
// };

// const drawBackgroundImage = () => {
//   // if (!image) return;
//   const scale = width / backgroundImage.width;
//   context?.drawImage(
//     backgroundImage,
//     0,
//     0,
//     backgroundImage.width * scale,
//     backgroundImage.height * scale
//   );
// };

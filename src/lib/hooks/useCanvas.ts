import React, {useRef, useEffect, useState} from 'react';
import {resetCities} from '../optimization/cities';
import Path from '../optimization/path';
import {City} from '../optimization/city';
import {useResizeWindow} from './useResizeWindow';
import {render, getClickedCity, getCanvasCoordinates} from '../helpers/canvasHelpers'; 

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mapCanvas, setMapCanvas] = useState<HTMLCanvasElement | null>(null);
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);
  const [mapCities, setMapCities] = useState<City[]>(resetCities());
  const path = new Path(mapCities!);
  const {width, height} = useResizeWindow()

  const onClickHandler = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const coordinates = getCanvasCoordinates(e, mapCanvas);
    const clicked = getClickedCity(coordinates!, mapCities);

    if (clicked !== -1) {
      path.cityClicked(clicked);
    }
    render(canvasContext, mapCities, path);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    setMapCanvas(canvas);
    canvas.height = height;
    canvas.width = width;

    const cities = resetCities();
    setMapCities(cities);

    const context = canvas.getContext('2d');
    if (!context) return;
    setCanvasContext(context);

    const backgroundImage = new Image();
    backgroundImage.src = '/images/USA.svg';

    canvas.style.backgroundImage = `url('${backgroundImage.src}')`;
    canvas.style.backgroundPosition = 'center center';
    canvas.style.backgroundSize = 'cover';

    render(canvasContext, mapCities, path);

  }, [canvasRef, mapCanvas]);
  
  return {
    canvasRef, 
    onClickHandler, 
  }
}

import {City} from '../optimization/city';
import Path from '../optimization/path';

export const render = (canvasContext: CanvasRenderingContext2D | null, mapCities: City[], path: Path) => {
  if (!canvasContext) return;
  path.draw(canvasContext);
  
  mapCities?.forEach((city) => {
    city.render(canvasContext);
  });

  canvasContext.fillStyle = City.colors.NORMAL;
};

export const getClickedCity = (coordinates: { x: number; y: number }, mapCities: City[]) => {
  for (let i = 0; i < mapCities.length; i++) {
    console.log(mapCities[i].distanceTo(coordinates) <= 16);
    if (mapCities[i].distanceTo(coordinates) <= 16) {
      return i;
    }
  }
  return -1;
};

export const getCanvasCoordinates = (
  event: React.MouseEvent<HTMLCanvasElement, MouseEvent>, 
  mapCanvas: HTMLCanvasElement | null
) => {
  if (!mapCanvas) return;
  const bb = mapCanvas.getBoundingClientRect();
  const x = (event.clientX - bb.left) * (mapCanvas.width / bb.width);
  const y = (event.clientY - bb.top) * (mapCanvas.height / bb.height);
  return { x, y };
};

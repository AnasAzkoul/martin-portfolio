import {City} from '../optimization/city';
import Path from '../optimization/path';

export const clear = (canvasContext: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null) => {
  canvasContext?.clearRect(0, 0, canvas?.width!, canvas?.height!)
}

export const render = (canvasContext: CanvasRenderingContext2D | null, mapCities: City[], path: Path, canvas: HTMLCanvasElement | null) => {
  if (!canvasContext || !path) return;
  clear(canvasContext, canvas)
  path.draw();
  
  mapCities?.forEach((city) => {
    city.render(canvasContext);
  });

  canvasContext.fillStyle = '#EFE9E7';
  canvasContext.font = 'bold 20px Arial';
  canvasContext.textBaseline = 'bottom';
  canvasContext.textAlign = 'start';
  var rounded = Math.round(path.value * 100) / 100;
  canvasContext.fillText(
    'Length: ' + rounded.toString() + '  miles',
    10,
    canvas?.height! - 10
  );
};

export const getClickedCity = (coordinates: { x: number; y: number }, mapCities: City[]) => {
  for (let i = 0; i < mapCities.length; i++) {
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

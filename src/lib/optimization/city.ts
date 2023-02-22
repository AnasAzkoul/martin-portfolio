import { Geometry } from './geometry';

interface Colors {
  NORMAL: '#28536C';
  FIRST: '#AA8C39';
  LAST: '#AA5439';
}

type Status = 'NORMAL' | 'FIRST' | 'LAST';

interface Position {
  x: number;
  y: number;
}

export class City {
  position: Position;
  name: string;
  // colors: Colors;
  radius: number;
  status: Status;

  constructor(position: Position, name: string) {
    this.position = position;
    this.name = name;
    this.radius = 8;
    this.status = 'NORMAL';
  }

  static colors = {
    NORMAL: '#28536C',
    FIRST: '#AA8C39',
    LAST: '#AA5439',
  };
  
  setStatus(value: Status) {
    this.status = value; 
  }

  render(context: CanvasRenderingContext2D | null) {
    if (!context) return;
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius!,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = City.colors[this.status]; // make the color follow the status;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  writeText(context: CanvasRenderingContext2D | null) {
    if (!context) return;
    context.fillStyle = 'white';
    context.font = 'bold 18px Arial';
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillText(this.name, this.position.x, this.position.y);
  }

  distanceTo(position: Position) {
    return Geometry.euclideanDistance(this.position, position); 
  }
}

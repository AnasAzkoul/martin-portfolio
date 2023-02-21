
// export class Geometry {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
  
//   get roundedX() {
//     return Math.round(this.x);
//   }

//   get roundedY() {
//     return Math.round(this.y);
//   }

//   addVector(v: { x: number; y: number }) {
//     this.x += v.x;
//     this.y += v.y;
//   }

//   scale(s: number): void {
//     this.x *= s;
//     this.y *= s;
//   }

//   copy() {
//     return new Geometry(this.x, this.y);
//   }

//   vectorSum(left: { x: number; y: number }, right: { x: number; y: number }) {
//     return new Geometry(left.x + left.y, right.x + right.y);
//   }

//   static euclideanDistance(
//     left: { x: number; y: number },
//     right: { x: number; y: number }
//   ) {
//     const dx = left.x - right.x;
//     const dy = left.y - right.y;
//     const sumSquares = dx * dx + dy * dy;
//     return Math.sqrt(sumSquares);
//   }
// }

export class Geometry {
  constructor() {}

  static Vector2d = class {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    get roundedX() {
      return Math.round(this.x);
    }

    get roundedY() {
      return Math.round(this.y);
    }

    addVector(v: { x: number; y: number }) {
      this.x += v.x;
      this.y += v.y;
    }

    scale(s: number) {
      this.x *= s;
      this.y *= s;
    }
  };

  vectorSum(left: { x: number; y: number }, right: { x: number; y: number }) {
    return new Geometry.Vector2d(left.x + left.y, right.x + right.y);
  }

  static euclideanDistance(
    left: { x: number; y: number },
    right: { x: number; y: number }
  ) {
    const dx = left.x - right.x;
    const dy = left.y - right.y;
    const sumSquares = dx * dx + dy * dy;
    return Math.sqrt(sumSquares);
  }
}


  

import {City} from './city'; 
import { Geometry } from './geometry';

class Path {
  cities: City[];
  indices: number[];
  value: number;
  first: number;
  last: number;
  context: CanvasRenderingContext2D | null; 

  constructor(cities: City[], context: CanvasRenderingContext2D | null) {
    this.cities = cities;
    this.indices = [];
    this.value = 0;
    this.first = 0;
    this.last = 0;
    this.context = context; 
  }

  getLength() {
    return this.indices.length;
  }

  getCity(i: number) {
    if (this.indices.length === 0) return; 
    if (this.getLength() < i) {
      console.log('No city to get from getCity() / Path class');
      return null;
    }
    return this.cities[this.indices[i]];
  }

  colorCities() {
    if (this.indices.length === 0) {
      this.cities.forEach((city) => city.status = 'NORMAL');
      return; 
    }; 
    
    this.cities.forEach((city) => city.status = 'NORMAL');
    const firstCity = this.getCity(this.first);
    const lastCity = this.getCity(this.last);

    if (firstCity) firstCity.setStatus('FIRST');
    if (lastCity) lastCity.setStatus('LAST');
  }

  draw() {
    if (!this.context) return;

    if (this.indices.length === 0) return;

    const firstCity = this.getCity(this.first);
    if (!firstCity) return;
    this.context.moveTo(firstCity.position.x, firstCity.position.y);

    this.indices.forEach((_, i) => {
      const nextCity = this.getCity(i);
      this.context?.lineTo(nextCity?.position.x!, nextCity?.position.y!);
    });

    this.context.strokeStyle = 'gray';
    this.context.lineWidth = 5;
    this.context.stroke();
  }

  updateValue() {
    this.value = 0;
    if (this.getLength() > 1) {
      this.indices.forEach((item, i) => {
        if (i > 0) {
          this.value += Geometry.euclideanDistance(
            this.getCity(i - 1)?.position!,
            this.getCity(i)?.position!
          );
        }
      });
    } else {
      return;
    }
    this.value *= 4.34; // magic number to convert to miles
    this.getValue(); 
  }
  
  getValue() {
    return this.value; 
  }

  isLastMove(i: number) {
    const connectingToLast = this.indices[0] === i;
    const allCitiesConnected = this.getLength() === this.cities.length;
    return connectingToLast && allCitiesConnected;
  }

  containsCity(i: number) {
    return this.indices.indexOf(i) !== -1;
  }

  cityClicked(i: number) {
    if (
      this.indices.indexOf(i) === this.first &&
      !this.isLastMove(i) &&
      this.getLength() !== 1
    ) {
      this.indices.splice(this.first, 1);
      --this.last;
    } else {
      if (!this.containsCity(i) || this.isLastMove(i)) {
        this.insertCity(i);
      } else {
        this.removeCity(i);
      }
    }
    this.updateValue();
    this.colorCities();
  }

  insertCity(i: number) {
    if (this.getLength() === 0) {
      this.indices.push(i);
    } else {
      this.indices.splice(this.last + 1, 0, i);
      ++this.last;
    }
  }

  removeCity(i: number) {
    const index = this.indices.indexOf(i);
    this.indices.splice(index, 1);
    this.last = index - 1;
    if (this.last < 0) {
      this.last = 0;
    }
    // this.draw(); 
  }
};

export default Path; 

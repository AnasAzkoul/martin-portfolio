import {City} from './city'; 
import { Geometry } from './geometry';

class Path {
  cities: City[]
  indices: number[]
  value: number
  first: number
  last: number
  
  constructor(cities: City[]) {
    this.cities = cities;
    this.indices = [];
    this.value = 0;
    this.first = 0;
    this.last = 0;
  }
  
  getLength() {
    return this.indices.length
  }
  
  getCity(i: number) {
    if (this.getLength() < i) {
      console.log('get city condition passed'); 
      return null 
    }
    return this.cities[this.indices[i]]
  }
  
  colorCities() {
    this.cities.forEach(item => item.status = "NORMAL"); 
    
    const firstCity = this.getCity(this.first); 
    const lastCity = this.getCity(this.last); 
    
    if (firstCity) firstCity.status = "FIRST"; 
    if (lastCity) lastCity.status = "LAST"; 
  }
  
  draw(context: CanvasRenderingContext2D | null) {
    if (!context) return; 

    if (this.indices.length === 0) return; 

    
    const firstCity = this.getCity(this.first); 
    if (!firstCity) return; 
    context.moveTo(firstCity.position.x, firstCity.position.y); 
    
    this.indices.forEach((item, i) => {
      const nextCity = this.getCity(i); 
      context.lineTo(nextCity?.position.x!, nextCity?.position.y!); 
    })
    
    context.strokeStyle = 'gray'; 
    context.lineWidth = 5; 
    context.stroke(); 
  }
  
  updateValue () {
    this.value = 0; 
    console.log(this.indices)
    if (this.getLength() > 1) {
      this.indices.forEach((item, i) => {
        if(i > 0) {
          this.value += Geometry.euclideanDistance(this.getCity(i - 1)?.position!, this.getCity(i)?.position!);
        }
      })
    } else {
      return 
    }
    this.value *= 4.34 // magic number to convert to miles
  }
  
  isLastMove(i: number) {
    const connectingToLast = this.indices[0] === i; 
    const allCitiesConnected = this.getLength() === this.cities.length; 
    return connectingToLast && allCitiesConnected
  }
  
  containsCity(i: number) {
    return this.indices.indexOf(i) !== -1 
  }
  
  cityClicked(i: number) {
    if (this.indices.indexOf(i) === this.first
      && !this.isLastMove(i)
      && this.getLength() !== 1
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
      ++this.last
    }
  }
  
  removeCity(i: number) {
    const index = this.indices.indexOf(i); 
    this.indices.splice(index, 1); 
    this.last = index - 1; 
    if (this.last < 0) {
      this.last = 0
    }
  }
};

export default Path; 

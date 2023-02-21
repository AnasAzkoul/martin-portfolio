import citiesData from './citiesData'; 
import {City} from './city'; 
import { Geometry } from './geometry';

export function resetCities() {
  let cities:City[] = []; 
  citiesData.forEach(item => {
    const position = new Geometry.Vector2d(item.x, item.y); 
    cities.push(
      new City(position, item.name)
    );
  })
  return cities
}

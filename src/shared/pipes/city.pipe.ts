import { Pipe, PipeTransform } from '@angular/core';
import * as citiesJson from '../../assets/json/cities.json';

export enum CityFormatting {
  SHORT,
  DEFAULT,
  LONG
}

export type CityNames = {
  short?: string;
  long?: string;
};

const cityData: { [key: string]: CityNames } = citiesJson;

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {
  transform(value: string, format: CityFormatting = CityFormatting.DEFAULT): string {
    const cityNames = cityData[value];

    switch (format) {
      case CityFormatting.DEFAULT:
        return value;
      case CityFormatting.LONG:
        return cityNames?.long ?? value;
      case CityFormatting.SHORT:
        return cityNames?.short ?? value;
    }
  }
}

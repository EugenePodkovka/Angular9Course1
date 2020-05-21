import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  getRandomStr(length: number) {
    return Math.random().toString(20).substr(2, length);
  }
}

export const RandomStrLen = new InjectionToken<string>('RandomStrLen');

export function GeneratorFactory(n: number) {
  return (generator: GeneratorService): string => generator.getRandomStr(n);
}

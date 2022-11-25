import { Injectable } from '@angular/core';
import { IPersonData } from '../../interfaces/IPersonData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: IPersonData[] = [
    {
      name: "Lauren Vickers",
      actual: 90,
      target: 90,
      points: 69
    },
    {
      name: "Shazia Darby",
      target: 80,
      actual: 88,
      points: 26
    },
    {
      name: "Zara Cain",
      target: 85,
      actual: 81,
      points: 124
    },
    {
      name: "Clair Newton",
      target: 80,
      actual: 22,
      points: 82
    },
    {
      name: "April Bruce Kieran",
      target: 90,
      actual: 92,
      points: 26
    },
  ]

  constructor() { }

  getList(): Promise<IPersonData[]> {
    return new Promise((resolve, reject) => {
        resolve(this.data)
    })
  }
}

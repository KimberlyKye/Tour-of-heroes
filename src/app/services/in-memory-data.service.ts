import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() { 
    const heroes = [
      {
          id: 1,
          name: 'Iron Man'
      },
      {
          id: 2,
          name: 'Captain America'
      },
      {
          id: 3,
          name: 'Hulk'
      },
      {
          id: 4,
          name: 'Thor'
      },
      {
          id: 5,
          name: 'Scarlet Witch'
      },
      {
          id: 6,
          name: 'Black Widow'
      },
      {
          id: 7,
          name: 'Ant Man'
      },
      {
          id: 8,
          name: 'Spider Man'
      },
      {
          id: 9,
          name: 'Vision'
      },
      {
          id: 10,
          name: 'Dr Strange'
      }
    ];
    return {heroes};
  }
}

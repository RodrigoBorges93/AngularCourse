import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes: Hero[] = [
      {id: 1, name: 'Hulk'},
      {id: 2, name: 'Thor'},
      {id: 3, name: 'Homem-Aranha'},
      {id: 4, name: 'Homem de Ferro'},
      {id: 5, name: 'Viúva Negra'},
      {id: 6, name: 'Pantera Negra'},
      {id: 7, name: 'Homem Formiga'}
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number{

    const heroIds = heroes.map(hero => hero.id);

    const maxId = Math.max(... heroIds);

    const nextId = heroes && heroes.length > 0 ? maxId + 1 : 1;

    return nextId;

    // return heroes && heroes.length > 0
    // ? Math.max(... heroes.map(hero => hero.id)) + 1
    // :
    // 1
  }
}


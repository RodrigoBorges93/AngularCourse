import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;

  constructor() { }

  getHeroes(): Hero[]{
    return this.heroes;
  }
}

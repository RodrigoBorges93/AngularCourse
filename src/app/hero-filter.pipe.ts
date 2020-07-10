import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(heroes: Hero[], filter: string): Hero[] {
    const name = filter.trim().toLocaleLowerCase();

    if (!name){
      return heroes
    }

    return heroes.filter(
      hero => hero.name.toLocaleLowerCase().indexOf(name) !== -1
    )
  }

}

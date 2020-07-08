import { Hero } from './hero.model';
import { HeroesComponent } from './heroes/heroes.component';
// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://private-anon-7cad281640-superheroes.apiary-mock.com/'
// });

// var dados

// async function loadHeroes(){
//   const response = await api.get('characters/')
//   dados = response.data.Characters;
//   for (let i = 0; i < dados.length; i ++){
//     console.log(dados[i]);
//   }
// }

// loadHeroes();

// export const HEROES: Hero[] = dados;

export const HEROES: Hero[] = [
  {id: 1, name: 'Hulk'},
  {id: 2, name: 'Thor'},
  {id: 3, name: 'Homem-Aranha'},
  {id: 4, name: 'Homem de Ferro'},
  {id: 5, name: 'Viúva Negra'},
  {id: 6, name: 'Pantera Negra'},
  {id: 7, name: 'Homem Formiga'}
]

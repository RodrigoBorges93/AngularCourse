import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${environment.baseURL}/heroes`

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    })
  }

  heroes = HEROES

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl, this.httpOptions).pipe(
      tap(() => this.log('lista de heróis obtida.')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )

    //return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`, this.httpOptions).pipe(
      tap(() => this.log(`Obtido herói id=${id}`)),
      catchError(this.handleError<Hero>('getHero'))
    );

    //return of(this.heroes.find(hero =>  hero.id === id));
  }

  updateHero(hero: Hero): Observable<Hero> {

    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap(() => this.log(`Atualizado hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero) => this.log(`Adicionado hero id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!(term && term.trim())){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`, this.httpOptions).pipe(
      tap((heroes) => {
        heroes && heroes.length
        ?
        this.log(`Encontrado o termo ${term} e ${heroes.length} heróis`)
        :
        this.log(`Não encontrado nenhum valor com o termo ${term}`)
      },
      catchError(this.handleError<Hero[]>('getHeroes', [])))
    )}

  deleteHero(hero: Hero): Observable<any>{
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(() => this.log(`Deletado hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error.body['error'])

      this.log(`${operation} failed: ${error.body['error']}`)

      return of(result as T)
    }
  }
}

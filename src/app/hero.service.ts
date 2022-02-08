import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiURL: string = 'api/heroes';

  constructor(
    private http: HttpClient
  ) {
  }

  public getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    return this.http.get<Hero[]>(this.apiURL);
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.apiURL + '/' + id);
  }

  public updateHero(hero: Hero): Observable<Object> {
    return this.http.put(
      this.apiURL + '/' + hero.id, // <- url
      hero // <- cuerpo de la petición {id: hero.id, name: hero.name}
    );
  }

}

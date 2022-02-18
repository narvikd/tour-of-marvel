import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiURL: string = 'https://gateway.marvel.com/v1/public/';
  private apiSecret: string = 'ts=pototo&apikey=a888b122becd6ed58f77e5a0766a35bd&hash=7ba4f5e70f6dcefae802f4274eec8335';

  constructor(
    private http: HttpClient
  ) {
  }

  public getHeroes(limit: number, offset: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiURL}characters?limit=${limit}&offset=${offset}${this.apiSecret}`)
      .pipe(map((data: any) => data.data.results));
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero[]>(`${this.apiURL}characters/${id}?limit=20&offset=0${this.apiSecret}`)
      .pipe(map((data: any) => data.data.results[0]));
  }

  // No sabía si meter esto en un helper, como es una función que da un poco igual donde esté,
  // la he dejado aquí en vez de crear otro archivo.
  public getRndNumber(): number {
    const max = 600;
    const min = 300;
    return Math.floor(Math.random() * (max - min) + min);
  }
}

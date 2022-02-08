import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public selectedHero?: Hero;
  public loading: boolean = true;

  public heroes: Hero[] = [];


  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.loadHeroes()
  }

  private loadHeroes(): void {
    this.heroService.getHeroes()
      // .pipe(
      //   tap((heroesObserved: Hero[]) => {
      //     console.log(heroesObserved)
      //   }), delay(5000)
      // )
      .subscribe((heroesObserved: Hero[]) => {
        this.heroes = heroesObserved;
        this.loading = false;
      });
    // setInterval(() => {
    //   this.heroes = this.heroService.getHeroes();
    //   this.loading = false;
    // }, 3000);
  }

  // public heroClick(heroe: Hero): void {
  //   this.selectedHero = heroe;
  // }


  public onHeroCreated(newHero: string) {
    console.log(newHero + " desde el padre")
    this.heroes.push({
      id: Math.floor(Math.random() * 100),
      name: newHero
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
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
      .subscribe((heroesObserved: Hero[]) => {
        this.heroes = heroesObserved;
        this.loading = false;
      });
  }


  public onHeroCreated(newHero: string) {
    this.heroes.push({
      id: Math.floor(Math.random() * 100),
      name: newHero
    })
  }
}

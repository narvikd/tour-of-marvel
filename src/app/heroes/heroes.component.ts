import {Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

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
  ) { }

  ngOnInit(): void {
    this.loadHeroes()
  }

  private loadHeroes(): void {
    this.heroService.getHeroes(20, 0)
      .subscribe((heroesObserved: Hero[]) => {
        this.heroes = heroesObserved;
        this.loading = false;
      });
  }

}

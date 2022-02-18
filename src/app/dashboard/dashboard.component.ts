import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  private loadHeroes() {
    for (let i = 0; i < 12; i++) {
      this.heroService.getRandomHero().subscribe((hero: Hero) => {
        this.heroes.push(hero);
      });
    }
  }

}

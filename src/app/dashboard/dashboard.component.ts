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
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.loadHeroes();
  }

  private loadHeroes() {
    this.heroService.getHeroes().subscribe((heroesBienObservados: Hero[]) => {
      this.heroes = heroesBienObservados.slice(1, 5);
    });
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {debounceTime, distinctUntilChanged, filter, fromEvent, tap} from "rxjs";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('input', {static: true}) input!: ElementRef;
  public heroes: Hero[] = [];
  public loading: boolean = true;

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const elem = this.input.nativeElement
    fromEvent(elem, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          if (elem.value.length >= 3) {
            this.heroService.getHeroesByName(elem.value)
              .subscribe((heroesObserved: Hero[]) => {
                this.heroes = heroesObserved;
              });
            this.loading = false;
          }
        })
      )
      .subscribe();
  }
}

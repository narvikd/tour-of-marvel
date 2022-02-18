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
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.heroService.getHeroesByName(this.input.nativeElement.value)
            .subscribe((heroesObserved: Hero[]) => {
              this.heroes = heroesObserved;
            });
          this.loading = false;
        })
      )
      .subscribe();
  }
}

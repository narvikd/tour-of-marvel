import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    // this.heroService.getHeroById(id).pipe(
    //   (err) => {
    //   console.log(err)
    //   return of(undefined)
    // })
    //   .subscribe((hero?: Hero) => {
    //   this.selectedHero = hero;
    // });

    this.heroService.getHeroById(id).subscribe((hero?: Hero) => {
        this.selectedHero = hero;
    });
  }

  public volverAtras(): void {
    this.location.back();
  }

  public update(): void {
    if (this.selectedHero) {
      this.heroService.updateHero(this.selectedHero).subscribe(() => {
        alert('Guardado ok');
      });
    }
  }
}

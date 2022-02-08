import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
  @Output() heroCreated: EventEmitter<string> = new EventEmitter();
  public heroName?: string

  constructor() { }

  ngOnInit(): void {
  }

  public addHero() {
    console.log(this.heroName);
    this.heroCreated.emit(this.heroName);
  }

}

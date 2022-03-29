import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero;

  constructor (private activateRoute: ActivatedRoute, private location: Location, private heroService: HeroService) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe( hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe( () => this.goBack())
  }
}

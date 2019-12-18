import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  listHero = [];

  getList() {
    this.heroService.getHeros().subscribe(vl => {
      this.listHero = vl;
    })
  }

  ngOnInit() {
    this.getList();
  }

}

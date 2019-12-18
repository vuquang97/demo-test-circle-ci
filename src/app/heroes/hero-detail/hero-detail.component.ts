import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  hero = {};
  name = '';

  ngOnInit() {
    this.route.paramMap
      .subscribe((data) => {
        // this.name = data.crisis.name;
        this.heroService.getHeroById(data['params'].id).subscribe(el => {
          this.hero = el;
        });
        console.log(this.hero)
        // this.crisis = data.crisis;
      });
    // this.getHeroById();
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     // console.log(this.heroService.getHeroById(params.get('id')))
    //     return this.heroService.getHeroById(params.get('id'))
    //   })
    // );
    // console.log(this.hero$);
  }



  getHeroById() {
    this.route.data.subscribe((data) => {
      this.hero = data;
      // console.log(data);
    });
    // let id = this.route.snapshot.paramMap.get('id');
    // this.heroService.getHeroById(id).subscribe(vl => {
    //   this.hero = vl;
    // })
  }

  gotoList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { switchMap } from 'rxjs/operators';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';


const routes: Routes = [
  {
    path: 'hero-list',
    component: HeroHomeComponent,
    children: [
      {
        path: '',
        component: HeroListComponent,
        children: [
          {
            path: 'hero-detail/:id',
            component: HeroDetailComponent,
            // resolve: {
            //   crisis: CrisisDetailResolverService
            // }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

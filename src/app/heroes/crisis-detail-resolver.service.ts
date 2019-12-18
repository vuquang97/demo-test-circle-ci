
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { HeroService } from '../hero.service';
import { listHero } from '../mock-heroes';
import { Hero } from '../heros';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Hero> {
  constructor(private cs: HeroService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.cs.getHeroById(id).pipe(
      take(1),
      mergeMap(hero => {
        if (hero) {
          return of(hero);
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
